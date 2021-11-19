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

import {HeaderButton} from '../components/HeaderButton'
import {THEME} from '../theme'
import {addPost} from '../store/posts/postsActions'
import {PhotoPicker} from '../components/PhotoPicker'

export const CreateScreen = ({navigation}) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch()
  const imgRef = useRef()

  const toggleDrawerHandler = () => {
    navigation.toggleDrawer()
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'New post',
      headerLeft: () => <HeaderButton
        title="Drawer"
        iconName="ios-menu"
        onPress={toggleDrawerHandler}/>
    })
  }, [])

  const photoPickHandler = (uri) => {
    imgRef.current = uri
  }

  const saveHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text,
      img: imgRef.current,
      booked: false
    }
    dispatch(addPost(post))
    navigation.navigate('MainStack')
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
          <PhotoPicker onPick={photoPickHandler}/>
          <Button
            title="Create post"
            color={THEME.MAIN_COLOR}
            onPress={saveHandler}
            disabled={!text || !imgRef.current}
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
    marginBottom: 10
  }
})
