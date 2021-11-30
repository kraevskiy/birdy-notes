import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {StyleSheet} from 'react-native'

import {NotesList} from '../components/NotesList'
import {loadAllNotes} from '../store/actions'
import {HeaderButton} from '../components/ui/HeaderButton'
import {Loader} from '../components/ui/Loader'
import {DrawerAppButton} from '../components/ui/DrawerAppButton'
import {namesNavigationConstant} from '../navigation/names-navigation.constans'
import {mainScreenText} from '../texts/main-screen.text'
import {AppTextMedium} from '../components/ui/AppTextMedium'

export const MainScreen = ({navigation, route}) => {
  const {allNotes, loading} = useSelector(state => state.notes)
  const dispatch = useDispatch()

  const openNoteHandler = (note) => {
    navigation.navigate(namesNavigationConstant.stack.note, {
      noteId: note.id
    })
  }

  const createNoteHandler = () => {
    navigation.getParent().getParent().navigate(namesNavigationConstant.stack.createNote)
  }

  useEffect(()=>{
    dispatch(loadAllNotes())
  }, [])

  useEffect(() => {
    navigation.setOptions({
      headerTitle: mainScreenText.screenTitle,
      headerRight: () => <HeaderButton
        title="Take photo"
        iconName="add-circle-outline"
        onPress={createNoteHandler}
      />,
      headerLeft: () => <DrawerAppButton navigation={navigation}/>
    })
  }, [navigation])

  if(loading) {
    return <Loader />
  }

  return (
    allNotes.length
      ? <NotesList data={allNotes} onOpen={openNoteHandler}/>
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

