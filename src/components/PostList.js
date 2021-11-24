import React from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import {Text} from 'react-native'

import {AppCard} from './ui/AppCard'

export const PostList = ({data, onOpen}) => {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={post => post.id.toString()}
        renderItem={({item}) => <AppCard post={item} onOpen={onOpen}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  }
})
