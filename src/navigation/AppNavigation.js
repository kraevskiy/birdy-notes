import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Platform} from 'react-native'

import {MainScreen} from '../screens/MainScreen'
import {PostScreen} from '../screens/PostScreen'
import {AboutScreen} from '../screens/AboutScreen'
import {BookedScreen} from '../screens/BookedScreen'
import {CreateScreen} from '../screens/CreateScreen'
import {THEME} from '../theme'

const Stack = createStackNavigator()

export function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="Main" component={MainScreen}/>
        <Stack.Screen name="Post" component={PostScreen}/>
        <Stack.Screen name="About" component={AboutScreen}/>
        <Stack.Screen name="Booked" component={BookedScreen}/>
        <Stack.Screen name="Create" component={CreateScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const screenOptions = {
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
  },
  headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
}
