import React from 'react'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {AppHeaderIcon} from './AppHeaderIcon'

export const HeaderLeftButtons = () => (
  <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
    <Item
      title="Take photo"
      iconName="ios-menu"
      onPress={() => console.log(111)}
    />
  </HeaderButtons>
)
