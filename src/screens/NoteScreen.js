import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {StyleSheet, View, Text, Image, ScrollView, Alert} from 'react-native'
import {THEME} from '../theme'
import {HeaderButton} from '../components/ui/HeaderButton'
import {removeNote, toggleBooked} from '../store/notes/notesActions'
import {AppButton} from '../components/ui/AppButton'
import {namesNavigationConstant} from '../navigation/names-navigation.constans'
import {noteScreenText} from '../texts/note-screen.text'

export const NoteScreen = ({navigation, route}) => {
  const {allNotes} = useSelector(state => state.notes)
  const dispatch = useDispatch()
  const {noteId} = route.params
  const note = allNotes.find(p => p.id === noteId)

  const toggleHandler = () => {
    dispatch(toggleBooked(note))
  }

  useEffect(() => {
    navigation.setOptions({
      title: note?.title,
      headerRight: () => <HeaderButton
        iconName={note?.booked ? 'star' : 'star-outline'}
        onPress={toggleHandler}/>
    })
  }, [toggleHandler, navigation, note])

  const removeHandler = () => {
    Alert.alert(
      noteScreenText.alertDeleteTitle,
      noteScreenText.alertDeleteMessage,
      [
        {
          text: noteScreenText.alertCancelBtn,
          style: "cancel",
        },
        {
          text: noteScreenText.alertDestructiveBtn,
          onPress: () => {
            navigation.navigate(namesNavigationConstant.stack.main)
            dispatch(removeNote(noteId))
          },
          style: "destructive",
        },
      ],
      {
        cancelable: false
      }
    );
  }

  return (
    <ScrollView
      style={styles.wrapper}
    >
      <Image style={styles.image} source={{uri: note?.img}}/>
      <View style={styles.textWrap}>
        <Text style={styles.title}>
          {note?.text}
        </Text>
      </View>
      <AppButton
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      >
        {noteScreenText.deleteBtn}
      </AppButton>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  image: {
    width: '100%',
    height: 200
  },
  textWrap: {
    padding: 10
  },
  title: {
    fontFamily: 'poppins-regular'
  },
})
