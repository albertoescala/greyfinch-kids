import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button.view.js'
import WelcomeView from './Welcome.view.js'

const Welcome = () => {
  return (
    <WelcomeView>
      <Link to="/choose-name">
        <Button text="Start" />
      </Link>
    </WelcomeView>
  )
}

export default Welcome
