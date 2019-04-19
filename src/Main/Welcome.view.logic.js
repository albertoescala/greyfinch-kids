import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button/Button.view.js'
import WelcomeView from './Welcome.view.js'

const Welcome = () => {
  return (
    <WelcomeView>
      <Link to="/choose-name">
        <Button>
          Start
        </Button>
      </Link>
    </WelcomeView>
  )
}

export default Welcome
