import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'

import {PostList} from '../components/PostList'
import {DrawerAppButton} from '../components/ui/DrawerAppButton'
import {StyleSheet, Text} from 'react-native'

export const BookedScreen = ({navigation}) => {
  const {bookedPosts} = useSelector(state => state.posts)

  const openPostHandler = (post) => {
    navigation.navigate('NoteStack', {
      postId: post.id,
      date: post.date,
    })
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Favorite Birdy Notes',
      headerLeft: () => <DrawerAppButton navigation={navigation}/>
    })
  }, [navigation, bookedPosts])

  return (
    bookedPosts.length
      ? <PostList data={bookedPosts} onOpen={openPostHandler}/>
      : <Text style={styles.text}>Don’t have favorite notes 😩</Text>
  )
};

const styles = StyleSheet.create({
  text: {
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'poppins-bold',
    paddingTop: 15
  }
})

