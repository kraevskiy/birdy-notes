import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {PostList} from '../components/PostList'
import {HeaderLeftButtons} from '../components/HeaderLeftButton'
import {HeaderRightButtons} from '../components/HeaderRightButton'
import {loadAllPosts} from '../store/actions'

export const MainScreen = ({navigation}) => {
  const {allPosts} = useSelector(state => state.posts)
  const dispatch = useDispatch()

  const openPostHandler = (post) => {
    navigation.navigate('PostStack', {
      postId: post.id,
      date: post.date,
    })
  }

  const toggleDrawerHandler = () => {
    navigation.toggleDrawer()
  }

  useEffect(() => {
    dispatch(loadAllPosts())
    navigation.setOptions({
      headerTitle: 'All posts',
      headerRight: () => <HeaderRightButtons/>,
      headerLeft: () => <HeaderLeftButtons openDrawer={toggleDrawerHandler}/>
    })
  }, [dispatch, navigation])

  return (
    <PostList data={allPosts} onOpen={openPostHandler}/>
  )
};
