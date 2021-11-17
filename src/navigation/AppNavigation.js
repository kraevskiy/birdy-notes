import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {Platform} from 'react-native'

import {
  drawerAboutScreenOptions, drawerCreateScreenOptions,
  drawerNavigatorOptions, drawerPostScreenOptions,
  stackNavigatorOptions,
  tabBookedScreenOption,
  tabMainScreenOption,
  tabNavigatorOptions
} from './navigation.options'
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
    screenOptions={stackNavigatorOptions}>
    <Stack.Screen name="AboutStack" component={AboutScreen}/>
  </Stack.Navigator>
)

const CreateStackNavigator = () => (
  <Stack.Navigator
    screenOptions={stackNavigatorOptions}>
    <Stack.Screen name="CreateStack" component={CreateScreen}/>
  </Stack.Navigator>
)

const MainStackNavigator = () => (
  <Stack.Navigator
    screenOptions={stackNavigatorOptions}>
    <Stack.Screen name="MainStack" component={MainScreen}/>
    <Stack.Screen name="PostStack" component={PostScreen}/>
  </Stack.Navigator>
)

const BookedStackNavigator = () => (
  <Stack.Navigator
    screenOptions={stackNavigatorOptions}>
    <Stack.Screen name="BookedStack" component={BookedScreen}/>
    <Stack.Screen name="PostStack" component={PostScreen}/>
  </Stack.Navigator>
)

const TabsNavigator = () => (
  <BottomTab.Navigator
    {...tabNavigatorOptions()}
  >
    <BottomTab.Screen
      name="All posts"
      component={MainStackNavigator}
      options={tabMainScreenOption}
    />
    <BottomTab.Screen
      name="Favorite posts"
      component={BookedStackNavigator}
      options={tabBookedScreenOption}
    />
  </BottomTab.Navigator>
)

export function AppNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={drawerNavigatorOptions}
      >
        <Drawer.Screen
          name="Posts list"
          component={TabsNavigator}
          options={drawerPostScreenOptions}
        />
        <Drawer.Screen
          name="Create post"
          component={CreateStackNavigator}
          options={drawerCreateScreenOptions}
        />
        <Drawer.Screen
          name="About APP"
          component={AboutStackNavigator}
          options={drawerAboutScreenOptions}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
