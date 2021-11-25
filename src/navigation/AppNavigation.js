import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {Platform} from 'react-native'

import {
  drawerAboutScreenOptions, drawerCreateScreenOptions,
  drawerNavigatorOptions, drawerPostScreenOptions, drawerWeatherScreenOptions,
  stackNavigatorOptions,
  tabBookedScreenOption,
  tabMainScreenOption,
  tabNavigatorOptions
} from './navigation.options'
import {MainScreen} from '../screens/MainScreen'
import {NoteScreen} from '../screens/NoteScreen'
import {BookedScreen} from '../screens/BookedScreen'
import {AboutScreen} from '../screens/AboutScreen'
import {CreateScreen} from '../screens/CreateScreen'
import {WeatherScreen} from '../screens/WeatherScreen'
import {PrivacyScreen} from '../screens/PrivacyScreen'
import {namesNavigationConstant} from './names-navigation.constans'

const Stack = createStackNavigator()
const BottomTab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={namesNavigationConstant.stack.main}
      screenOptions={stackNavigatorOptions}>
      <Stack.Screen name={namesNavigationConstant.stack.main} component={MainScreen}/>
    </Stack.Navigator>
  )
}

function BookedStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={namesNavigationConstant.stack.booked}
      screenOptions={stackNavigatorOptions}>
      <Stack.Screen name={namesNavigationConstant.stack.booked} component={BookedScreen}/>
    </Stack.Navigator>
  )
}

function Tabs() {
  return (
    <BottomTab.Navigator
      {...tabNavigatorOptions()}
    >
      <BottomTab.Screen
        name={namesNavigationConstant.bottomTab.all}
        component={MainStackNavigator}
        options={tabMainScreenOption}
      />
      <BottomTab.Screen
        name={namesNavigationConstant.bottomTab.booked}
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
        name={namesNavigationConstant.drawer.notes}
        component={Tabs}
        options={drawerPostScreenOptions}
      />
      <Drawer.Screen
        name={namesNavigationConstant.stack.createNote}
        component={CreateScreen}
        options={{...stackNavigatorOptions, ...drawerCreateScreenOptions}}
      />
      <Drawer.Screen
        name={namesNavigationConstant.stack.aboutUs}
        component={AboutScreen}
        options={{...stackNavigatorOptions, ...drawerAboutScreenOptions}}
      />
      <Drawer.Screen
        name={namesNavigationConstant.stack.weather}
        component={WeatherScreen}
        options={{...stackNavigatorOptions, ...drawerWeatherScreenOptions}}
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
          name={namesNavigationConstant.stack.root}
          component={AppDrawer}
        />
        <Stack.Screen
          options={{headerShown: true}}
          name={namesNavigationConstant.stack.note}
          component={NoteScreen}/>
        <Stack.Screen
          options={{headerShown: true}}
          name={namesNavigationConstant.stack.privacy}
          component={PrivacyScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
