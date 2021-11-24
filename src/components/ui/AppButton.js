import React from 'react'
import {Platform, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native'
import {THEME} from '../../theme'
import {AppTextMedium} from './AppTextMedium'

export const AppButton = ({children, onPress, color = THEME.MAIN_COLOR, style = {}}) => {
  const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

  return (
    <Wrapper
      activeOpacity={0.7}
      onPress={onPress}>
      <View style={{...styles.button, ...style, backgroundColor: color}}>
        <AppTextMedium style={styles.text}>
          {children}
        </AppTextMedium>
      </View>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 14
  }
})
