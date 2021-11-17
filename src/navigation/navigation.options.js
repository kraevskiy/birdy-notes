import React from 'react'
import {Platform} from 'react-native'
import {THEME} from '../theme'
import {Ionicons} from '@expo/vector-icons'

export const drawerNavigatorOptions = {
  headerShown: false,
  drawerActiveTintColor: THEME.MAIN_COLOR,
  drawerLabelStyle: {
    fontFamily: 'open-bold'
  }
}

export const drawerPostScreenOptions = {
  drawerIcon: (info) => <Ionicons name="ios-list" color={info.color} size={20}/>
}

export const drawerCreateScreenOptions = {
  drawerIcon: (info) => <Ionicons name="ios-add" color={info.color} size={20}/>
}

export const drawerAboutScreenOptions = {
  drawerIcon: (info) => <Ionicons name="ios-information" color={info.color} size={20}/>
}

export const tabNavigatorOptions = () => {
  const options = {
    shifting: true
  }
  if (Platform.OS === 'android') {
    options['barStyle'] = {
      backgroundColor: THEME.MAIN_COLOR
    }
  }
  return options
}

export const tabMainScreenOption = {
  tabBarIcon: (info) => <Ionicons name="ios-albums" color={info.color} size={25}/>,
  tabBarLabel: 'All',
  headerShown: false,
  tabBarActiveTintColor: THEME.MAIN_COLOR

}

export const tabBookedScreenOption = {
  tabBarIcon: (info) => <Ionicons name="ios-star" color={info.color} size={25}/>,
  tabBarLabel: 'Favorite',
  headerShown: false,
  tabBarActiveTintColor: THEME.MAIN_COLOR

}

export const stackNavigatorOptions = {
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
  },
  headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
}


