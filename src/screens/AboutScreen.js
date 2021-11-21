import React, {useEffect} from 'react'
import {StyleSheet, View, Text} from 'react-native'

import {HeaderButton} from '../components/HeaderButton'
import {DrawerAppButton} from '../components/DrawerAppButton'

export const AboutScreen = ({navigation}) => {

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'About',
      headerLeft: () => <DrawerAppButton navigation={navigation}/>
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
