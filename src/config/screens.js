import { Navigation } from 'react-native-navigation'

import HomeScreen from './../modules/home/containers/HomeScreen'

export function registerScreens(store, Provider) {
  Navigation.registerComponent('home', () => HomeScreen, store, Provider)
}
