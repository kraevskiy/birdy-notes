import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {THEME} from '../../theme'

export const AppText = (props) => (
  <Text style={{...styles.default, ...props.style}}>{props.children}</Text>
)

const styles = StyleSheet.create({
  default: {
    fontFamily: 'poppins-regular',
    color: THEME.BLACK_COLOR
  }
})
