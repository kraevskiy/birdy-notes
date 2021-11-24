import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native'

import {THEME} from '../theme'
import {addPost} from '../store/posts/postsActions'
import {PhotoPicker} from '../components/PhotoPicker'
import {DrawerAppButton} from '../components/ui/DrawerAppButton'
import {AppButton} from '../components/ui/AppButton'

export const CreateScreen = ({navigation}) => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Create a new Birdy Notes',
      headerLeft: () => <DrawerAppButton navigation={navigation}/>
    })
  }, [])

  const photoPickHandler = (uri) => {
    setImage(uri)
  }

  const saveHandler = async () => {
    if (!!!title || !!!image) {
      Alert.alert('Check all fields')
    } else {
      const post = {
        date: new Date().toJSON(),
        text,
        title,
        img: image,
        booked: false
      }
      try {
        await dispatch(addPost(post))
        setText('')
        setTitle('')
        setImage(null)
        navigation.navigate('MainStack')
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
          <Text style={styles.title}>
            What’s on your mind
          </Text>
          <TextInput
            multiline
            value={title}
            placeholder="Enter whatever you want"
            onChangeText={setTitle}
            style={styles.input}
          />
          <TextInput
            multiline
            value={text}
            placeholder="Enter whatever you want"
            onChangeText={setText}
            style={styles.textarea}
          />
          <PhotoPicker onPick={photoPickHandler} img={image}/>
          <AppButton
            onPress={saveHandler}
            color={(!!!title || !!!image) ? THEME.MAIN_COLOR_OPACITY : THEME.MAIN_COLOR}
            disabled={!!!title || !!!image}
          >
            Save a Birdy Note
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
    fontFamily: 'poppins-regular',
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
