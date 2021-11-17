import React, {useEffect} from 'react'
import {StyleSheet, View, Text} from 'react-native'

export const PostScreen = ({navigation, route}) => {
  const params = route.params

  useEffect(() => {
    navigation.setOptions({title: `Post: ${params.postId} on ${new Date(params.date).toLocaleDateString()}`})
  }, [])

  return (
    <View style={styles.center}>
      <Text>
        PostScreen
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
