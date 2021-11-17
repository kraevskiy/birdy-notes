import React, {useEffect} from 'react'

import {DATA} from '../data'
import {PostList} from '../components/PostList'
import {HeaderLeftButtons} from '../components/HeaderLeftButton'
import {HeaderRightButtons} from '../components/HeaderRightButton'

export const MainScreen = ({navigation}) => {
  const openPostHandler = (post) => {
    navigation.navigate('PostStack', {
      postId: post.id,
      date: post.date,
    })
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'List',
      headerRight: () => <HeaderRightButtons/>,
      headerLeft: () => <HeaderLeftButtons/>
    })
  }, [])

  return (
    <PostList data={DATA} onOpen={openPostHandler}/>
  )
};
