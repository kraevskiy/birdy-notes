import React, {useEffect, useState} from 'react'
import {Alert} from 'react-native'
import * as Location from 'expo-location'
import {DrawerAppButton} from '../components/ui/DrawerAppButton'
import {Loader} from '../components/ui/Loader'
import axios from 'axios'
import Weather from '../components/Weather'

const weatherData = {
  "base": "stations",
  "clouds": {
    "all": 75,
  },
  "cod": 200,
  "coord": {
    "lat": 50.4385,
    "lon": 30.5398,
  },
  "dt": 1637747749,
  "id": 703447,
  "main": {
    "feels_like": 3.03,
    "humidity": 81,
    "pressure": 1018,
    "temp": 3.03,
    "temp_max": 3.86,
    "temp_min": 1.45,
  },
  "name": "Kyiv",
  "sys": {
    "country": "UA",
    "id": 2003742,
    "sunrise": 1637731595,
    "sunset": 1637762572,
    "type": 2,
  },
  "timezone": 7200,
  "visibility": 10000,
  "weather": [
    {
      "description": "broken clouds",
      "icon": "04d",
      "id": 803,
      "main": "Clouds",
    }
  ],
  "wind": {
    "deg": 95,
    "gust": 1.34,
    "speed": 0.45,
  },
}

export const WeatherScreen = ({navigation}) => {
  const [weather, setWeather] = useState(weatherData);
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
        // const weather = await getApiWeatherUrl({latitude, longitude})
        // setWeather(weather);
        setLoading(false);
      } catch (e) {
        console.log(e)
      }
    })();
  }, []);

  return (
    loading ? <Loader/> : <Weather weather={weather}/>
  )
}
