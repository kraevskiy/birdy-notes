import React, {useEffect} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {HeaderRightButtons} from '../components/HeaderRightButton'
import {HeaderLeftButtons} from '../components/HeaderLeftButton'

export const AboutScreen = ({navigation}) => {

  const toggleDrawerHandler = () =>{
    navigation.toggleDrawer()
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'About',
      headerLeft: () => <HeaderLeftButtons openDrawer={toggleDrawerHandler}/>
    })
  }, [])

  return (
    <View style={styles.center}>
      <Text>
        This is about page
      </Text>
      <Text>
        Version <Text style={styles.version}>1.0.0</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  version: {
    fontFamily: 'open-bold'
  }
})
