import React, {useEffect} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {HeaderLeftButtons} from '../components/HeaderLeftButton'

export const CreateScreen = ({navigation}) => {

  const toggleDrawerHandler = () =>{
    navigation.toggleDrawer()
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Create post',
      headerLeft: () => <HeaderLeftButtons openDrawer={toggleDrawerHandler}/>
    })
  }, [])

  return (
    <View style={styles.center}>
      <Text>
        CreateScreen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
