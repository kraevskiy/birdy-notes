import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {PostList} from '../components/PostList'
import {loadAllPosts} from '../store/actions'
import {HeaderButton} from '../components/HeaderButton'
import {Loader} from '../components/Loader'

export const MainScreen = ({navigation, route}) => {
  const {allPosts, loading} = useSelector(state => state.posts)
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

  if(loading) {
    return <Loader />
  }

  return (
    <PostList data={allPosts} onOpen={openPostHandler}/>
  )
};


