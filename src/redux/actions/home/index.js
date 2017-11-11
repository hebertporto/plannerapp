import {
  HOME_INIT
} from './types'


export function testRedux() {
  return (dispatch) => {
    const action = {
      type: HOME_INIT,
      payload: 'Redux Ativo'
    }
    dispatch(action)
  }
}
