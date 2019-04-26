import { lazy } from 'react'
import WaitingComponent from './WaitingComponent'
import Welcome from '../Main/Welcome.view.logic.js'

const ChooseName = lazy(() => import('../Main/ChooseName.view.logic.js'))
const ChooseAnimal = lazy(() => import('../Main/ChooseAnimal.view.logic.js'))
const AnimalList = lazy(() => import('../Main/AnimalList.view.logic.js'))
const UserList = lazy(() => import('../Main/UserList.view.logic.js'))

export default [
  {
    path: '/',
    component: Welcome,
    exact: true,
    state: {
      isWelcome: true,
    },
    requireAuth: false,
  },
  {
    path: '/choose-name',
    component: WaitingComponent(ChooseName),
    exact: true,
    state: {
      isChooseName: true,
    },
    requireAuth: false,
  },
  {
    path: '/choose-animal',
    component: WaitingComponent(ChooseAnimal),
    exact: true,
    state: {
      isChooseAnimal: true,
    },
    requireAuth: false,
  },
  {
    path: '/animal-list/:name',
    component: WaitingComponent(AnimalList),
    exact: true,
    state: {
      isAnimalList: true,
    },
    requireAuth: false,
  },
  {
    path: '/users',
    component: WaitingComponent(UserList),
    exact: true,
    state: {
      isUsersList: true,
    },
    requireAuth: false,
  },
]
