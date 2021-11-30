import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {StyleSheet} from 'react-native'

import {NotesList} from '../components/NotesList'
import {DrawerAppButton} from '../components/ui/DrawerAppButton'
import {namesNavigationConstant} from '../navigation/names-navigation.constans'
import {bookedScreenText} from '../texts/booked-screen.text'
import {AppTextMedium} from '../components/ui/AppTextMedium'

export const BookedScreen = ({navigation}) => {
  const {bookedNotes} = useSelector(state => state.notes)

  const openNoteHandler = (note) => {
    navigation.navigate(namesNavigationConstant.stack.note, {
      noteId: note.id
    })
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitle: bookedScreenText.screenTitle,
      headerLeft: () => <DrawerAppButton navigation={navigation}/>
    })
  }, [navigation, bookedNotes])

  return (
    bookedNotes.length
      ? <NotesList data={bookedNotes} onOpen={openNoteHandler}/>
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

