import App from './App.view.js'
import React from 'react'
import routes from '../routes'
import RouteContainer from '../routes/RouteContainer'
import { Route, Switch } from 'react-router-dom'

let AppLogic = props => {
  return (
    <Switch>
      {routes.map(({ path, component, exact, requireAuth, state }) => (
        <RouteContainer
          key={path}
          path={path}
          component={component}
          state={state}
          exact={exact}
        />
      ))}
      <Route render={() => <h1>Not Found</h1>} />
    </Switch>
  )
}
export default AppLogic
