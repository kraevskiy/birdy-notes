import React from 'react'
import {Platform, Text} from 'react-native'
import {THEME} from '../theme'
import {Ionicons} from '@expo/vector-icons'

export const drawerNavigatorOptions = {
  headerShown: false,
  drawerActiveTintColor: THEME.MAIN_COLOR,
  drawerLabelStyle: {
    fontFamily: 'open-bold'
  }
}

const getStyleToLabelDrawer = (info) => {
  return {
    color: info.color,
    fontSize: 15,
    fontFamily: 'open-regular'
  }
}

export const drawerPostScreenOptions = {
  drawerIcon: (info) => <Ionicons name="ios-list" color={info.color} size={20}/>,
  drawerLabel: (info) => <Text style={getStyleToLabelDrawer(info)}>Posts</Text>
}

export const drawerCreateScreenOptions = {
  drawerIcon: (info) => <Ionicons name="ios-add" color={info.color} size={20}/>,
  drawerLabel: (info) => <Text style={getStyleToLabelDrawer(info)}>Create post</Text>
}

export const drawerAboutScreenOptions = {
  drawerIcon: (info) => <Ionicons name="ios-information" color={info.color} size={20}/>,
  drawerLabel: (info) => <Text style={getStyleToLabelDrawer(info)}>About App</Text>
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


