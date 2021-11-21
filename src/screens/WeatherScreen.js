import React, {useEffect, useState} from 'react'
import {StyleSheet, View, Text, Alert} from 'react-native'
import * as Location from 'expo-location'
import {DrawerAppButton} from '../components/DrawerAppButton'
import {Loader} from '../components/Loader'
import axios from 'axios'
import {Weather} from '../components/Weather'

const DATA = {
  "base": "stations",
  "clouds": {
    "all": 90,
  },
  "cod": 200,
  "coord": {
    "lat": 50.4962,
    "lon": 30.246,
  },
  "dt": 1637498479,
  "id": 707565,
  "main": {
    "feels_like": 8.85,
    "humidity": 59,
    "pressure": 1005,
    "temp": 10.23,
    "temp_max": 11.03,
    "temp_min": 9.85,
  },
  "name": "Irpin",
  "sys": {
    "country": "UA",
    "id": 2034978,
    "sunrise": 1637472199,
    "sunset": 1637503608,
    "type": 2,
  },
  "timezone": 7200,
  "visibility": 10000,
  "weather": [
    {
      "description": "overcast clouds",
      "icon": "04d",
      "id": 804,
      "main": "Clouds",
    },
  ],
  "wind": {
    "deg": 250,
    "gust": 11,
    "speed": 6,
  },
};

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
        // const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
        // const weather = await getApiWeatherUrl({latitude, longitude})
        setWeather(DATA);
        setLoading(false);
      } catch (e) {
        console.log(e)
      }
      // TODO fetch to api weather
      // setLoading(false)
    })();
  }, []);

  if (loading) {
    return <Loader/>
  }
  return (
    loading ? <Loader/> : <Weather temp={Math.round(weather.main.temp)}/>
  )
}
