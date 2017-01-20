// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_UI_STATE = '@@redux-ui/UPDATE_UI_STATE'
export const RESET_ACTION_LOG = 'RESET_ACTION_LOG'
export const MOUNT_UI_STATE = '@@redux-ui/MOUNT_UI_STATE'

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
    let state = getState()

    // flip it and reverse it
    let actionLog = [ ...state.home.actionLog ].reverse()

    // essentially pop the actions
    // increase timeout time so that we can see each movement
    for (let i in actionLog){
      let incremental = 30
      setTimeout(() => {
        dispatch(
          {
            type: actionLog[i].type,
            payload: actionLog[i].payload,
            ignore: true
          }
        )
      }, incremental * i)
    }

    // finally reset Action log
    dispatch(
      {
        type    : RESET_ACTION_LOG
      }
    )
  }
}

export const actions = {
  rewind,
}

// Take the mount state and use it to create our initial
// ui actions. This is sothat we can reset to initial state
// programattically 
const _initializeActionLog = (payload) => {
  return Object.keys(payload.defaults).map(
    (e) => (
      {
        type: UPDATE_UI_STATE,
        payload:{
          key: payload.key,
          name: e,
          value: {
            x: payload.defaults[e].x,
            y: payload.defaults[e].y,
          }
        }
      }
    )
  )
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_UI_STATE] : (state, action) => {
    if (action.ignore === true){
      return state
    }
    const actionLog = [ ...state.actionLog ]
    actionLog.push(action)
    return Object.assign({}, state, { actionLog: actionLog })
  },
  [MOUNT_UI_STATE] : (state, action) => {
    const actionLog = _initializeActionLog(action.payload)
    return Object.assign({}, state, { actionLog: actionLog, initialLog: actionLog })
  },
  [RESET_ACTION_LOG] :(state, action) => {
    return Object.assign({}, state, { actionLog: [ ...state.initialLog ] })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  actionLog: [],
  initialLog: []
}

export default function homeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
