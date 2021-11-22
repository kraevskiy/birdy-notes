import React, {useEffect, useRef, useState} from 'react'
import {useDispatch} from 'react-redux'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'

import {THEME} from '../theme'
import {addPost} from '../store/posts/postsActions'
import {PhotoPicker} from '../components/PhotoPicker'
import {DrawerAppButton} from '../components/DrawerAppButton'

export const CreateScreen = ({navigation}) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'New post',
      headerLeft: () => <DrawerAppButton navigation={navigation}/>
    })
  }, [])

  const photoPickHandler = (uri) => {
    setImage(uri)
  }

  const saveHandler = async () => {
    const post = {
      date: new Date().toJSON(),
      text,
      img: image,
      booked: false
    }
    try {
      await dispatch(addPost(post))
      setText('')
      setImage(null)
      navigation.navigate('MainStack')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
      >
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            Added new post
          </Text>
          <TextInput
            multiline
            value={text}
            placeholder="Enter text"
            onChangeText={setText}
            styles={styles.textarea}
          />
          <PhotoPicker onPick={photoPickHandler} img={image}/>
          <Button
            title="Create post"
            color={THEME.MAIN_COLOR}
            onPress={saveHandler}
            disabled={!!!text || !!!image}
          />
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
    fontFamily: 'open-regular',
    marginVertical: 10
  },
  textarea: {
    padding: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: THEME.MAIN_COLOR
  }
})
