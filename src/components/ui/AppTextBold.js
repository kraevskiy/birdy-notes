import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {THEME} from '../../theme'

export const AppTextBold = (props) => (
  <Text style={{...styles.default, ...props.style}}>{props.children}</Text>
)

const styles = StyleSheet.create({
  default: {
    fontFamily: 'poppins-bold',
    color: THEME.BLACK_COLOR
  }
})
