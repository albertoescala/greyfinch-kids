import React from "react"
import { Route } from "react-router-dom"
// import { WidgetProvider } from '../config/contexts/WidgetContext'
// import { LoadingProvider } from '../config/contexts/LoadingContext'
// import DataProvider from '../config/contexts/DataContext'

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

/**
 * <LoadingProvider>
          <DataProvider>
            <WidgetProvider>
              <Component {...props} />
            </WidgetProvider>
          </DataProvider>
        </LoadingProvider>
 */