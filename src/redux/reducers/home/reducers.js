export function initHome(state, action) {
  return { ...state, init: action.payload }
}
