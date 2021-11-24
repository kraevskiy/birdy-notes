import React from 'react'
import {StyleSheet, View, ImageBackground, Text, TouchableOpacity} from 'react-native'
import {AppCard} from './ui/AppCard'

export const Post = ({post, onOpen}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onOpen(post)}
    >
      <AppCard style={styles.post}>
        <ImageBackground
          style={styles.image}
          source={{uri: post.img}}
        >
          <View style={styles.textWrap}>
            <Text style={styles.title}>
              {new Date(post.date).toLocaleDateString()}
            </Text>
          </View>
        </ImageBackground>
      </AppCard>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  post: {
    marginBottom: 15,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200
  },
  textWrap: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%'
  },
  title: {
    color: '#fff',
    fontFamily: 'poppins-regular'
  }
})
