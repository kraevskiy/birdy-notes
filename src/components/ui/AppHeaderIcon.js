import React from 'react'
import {HeaderButton} from 'react-navigation-header-buttons'
import {Platform} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import {THEME} from '../../theme'

export const AppHeaderIcon = (props) => (
  <HeaderButton
    {...props}
    iconSize={30}
    color={THEME.MAIN_COLOR}
    IconComponent={MaterialIcons}
  />
)
