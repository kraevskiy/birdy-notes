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

function MainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MainStack"
      screenOptions={stackNavigatorOptions}>
      <Stack.Screen name="MainStack" component={MainScreen}/>
    </Stack.Navigator>
  )
}

function BookedStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="BookedStack"
      screenOptions={stackNavigatorOptions}>
      <Stack.Screen name="BookedStack" component={BookedScreen}/>
    </Stack.Navigator>
  )
}

function Tabs() {
  return (
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
}

function AppDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={drawerNavigatorOptions}
    >
      <Drawer.Screen
        name="Posts"
        component={Tabs}
        options={drawerPostScreenOptions}
      />
      <Drawer.Screen
        name="CreateStack"
        component={CreateScreen}
        options={{...stackNavigatorOptions, ...drawerCreateScreenOptions, headerShown: true}}
      />
      <Drawer.Screen
        name="AboutStack"
        component={AboutScreen}
        options={{...stackNavigatorOptions, ...drawerAboutScreenOptions, headerShown: true}}
      />
    </Drawer.Navigator>
  )
}

export function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{...stackNavigatorOptions, headerShown: false}}
      >
        <Stack.Screen
          name="Root"
          component={AppDrawer}
        />
        <Stack.Screen
          options={{headerShown: true}}
          name="PostStack"
          component={PostScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
