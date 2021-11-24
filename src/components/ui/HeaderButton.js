import React from 'react'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {AppHeaderIcon} from './AppHeaderIcon'

export const HeaderButton = (props) => (
  <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
    <Item
      {...props}
    />
  </HeaderButtons>
)
