import React, {useEffect, useState} from 'react'
import {Alert} from 'react-native'
import * as Location from 'expo-location'
import {DrawerAppButton} from '../components/ui/DrawerAppButton'
import {Loader} from '../components/ui/Loader'
import axios from 'axios'
import Weather from '../components/Weather'
import {weatherScreenText} from '../texts/weather-screen.text'

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
      headerTitle: weatherScreenText.screenTitle,
      headerLeft: () => <DrawerAppButton navigation={navigation}/>
    })
  }, [])

  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(weatherScreenText.errorLocation);
        return;
      }
      try {
        const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
        const weather = await getApiWeatherUrl({latitude, longitude})
        if(weather){
          setWeather(weather);
          setLoading(false);
        } else {
          Alert.alert(weatherScreenText.errorWeather)
        }
      } catch (e) {
        console.log(e)
      }
    })();
  }, []);

  return (
    loading ? <Loader/> : <Weather weather={weather}/>
  )
}
