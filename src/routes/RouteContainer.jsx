import App from '../Main/App.view.js'
import React from "react"
import { Route } from "react-router-dom"

const RouteContainer = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return (
        <App {...props} {...rest.state} />
      )
    }}
  />
);

export default RouteContainer;
