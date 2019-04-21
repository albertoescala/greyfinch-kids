import React from "react"
import { Route } from "react-router-dom"

const RouteContainer = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return (
        <Component {...props} />
      )
    }}
  />
);

export default RouteContainer;
