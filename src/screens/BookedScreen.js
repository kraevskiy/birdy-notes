import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {PostList} from '../components/PostList'
import {HeaderLeftButtons} from '../components/HeaderLeftButton'
import {loadBookedPosts} from '../store/actions'

export const BookedScreen = ({navigation}) => {
  const {bookedPosts} = useSelector(state=> state.posts)
  const dispatch = useDispatch()

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
    dispatch(loadBookedPosts())
    navigation.setOptions({
      headerTitle: 'Favorite posts',
      headerLeft: () => <HeaderLeftButtons openDrawer={toggleDrawerHandler}/>
    })
  }, [dispatch, navigation])

  return (
    <PostList data={bookedPosts} onOpen={openPostHandler}/>
  )
};

