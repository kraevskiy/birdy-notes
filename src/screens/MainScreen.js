import React, {useEffect} from 'react'
import {StyleSheet, View, FlatList} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import {DATA} from '../data'
import {Post} from '../components/Post'
import {AppHeaderIcon} from '../components/AppHeaderIcon'

export const MainScreen = ({navigation}) => {
  const openPostHandler = (post) => {
    navigation.navigate('PostStack', {
      postId: post.id,
      date: post.date,
      // booked: post.booked
    })
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRightButtons/>,
      headerLeft: () => <HeaderLeftButtons/>
    })
  }, [])

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={post => post.id.toString()}
        renderItem={({item}) => <Post post={item} onOpen={openPostHandler}/>}
      />
    </View>
  )
};

const HeaderRightButtons = () => (
  <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
    <Item
      title="Take photo"
      iconName="ios-camera"
      onPress={() => console.log(111)}
    />
  </HeaderButtons>
)

const HeaderLeftButtons = () => (
  <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
    <Item
      title="Take photo"
      iconName="ios-menu"
      onPress={() => console.log(111)}
    />
  </HeaderButtons>
)

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  }
})
