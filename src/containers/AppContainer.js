import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import localForage from 'localForage'
import { persistStore } from 'redux-persist'
import immutableTransform from 'redux-persist-transform-immutable'

class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired
  }

  constructor() {
    super()
    this.state = { rehydrated: false }
  }

  componentWillMount() {
    persistStore(
      this.props.store,
      {
        storage: localForage,
        transforms: [immutableTransform()]
      },
      () => {
        this.setState({ rehydrated: true })
      }
    )
  }

  render() {
    const { routes, store } = this.props
    if (!this.state.rehydrated) {
      return <div />
    }
    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={routes} />
        </div>
      </Provider>
    )
  }
}

export default AppContainer
