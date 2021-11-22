import React, {useEffect, useState} from 'react'
import {StyleSheet, View, Text, Alert} from 'react-native'
import * as Location from 'expo-location'
import {DrawerAppButton} from '../components/DrawerAppButton'
import {Loader} from '../components/Loader'
import axios from 'axios'
import Weather from '../components/Weather'

export const WeatherScreen = ({navigation}) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true)

  const getApiWeatherUrl = async ({latitude, longitude}) => {
    const apiKey = '98d45274442df3438bcb074c41d5d43b'
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    const {data} = await axios.get(url)
    return data
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Weather',
      headerLeft: () => <DrawerAppButton navigation={navigation}/>
    })
  }, [])

  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }
      try {
        const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
        const weather = await getApiWeatherUrl({latitude, longitude})
        setWeather(weather);
        setLoading(false);
      } catch (e) {
        console.log(e)
      }
      // TODO fetch to api weather
      // setLoading(false)
    })();
  }, []);

  return (
    loading ? <Loader/> : <Weather weather={weather}/>
  )
}
