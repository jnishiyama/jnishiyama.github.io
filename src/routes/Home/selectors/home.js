import { createSelector } from 'reselect'

const getActionsArray = (state) => {
  return state.home.actionLogEntity.allIds.map(
    (id) => {
      let action = { ...state.home.actionLogEntity.byId[id] }
      return action
    }
  )
}

export const getActions = createSelector(
  [getActionsArray],
  (actions) => {
    return actions
  }
)
