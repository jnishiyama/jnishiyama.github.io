import update from 'immutability-helper'
import { getActions } from '../selectors/home'

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_UI_STATE = '@@redux-ui/UPDATE_UI_STATE'
export const RESET_ACTION_LOG = 'RESET_ACTION_LOG'
export const MOUNT_UI_STATE = '@@redux-ui/MOUNT_UI_STATE'

// Just generate some uuids
// courtesy: http://stackoverflow.com/a/2117523/791215
const getUUID = (autoId) => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
          .replace(/[xy]/g, (c) => {
            let r = Math.random() * 16 | 0
            let v = c === 'x' ? r : (r & 0x3 | 0x8)
            return v.toString(16)
          })
}

// ------------------------------------
// Actions
// ------------------------------------
export function resetUiState(action) {
  return {
    type    : RESET_ACTION_LOG,
    payload : action
  }
}

/*  Thunk it up
*/
// has side efffects so it gets thunked up
export const rewind = () => {
  return (dispatch, getState) => {
    // get Action Log from state
    const state = getState()

    // flip it and reverse it
    const actions = getActions(state).reverse()
    // get the Diff times
    const diffTimes = [ ...state.home.initialHash.diffTimes ].reverse()
    const initialHash = state.home.initialHash

    // set initial timeout to 0
    let cumulTime = 0

    for (let i in actions) {
      let action = actions[i]
      if (initialHash[action.payload.name].latest.id === action.id) {
        continue
      }

      // pop the diff and add to cumulative timeout
      cumulTime += diffTimes.pop()
      setTimeout(
        () => {
          // dispatch redux ui action
          dispatch(
            {
              type: action.type,
              payload: action.payload,
              ignore: true
            }
          )
        },
        cumulTime
      )
    }

    // finally reset Action log
    setTimeout(
      () => {
        // dispatch redux ui action
        dispatch(
          {
            type    : RESET_ACTION_LOG
          }
        )
      },
      cumulTime
    )
  }
}

export const actions = {
  rewind
}

// ------------------------------------
// Utilities
// ------------------------------------

// Take the mount state and use it to create our initial
// ui actions. This is sothat we can reset to initial state
// programattically
const _initializeActionLog = (payload) => {
  return Object.keys(payload.defaults).map(
    (e) => (
      {
        type: UPDATE_UI_STATE,
        payload: {
          key: ['homies'],
          name: e,
          value: {
            x: payload.defaults[e].x,
            y: payload.defaults[e].y
          }
        },
        timestamp: Date.now()
      }
    )
  )
}

// create hash that will give us latest action
// by payload name, the initial action, and
// keep a record of the time between actions
const createInitialHash = (actions) => {
  return Object.assign(...actions.map(
      (action) => {
        return {
          [action.payload.name]: {
            latest: null,
            initialAction: { ...action, id: getUUID() }
          },
          diffTimes: []
        }
      }
    )
  )
}

// get the time diff
const getDiffTime = (newTimestamp, actionLogEntity) => {
  const latestGlobalAction = actionLogEntity.allIds.slice(-1)[0]
  return (
    latestGlobalAction !== undefined
      ?
        newTimestamp - actionLogEntity.byId[latestGlobalAction].timestamp
      :
        0
  )
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_UI_STATE] : (state, action) => {
    // we don't care about the actions as we are
    // rewinding
    if (action.ignore === true) {
      return state
    }

    // shorten some refs
    const actionName = action.payload.name
    const initialHash = state.initialHash
    const actionLogEntity = state.actionLogEntity

    // if we need to create initial action
    // this will come in handy
    const actionsToBeMerged = {}
    const actionsToBePushed = []

    // get new object of our specs
    const newAction = { ...action, timestamp: Date.now(), id: getUUID() }
    const diffTime = getDiffTime(newAction.timestamp, actionLogEntity)

    const isFirstUpdate = initialHash[actionName].latest === undefined || initialHash[actionName].latest === null
    // if this is our first update on this
    // payload name, create initial action
    if (isFirstUpdate) {
      const initialAction = {
        ...initialHash[actionName].initialAction,
        timestamp: newAction.timestamp
      }
      actionsToBeMerged[initialAction.id] = initialAction
      actionsToBePushed.push(initialAction.id)
    }

    actionsToBeMerged[newAction.id] = newAction
    actionsToBePushed.push(newAction.id)

    // update state
    const newState = update(state, {
      actionLogEntity: {
        byId: { $merge: actionsToBeMerged },
        allIds: { $push: actionsToBePushed }
      },
      initialHash: {
        [newAction.payload.name]: {
          latest: { $set: newAction }
        },
        diffTimes: { $push: [diffTime] }
      }
    })
    return Object.assign({}, state, newState)
  },
  [MOUNT_UI_STATE] : (state, action) => {
    if (Object.keys(state.initialHash).length === 0 &&
        state.initialHash.constructor === Object) {
      const actionLog = _initializeActionLog(action.payload)
      const initialHash = createInitialHash(actionLog)

      return Object.assign(
        {},
        state,
        {
          initialHash: initialHash
        }
      )
    }
    else return state
  },
  [RESET_ACTION_LOG] :(state, action) => {
    const initialHash = { ...state.initialHash }

    // set all latest to undefined
    // diff time will show up in keys as index
    for (let k in Object.keys(initialHash)) {
      initialHash[k] && (initialHash[k].latest = null)
    }

    // set diffTimes to empty
    initialHash.diffTimes = []
    return Object.assign(
      {},
      state,
      {
        initialHash: initialHash,
        actionLogEntity: {
          byId: {},
          allIds: []
        }
      }
    )
  }
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  initialHash: {},
  actionLogEntity: {
    byId: {},
    allIds: []
  }
}

export default function homeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
