import React from 'react'
import { Switch, Route } from 'react-router-dom'

// reset css before loading our css!
import '../../../../assets/css/reset.css'
import '../../../../components/app-shell.css'

import { MobileHeader } from '../../../../components/mobile-header'
import { ConnectionStatus } from '../../../../components/connection-status'

import { LoginPage, RegisterPage, ResetPasswordPage } from '../../../pages'

import connectionStatus from '../../../../assets/js/connectionStatus'

export const PreAuthAppShell = (props) => {
  console.info('props ', props)
  const appTitle = props.location.pathname
  return (
    <div className='app'>
      <MobileHeader appTitle={appTitle} />
      <ConnectionStatus />
      <main>
        <Switch>
        <Route path='/auth/' component={LoginPage} />
          <Route path='/auth/login' render={() => <LoginPage />} />
          <Route path='/auth/register' component={RegisterPage} />
          <Route path='/auth/reset-password' component={ResetPasswordPage} />
          {/*<Route component={'NotFound'} />*/}
        </Switch>
      </main>
    </div>
  )
}

connectionStatus();
