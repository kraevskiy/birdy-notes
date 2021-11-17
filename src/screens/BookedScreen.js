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

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Favorite',
      headerLeft: () => <HeaderLeftButtons/>
    })
  }, [])

  return (
    <PostList data={DATA.filter(post => post.booked)} onOpen={openPostHandler}/>
  )
};

