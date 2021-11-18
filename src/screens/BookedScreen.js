import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'

import {PostList} from '../components/PostList'
import {HeaderButton} from '../components/HeaderButton'

export const BookedScreen = ({navigation}) => {
  const {bookedPosts} = useSelector(state=> state.posts)

  const openPostHandler = (post) => {
    navigation.navigate('PostStack', {
      postId: post.id,
      date: post.date,
    })
  }

  const toggleDrawerHandler = () =>{
    navigation.toggleDrawer()
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Favorite posts',
      headerLeft: () => <HeaderButton
        title="Drawer"
        iconName="ios-menu"
        onPress={toggleDrawerHandler}/>
    })
  }, [navigation, bookedPosts])

  return (
    <PostList data={bookedPosts} onOpen={openPostHandler}/>
  )
};

