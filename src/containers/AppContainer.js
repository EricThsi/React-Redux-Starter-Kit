import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import { Auth } from 'react-jwt-auth-redux'

class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props
    const authConfig = {
      // --- DEFAULTS ---
      tokenName: 'tfn-token',
      // authHeader: 'Authorization',
      // authToken: 'Bearer',
      // baseUrl: '/',
      // loginUrl: 'auth/login',
      // signupUrl: 'auth/signup',
      // refreshUrl: 'auth/refresh',
      // oauthUrl: 'auth/{provider}', // dynamic
      // profileUrl: 'me'
      // --- REQUIRED ---
      baseUrl: "http://localhost:3025/api/"
    }

    // store.subscribe(function() {
    //   console.log(store.getState())
    // })

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Auth store={store} {...authConfig}>
            <Router history={browserHistory} children={routes} />
          </Auth>
        </div>
      </Provider>
    )
  }
}

export default AppContainer
