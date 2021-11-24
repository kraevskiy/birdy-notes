import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {PostList} from '../components/PostList'
import {loadAllPosts} from '../store/actions'
import {HeaderButton} from '../components/ui/HeaderButton'
import {Loader} from '../components/ui/Loader'
import {DrawerAppButton} from '../components/ui/DrawerAppButton'
import {StyleSheet, Text} from 'react-native'

export const MainScreen = ({navigation, route}) => {
  const {allPosts, loading} = useSelector(state => state.posts)
  const dispatch = useDispatch()

  const openPostHandler = (post) => {
    navigation.navigate('NoteStack', {
      postId: post.id,
      date: post.date,
    })
  }

  const createPostHandler = () => {
    navigation.getParent().getParent().navigate('CreateStack')
  }

  useEffect(()=>{
    dispatch(loadAllPosts())
  }, [])

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'All Birdy Notes',
      headerRight: () => <HeaderButton
        title="Take photo"
        iconName="add-circle-outline"
        onPress={createPostHandler}
      />,
      headerLeft: () => <DrawerAppButton navigation={navigation}/>
    })
  }, [navigation])

  if(loading) {
    return <Loader />
  }

  return (
    allPosts.length
      ? <PostList data={allPosts} onOpen={openPostHandler}/>
      : <Text style={styles.text}>Don’t have notes 😩</Text>
  )
};

const styles = StyleSheet.create({
  text: {
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'poppins-bold',
    paddingTop: 15
  }
})

