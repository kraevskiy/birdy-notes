import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const Weather = ({temp}) => {
  return (
    <View style={styles.container}>
      <Text>
        {temp}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
