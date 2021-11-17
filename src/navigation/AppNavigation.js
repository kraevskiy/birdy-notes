import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {MainScreen} from '../screens/MainScreen'
import {PostScreen} from '../screens/PostScreen'
import {AboutScreen} from '../screens/AboutScreen'
import {BookedScreen} from '../screens/BookedScreen'
import {CreateScreen} from '../screens/CreateScreen'
import {stackOptions, tabBookedOption, tabMainOption} from './navigation.options'
import {THEME} from '../theme'

const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator();

const MainStackNavigator = () => (
  <Stack.Navigator
    screenOptions={stackOptions}>
    <Stack.Screen name="MainStack" component={MainScreen}/>
    <Stack.Screen name="PostStack" component={PostScreen}/>
  </Stack.Navigator>
)

const BookedStackNavigator = () => (
  <Stack.Navigator
    screenOptions={stackOptions}>
    <Stack.Screen name="BookedStack" component={BookedScreen}/>
    <Stack.Screen name="PostStack" component={PostScreen}/>
  </Stack.Navigator>
)

export function AppNavigation() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <BottomTab.Screen
          name="MainTab"
          component={MainStackNavigator}
          options={tabMainOption}
        />
        <BottomTab.Screen
          name="BookedTab"
          component={BookedStackNavigator}
          options={tabBookedOption}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

// export function AppNavigation() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Main"
//         screenOptions={screenOptions}
//       >
//         <Stack.Screen name="Main" component={MainScreen}/>
//         {/*<Stack.Screen name="Booked" component={Tabs}/>*/}
//
//         <Stack.Screen name="Post" component={PostScreen}/>
//         <Stack.Screen name="Booked" component={BookedScreen}/>
//
//         <Stack.Screen name="About" component={AboutScreen}/>
//         <Stack.Screen name="Create" component={CreateScreen}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }


