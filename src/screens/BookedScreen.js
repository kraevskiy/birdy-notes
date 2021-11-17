import React, {useEffect} from 'react'

import {DATA} from '../data'
import {PostList} from '../components/PostList'
import {HeaderLeftButtons} from '../components/HeaderLeftButton'

export const BookedScreen = ({navigation}) => {
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
      headerTitle: 'Favorite',
      headerLeft: () => <HeaderLeftButtons openDrawer={toggleDrawerHandler}/>
    })
  }, [])

  return (
    <PostList data={DATA.filter(post => post.booked)} onOpen={openPostHandler}/>
  )
};

