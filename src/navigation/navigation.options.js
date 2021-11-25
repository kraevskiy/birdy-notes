import React from 'react'
import {Platform, Text} from 'react-native'
import {THEME} from '../theme'
import {Ionicons, MaterialIcons} from '@expo/vector-icons'

export const drawerNavigatorOptions = {
  headerShown: false,
  drawerActiveTintColor: THEME.MAIN_COLOR,
  drawerLabelStyle: {
    fontFamily: 'poppins-bold'
  }
}

const getStyleToLabelDrawer = (info) => {
  return {
    color: info.color,
    fontSize: 14,
    fontFamily: 'poppins-medium',
    marginLeft: -15
  }
}

export const drawerPostScreenOptions = {
  drawerIcon: (info) => <MaterialIcons name="list" color={info.color} size={20}/>,
  drawerLabel: (info) => <Text style={getStyleToLabelDrawer(info)}>My Birdy Notes</Text>
}

export const drawerCreateScreenOptions = {
  drawerIcon: (info) => <MaterialIcons name="add-circle-outline" color={info.color} size={20}/>,
  drawerLabel: (info) => <Text style={getStyleToLabelDrawer(info)}>Create a new Birdy Note</Text>,
  headerShown: true
}

export const drawerWeatherScreenOptions = {
  drawerIcon: (info) => <Ionicons name="ios-partly-sunny-outline" color={info.color} size={20}/>,
  drawerLabel: (info) => <Text style={getStyleToLabelDrawer(info)}>My Weather Forecast</Text>,
  headerShown: true
}

export const drawerAboutScreenOptions = {
  drawerIcon: (info) => <MaterialIcons name="info-outline" color={info.color} size={20}/>,
  drawerLabel: (info) => <Text style={getStyleToLabelDrawer(info)}>About us</Text>,
  headerShown: true
}

export const tabNavigatorOptions = () => {
  const options = {
    shifting: true,
    activeColor: THEME.MAIN_COLOR
  }
  if (Platform.OS === 'android') {
    options['barStyle'] = {
      backgroundColor: '#fff'
    }
  }
  return options
}

export const tabMainScreenOption = {
  tabBarIcon: (info) => <MaterialIcons name="home-filled" color={info.color} size={25}/>,
  tabBarLabel: 'All',
  headerShown: false,
  tabBarActiveTintColor: THEME.MAIN_COLOR
}

export const tabBookedScreenOption = {
  tabBarIcon: (info) => <MaterialIcons name="star-rate" color={info.color} size={25}/>,
  tabBarLabel: 'Favorite',
  headerShown: false,
  tabBarActiveTintColor: THEME.MAIN_COLOR
}

export const stackNavigatorOptions = {
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#fff'
  },
  headerTintColor: THEME.BLACK_COLOR
}


