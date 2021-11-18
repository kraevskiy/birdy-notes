import React, {useEffect, useState} from 'react'
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
import {useDispatch} from 'react-redux'
import {addPost} from '../store/posts/postsActions'

export const CreateScreen = ({navigation}) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch()

  const img = 'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg'

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

  const saveHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text,
      img,
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
          <Image
            style={{
              width: '100%',
              height: 200,
              marginBottom: 10
            }}
            source={{uri: img}}
          />
          <Button
            title="Create post"
            color={THEME.MAIN_COLOR}
            onPress={saveHandler}
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
