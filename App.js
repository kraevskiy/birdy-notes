import React, {useState} from 'react'
import AppLoading from 'expo-app-loading'
import {Provider} from 'react-redux'
import {Platform, StatusBar} from 'react-native'

import {bootstrap} from './src/bootstrap'
import {AppNavigation} from './src/navigation/AppNavigation'
import store from './src/store'
import {THEME} from './src/theme'


export default function App() {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return <AppLoading
      startAsync={bootstrap}
      onFinish={() => setIsReady(true)}
      onError={err => console.log(err)}
    />
  }

  return <Provider store={store}>
    <StatusBar
      barStyle={Platform.OS === "ios" ? "dark-content" : "light"}
    />
    <AppNavigation/>
  </Provider>;
}
