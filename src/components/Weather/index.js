import React from 'react';
import {StyleSheet, View, Text} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {LinearGradient} from 'expo-linear-gradient'
import {weatherOptions} from './weatherOptions'

export default function ({weather}) {
  const weatherTemp = Math.floor(weather.main.temp)
  const weatherCondition = weather.weather[0].main
  return (
    <LinearGradient
      colors={weatherOptions[weatherCondition].gradient}
      style={styles.container}>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={weatherOptions[weatherCondition].iconName} size={96} color="white"/>
        <Text style={styles.temp}>
          {weatherTemp}°
        </Text>
      </View>
      <View style={{...styles.halfContainer, ...styles.textContainer}}>
        <Text style={styles.title}>{weatherOptions[weatherCondition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[weatherCondition].subtitle}</Text>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start'
  },
  temp: {
    fontSize: 42,
    fontFamily: 'open-regular',
    color: 'white'
  },
  title: {
    fontFamily: 'open-regular',
    color: 'white',
    fontSize: 44,
    marginBottom: 10
  },
  subtitle: {
    fontFamily: 'open-bold',
    color: 'white',
    fontSize: 20
  }
})
