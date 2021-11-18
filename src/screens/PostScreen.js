import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {StyleSheet, View, Text, Image, Button, ScrollView, Alert} from 'react-native'
import {THEME} from '../theme'
import {HeaderButton} from '../components/HeaderButton'
import {toggleBooked} from '../store/posts/postsActions'

export const PostScreen = ({navigation, route}) => {
  const {allPosts} = useSelector(state => state.posts)
  const dispatch = useDispatch()
  const params = route.params
  const post = allPosts.find(p => p.id === params.postId)
  const iconName = post.booked ? 'ios-star' : 'ios-star-outline'

  const toggleHandler = () => {
    dispatch(toggleBooked(params.postId))
  }

  useEffect(() => {
    navigation.setOptions({
      title: `Post: ${params.postId} on ${new Date(params.date).toLocaleDateString()}`,
      headerRight: () => <HeaderButton
        iconName={iconName}
        onPress={toggleHandler}/>
    })
  }, [toggleHandler, dispatch, navigation])

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
      <Image style={styles.image} source={{uri: post.img}}/>
      <View style={styles.textWrap}>
        <Text style={styles.title}>
          {post.text}
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
