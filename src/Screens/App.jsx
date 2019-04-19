import React from 'react'
import routes from "../routes";
import RouteContainer from "../routes/RouteContainer";
import { Route, Switch } from "react-router-dom";

let App = props => {
  return (
    <Switch>
      {routes.map(
        ({ path, component, exact, requireAuth }) =>
        <RouteContainer
          key={path}
          path={path}
          component={component}
          exact={exact}
        />
      )}
      <Route render={() => <h1>Not Found</h1>} />
    </Switch>
  )
}
export default App