import React from 'react';
import {StyleSheet, View, Text} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {weatherOptions} from './weatherOptions'
import AnimatedLinearGradient from "./../AnimatedLinearGradient"

export default function ({weather}) {
  const weatherTemp = Math.floor(weather.main.temp)
  const weatherCondition = weather.weather[0].main
  return (
    <View
      style={styles.container}>
      <AnimatedLinearGradient customColors={weatherOptions[weatherCondition].gradient} speed={3000}/>
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
    </View>
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
    fontFamily: 'poppins-regular',
    color: 'white'
  },
  title: {
    fontFamily: 'poppins-regular',
    color: 'white',
    fontSize: 44,
    marginBottom: 10
  },
  subtitle: {
    fontFamily: 'poppins-bold',
    color: 'white',
    fontSize: 20
  }
})
