import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {StyleSheet} from 'react-native'

import {NotesList} from '../components/NotesList'
import {DrawerAppButton} from '../components/ui/DrawerAppButton'
import {namesNavigationConstant} from '../navigation/names-navigation.constans'
import {bookedScreenText} from '../texts/booked-screen.text'
import {AppTextMedium} from '../components/ui/AppTextMedium'

export const BookedScreen = ({navigation}) => {
  const {bookedPosts} = useSelector(state => state.posts)

  const openPostHandler = (post) => {
    navigation.navigate(namesNavigationConstant.stack.note, {
      postId: post.id,
      date: post.date,
    })
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitle: bookedScreenText.screenTitle,
      headerLeft: () => <DrawerAppButton navigation={navigation}/>
    })
  }, [navigation, bookedPosts])

  return (
    bookedPosts.length
      ? <NotesList data={bookedPosts} onOpen={openPostHandler}/>
      : <AppTextMedium style={styles.text}>{bookedScreenText.notNotes}</AppTextMedium>
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

