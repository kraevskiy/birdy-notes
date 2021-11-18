import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { DrawerActions } from '@react-navigation/native';

import {PostList} from '../components/PostList'
import {loadAllPosts} from '../store/actions'
import {HeaderButton} from '../components/HeaderButton'

export const MainScreen = ({navigation, route}) => {
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

  const createPostHandler = () => {
    navigation.getParent().getParent().navigate('CreateStack')
  }

  useEffect(()=>{
    dispatch(loadAllPosts())
  }, [])

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'All posts',
      headerRight: () => <HeaderButton
        title="Take photo"
        iconName="ios-camera"
        onPress={createPostHandler}
      />,
      headerLeft: () => <HeaderButton
        title="Drawer"
        iconName="ios-menu"
        onPress={toggleDrawerHandler}/>
    })
  }, [navigation])

  return (
    <PostList data={allPosts} onOpen={openPostHandler}/>
  )
};
