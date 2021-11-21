import React from 'react'
import {HeaderButton} from './HeaderButton'

export const DrawerAppButton = ({navigation}) => {
  const toggleDrawerHandler = () => {
    navigation.toggleDrawer()
  }

  return <HeaderButton
    title="Drawer"
    iconName="ios-menu"
    onPress={toggleDrawerHandler}/>
}
