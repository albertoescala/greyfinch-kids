import App from './App.view.js'
import React from 'react'
import Button from '../Button/Button.view.js'

let AppLogic = props => {
  return <App {...props}>
  <Button text="Start" onClick={() => console.log('clicked')} />
  </App>
}
export default AppLogic