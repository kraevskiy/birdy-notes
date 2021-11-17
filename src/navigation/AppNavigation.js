import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {Platform} from 'react-native'

import {stackOptions, tabBookedOption, tabMainOption, tabOptions} from './navigation.options'
import {MainScreen} from '../screens/MainScreen'
import {PostScreen} from '../screens/PostScreen'
import {BookedScreen} from '../screens/BookedScreen'
import {AboutScreen} from '../screens/AboutScreen'
import {CreateScreen} from '../screens/CreateScreen'

const Stack = createStackNavigator()
const BottomTab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const AboutStackNavigator = () => (
  <Stack.Navigator
    screenOptions={stackOptions}>
    <Stack.Screen name="AboutStack" component={AboutScreen}/>
  </Stack.Navigator>
)

const CreateStackNavigator = () => (
  <Stack.Navigator
    screenOptions={stackOptions}>
    <Stack.Screen name="CreateStack" component={CreateScreen}/>
  </Stack.Navigator>
)

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

const TabsNavigator = () => (
  <BottomTab.Navigator
    {...tabOptions()}
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
)

export function AppNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={tabOptions()}
      >
        <Drawer.Screen
          name="Posts"
          component={TabsNavigator}
        />
        <Drawer.Screen
          name="About"
          component={AboutStackNavigator}
        />
        <Drawer.Screen
          name="Create post"
          component={CreateStackNavigator}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
