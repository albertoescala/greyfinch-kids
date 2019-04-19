import { lazy } from 'react'
import WaitingComponent from './WaitingComponent'
import Welcome from '../Main/Welcome.view.logic.js'

const ChooseName = lazy(() => import('../Main/ChooseName.view.logic.js'))


export default [
  {
    path: '/',
    component: Welcome,
    exact: true,
    key: 'welcome',
    requireAuth: false
  },
  {
    path: '/choose-name',
    component: WaitingComponent(ChooseName),
    exact: true,
    key: 'choose-name',
    requireAuth: false
  }
]
