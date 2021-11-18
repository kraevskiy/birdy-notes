import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {PostList} from '../components/PostList'
import {loadAllPosts} from '../store/actions'
import {HeaderButton} from '../components/HeaderButton'

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
      headerRight: () => <HeaderButton
        title="Take photo"
        iconName="ios-camera"
      />,
      headerLeft: () => <HeaderButton
        title="Drawer"
        iconName="ios-menu"
        onPress={toggleDrawerHandler}/>
    })
  }, [dispatch, navigation])

  return (
    <PostList data={allPosts} onOpen={openPostHandler}/>
  )
};
