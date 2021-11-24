import React from 'react'
import {StyleSheet, View, TouchableOpacity, Text, ImageBackground} from 'react-native'
import {THEME} from '../../theme'
import {randomInteger} from '../../helpers/randomInteger'

const bg = [
  THEME.MAIN_COLOR_OPACITY,
  THEME.DANGER_COLOR_OPACITY,
  THEME.SECOND_COLOR_OPACITY,
  THEME.GRAY_COLOR_OPACITY,
  THEME.PINK_COLOR_OPACITY,
  THEME.ORANGE_COLOR_OPACITY,
  THEME.GREEN_COLOR_OPACITY,
]

export const AppCard = ({post, onOpen}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onOpen(post)}
      style={styles.default}
    >
      <ImageBackground
        style={styles.image}
        source={{uri: post.img}}
      />
      <View style={{...styles.bg, backgroundColor: bg[randomInteger(0, bg.length - 1)]}}/>
      <View style={styles.textWrap}>
        <Text style={styles.title}>
          {new Date(post.date).toLocaleDateString()}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  default: {
    flexDirection: 'row',
    paddingVertical: 30,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 2
    },
    borderRadius: 10,
    height: 200,
    overflow: 'hidden',
    marginBottom: 16
  },
  image: {
    opacity: 0.7,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  bg: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  textWrap: {
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%'
  },
  title: {
    color: '#fff',
    fontFamily: 'poppins-regular'
  }
})
