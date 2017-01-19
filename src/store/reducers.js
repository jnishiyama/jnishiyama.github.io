import { combineReducers } from 'redux'
import locationReducer from './location'
import { reducer as uiReducer } from 'redux-ui'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    ui: uiReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
