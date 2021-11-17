import React from 'react'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {AppHeaderIcon} from './AppHeaderIcon'

export const HeaderLeftButtons = ({openDrawer}) => (
  <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
    <Item
      title="Take photo"
      iconName="ios-menu"
      onPress={openDrawer}
    />
  </HeaderButtons>
)
