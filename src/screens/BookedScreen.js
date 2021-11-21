import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'

import {PostList} from '../components/PostList'
import {DrawerAppButton} from '../components/DrawerAppButton'

export const BookedScreen = ({navigation}) => {
  const {bookedPosts} = useSelector(state=> state.posts)

  const openPostHandler = (post) => {
    navigation.navigate('PostStack', {
      postId: post.id,
      date: post.date,
    })
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Favorite posts',
      headerLeft: () => <DrawerAppButton navigation={navigation}/>
    })
  }, [navigation, bookedPosts])

  return (
    <PostList data={bookedPosts} onOpen={openPostHandler}/>
  )
};

