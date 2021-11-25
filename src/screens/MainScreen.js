import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {StyleSheet} from 'react-native'

import {NotesList} from '../components/NotesList'
import {loadAllPosts} from '../store/actions'
import {HeaderButton} from '../components/ui/HeaderButton'
import {Loader} from '../components/ui/Loader'
import {DrawerAppButton} from '../components/ui/DrawerAppButton'
import {namesNavigationConstant} from '../navigation/names-navigation.constans'
import {mainScreenText} from '../texts/main-screen.text'
import {AppTextMedium} from '../components/ui/AppTextMedium'

export const MainScreen = ({navigation, route}) => {
  const {allPosts, loading} = useSelector(state => state.posts)
  const dispatch = useDispatch()

  const openPostHandler = (post) => {
    navigation.navigate(namesNavigationConstant.stack.note, {
      postId: post.id,
      date: post.date,
    })
  }

  const createPostHandler = () => {
    navigation.getParent().getParent().navigate(namesNavigationConstant.stack.createNote)
  }

  useEffect(()=>{
    dispatch(loadAllPosts())
  }, [])

  useEffect(() => {
    navigation.setOptions({
      headerTitle: mainScreenText.screenTitle,
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
      ? <NotesList data={allPosts} onOpen={openPostHandler}/>
      : <AppTextMedium style={styles.text}>{mainScreenText.notNotes}</AppTextMedium>
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

