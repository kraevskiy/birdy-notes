import React from 'react'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {AppHeaderIcon} from './AppHeaderIcon'

export const HeaderRightButtons = () => (
  <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
    <Item
      title="Take photo"
      iconName="ios-camera"
      onPress={() => console.log(111)}
    />
  </HeaderButtons>
)
