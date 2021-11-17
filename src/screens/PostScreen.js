import React, {useEffect} from 'react'
import {StyleSheet, View, Text, Image, Button, ScrollView, Alert} from 'react-native'
import {DATA} from '../data'
import {THEME} from '../theme'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {AppHeaderIcon} from '../components/AppHeaderIcon'

export const PostScreen = ({navigation, route}) => {
  const params = route.params
  const post = DATA.find(p => p.id === params.postId)
  const iconName = post.booked ? 'ios-star' : 'ios-star-outline'

  useEffect(() => {
    navigation.setOptions({
      title: `Post: ${params.postId} on ${new Date(params.date).toLocaleDateString()}`,
      headerRight: () => <PostRightButtons iconName={iconName}/>
    })
  }, [])

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
          onPress: () => {},
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

const PostRightButtons = ({iconName}) => (
  <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
    <Item
      title="Take photo"
      iconName={iconName}
      onPress={() => console.log(111)}
    />
  </HeaderButtons>
)

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
