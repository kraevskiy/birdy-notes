import React from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import {Text} from 'react-native'

import {Post} from './Post'

export const PostList = ({data, onOpen}) => {
  return (
    <View style={styles.wrapper}>
      {
        data.length
          ? <FlatList
            data={data}
            keyExtractor={post => post.id.toString()}
            renderItem={({item}) => <Post post={item} onOpen={onOpen}/>}
          />
          : <Text style={styles.text}>Don't have posts</Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  text: {
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'open-bold',
    paddingTop: 15
  }
})
