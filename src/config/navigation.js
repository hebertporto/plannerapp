import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { registerScreens } from './screens'

import configureStore from './store/configureStore'

const store = configureStore()

registerScreens(store, Provider)

const initialScreen = {
  screen: {
    screen: 'home',
    title: 'My Planner'
  }
}

export function startApp() {
  Navigation.startSingleScreenApp(initialScreen)
}
