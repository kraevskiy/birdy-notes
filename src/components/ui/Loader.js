import React from 'react'
import {ActivityIndicator, StyleSheet, View} from 'react-native'
import {THEME} from '../../theme'

export const Loader = () => {
	return (
    <View style={styles.center}>
      <ActivityIndicator color={THEME.MAIN_COLOR} size={40}/>
    </View>
	)
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
