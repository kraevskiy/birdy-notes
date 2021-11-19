import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {StyleSheet, View, Text, Image, Button, ScrollView, Alert} from 'react-native'
import {THEME} from '../theme'
import {HeaderButton} from '../components/HeaderButton'
import {removePost, toggleBooked} from '../store/posts/postsActions'

export const PostScreen = ({navigation, route}) => {
  const {allPosts} = useSelector(state => state.posts)
  const dispatch = useDispatch()
  const {postId} = route.params
  const post = allPosts.find(p => p.id === postId)

  const toggleHandler = () => {
    dispatch(toggleBooked(post))
  }

  useEffect(() => {
    navigation.setOptions({
      title: `Post: ${post?.id} on ${new Date(post?.date).toLocaleDateString()}`,
      headerRight: () => <HeaderButton
        iconName={post?.booked ? 'ios-star' : 'ios-star-outline'}
        onPress={toggleHandler}/>
    })
  }, [toggleHandler, navigation, post])

  const removeHandler = () => {
    Alert.alert(
      "Delete post",
      "Are you sure?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            navigation.navigate('MainStack')
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
    <ScrollView>
      <Image style={styles.image} source={{uri: post?.img}}/>
      <View style={styles.textWrap}>
        <Text style={styles.title}>
          {post?.text}
        </Text>
      </View>
      <Button
        title="Delete"
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  textWrap: {
    padding: 10
  },
  title: {
    fontFamily: 'open-regular'
  },
})
