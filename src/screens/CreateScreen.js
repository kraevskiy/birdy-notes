import React, {useEffect, useRef, useState} from 'react'
import {useDispatch} from 'react-redux'
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native'

import {THEME} from '../theme'
import {addNote} from '../store/notes/notesActions'
import {PhotoPicker} from '../components/PhotoPicker'
import {DrawerAppButton} from '../components/ui/DrawerAppButton'
import {AppButton} from '../components/ui/AppButton'
import {namesNavigationConstant} from '../navigation/names-navigation.constans'
import {createScreenText} from '../texts/create-screen.text'
import {AppTextMedium} from '../components/ui/AppTextMedium'

export const CreateScreen = ({navigation}) => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const inputTitleRef = useRef(null)
  const dispatch = useDispatch()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: createScreenText.screenTitle,
      headerLeft: () => <DrawerAppButton navigation={navigation}/>
    })
  }, [])

  const photoPickHandler = (uri) => {
    setImage(uri)
  }

  const saveHandler = async () => {
    if (!!!title || !!!image) {
      Alert.alert(createScreenText.error)
      inputTitleRef.current.focus()
    } else {
      const note = {
        date: new Date().toJSON(),
        text,
        title,
        img: image,
        booked: false
      }
      try {
        await dispatch(addNote(note))
        setText('')
        setTitle('')
        setImage(null)
        navigation.navigate(namesNavigationConstant.stack.main)
      } catch (e) {
        console.log(e)
      }
    }
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
      >
        <View style={styles.wrapper}>
          <AppTextMedium style={styles.title}>
            {createScreenText.title}
          </AppTextMedium>
          <TextInput
            ref={inputTitleRef}
            multiline
            value={title}
            placeholder={createScreenText.inputTitle}
            onChangeText={setTitle}
            style={styles.input}
          />
          <TextInput
            multiline
            value={text}
            placeholder={createScreenText.inputText}
            onChangeText={setText}
            style={styles.textarea}
          />
          <PhotoPicker onPick={photoPickHandler} img={image}/>
          <AppButton
            onPress={saveHandler}
            color={(!!!title || !!!image) ? THEME.MAIN_COLOR_OPACITY : THEME.MAIN_COLOR}
            disabled={!!!title || !!!image}
          >
            {createScreenText.saveBtn}
          </AppButton>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10
  },
  input: {
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: THEME.MAIN_COLOR_OPACITY,
    marginBottom: 15
  },
  textarea: {
    marginBottom: 15,
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: THEME.MAIN_COLOR_OPACITY,
    borderRadius: 10,
    height: 90
  }
})
