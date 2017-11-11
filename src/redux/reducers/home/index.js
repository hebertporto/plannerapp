import * as types from './../../actions/home/types'
import {
  initHome
} from './reducers'

export const initialState = {
  init: 'Init Redux'
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.HOME_INIT:
      return initHome(state, action)
    default:
      return state
  }
}
