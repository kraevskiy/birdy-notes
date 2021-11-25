import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {THEME} from '../../theme'

export const AppTextMedium = (props) => (
  <Text style={{...styles.default, ...props.style}}>{props.children}</Text>
)

const styles = StyleSheet.create({
  default: {
    fontFamily: 'poppins-medium',
    color: THEME.BLACK_COLOR
  }
})
