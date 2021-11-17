import React from 'react'
import {Platform} from 'react-native'
import {THEME} from '../theme'
import {Ionicons} from '@expo/vector-icons'

export const stackOptions = {
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
  },
  headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
}

export const tabMainOption = {
  tabBarIcon: (info) => <Ionicons name="ios-albums" color={info.color} size={25}/>,
  tabBarActiveTintColor: THEME.MAIN_COLOR
}

export const tabBookedOption = {
  tabBarIcon: (info) => <Ionicons name="ios-star" color={info.color} size={25}/>,
  tabBarActiveTintColor: THEME.MAIN_COLOR
}
