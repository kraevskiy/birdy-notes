import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {StyleSheet, View, Text, Image, ScrollView, Alert} from 'react-native'
import {THEME} from '../theme'
import {HeaderButton} from '../components/ui/HeaderButton'
import {removePost, toggleBooked} from '../store/posts/postsActions'
import {AppButton} from '../components/ui/AppButton'
import {namesNavigationConstant} from '../navigation/names-navigation.constans'
import {noteScreenText} from '../texts/note-screen.text'

export const NoteScreen = ({navigation, route}) => {
  const {allPosts} = useSelector(state => state.posts)
  const dispatch = useDispatch()
  const {postId} = route.params
  const post = allPosts.find(p => p.id === postId)

  const toggleHandler = () => {
    dispatch(toggleBooked(post))
  }

  useEffect(() => {
    navigation.setOptions({
      title: post?.title,
      headerRight: () => <HeaderButton
        iconName={post?.booked ? 'star' : 'star-outline'}
        onPress={toggleHandler}/>
    })
  }, [toggleHandler, navigation, post])

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
            dispatch(removePost(postId))
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
      <Image style={styles.image} source={{uri: post?.img}}/>
      <View style={styles.textWrap}>
        <Text style={styles.title}>
          {post?.text}
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
