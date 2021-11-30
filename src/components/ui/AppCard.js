import React from 'react'
import {StyleSheet, View, TouchableOpacity, Text, ImageBackground} from 'react-native'
import {THEME} from '../../theme'
import {randomInteger} from '../../helpers/randomInteger'
import {AppTextBold} from './AppTextBold'
import {AppText} from './AppText'
import {AppTextMedium} from './AppTextMedium'
import {sliceText} from '../../helpers/slice'

const bg = [
  THEME.ORANGE_COLOR_OPACITY,
  THEME.GREEN_COLOR_OPACITY,
  THEME.GREEN1_COLOR_OPACITY,
  THEME.GREEN2_COLOR_OPACITY,
]

export const AppCard = ({note, onOpen}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onOpen(note)}
      style={styles.default}
    >
      <ImageBackground
        style={styles.image}
        source={{uri: note.img}}
      />
      <View style={{...styles.bg, backgroundColor: bg[randomInteger(0, bg.length - 1)]}}/>
      <View style={styles.textWrap}>
        <AppTextBold>
          {sliceText(note.title, 40)}
        </AppTextBold>
        <AppTextMedium style={styles.text}>
          {sliceText(note.text)}
        </AppTextMedium>
        <AppText style={styles.date}>
          {new Date(note.date).toLocaleDateString()}
        </AppText>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  default: {
    flexDirection: 'row',
    paddingVertical: 30,
    paddingHorizontal: 18,
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
    height: 150,
    overflow: 'hidden',
    marginBottom: 16
  },
  image: {
    opacity: 0.6,
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
    alignItems: 'flex-start',
    width: '100%'
  },
  text: {
    width: '70%',
    color: THEME.GRAY_DARK_COLOR
  },
  date: {
    width: '100%',
    textAlign: 'right',
    color: THEME.GRAY_DARK_COLOR
  }
})
