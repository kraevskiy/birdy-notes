import React from 'react'
import {Platform, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native'
import {THEME} from '../../theme'
import {AppTextMedium} from './AppTextMedium'

export const AppButtonText = ({children, onPress, color = THEME.MAIN_COLOR, style = {}, styleText = {}}) => {
  const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

  return (
    <Wrapper
      activeOpacity={0.7}
      onPress={onPress}>
      <View style={{...styles.button, ...style}}>
        <AppTextMedium style={{...styles.text, ...styleText}}>
          {children}
        </AppTextMedium>
      </View>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 0,
    paddingHorizontal: 20,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#145c8f',
    fontSize: 14
  }
})
