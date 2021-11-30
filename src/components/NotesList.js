import React from 'react'
import {FlatList, StyleSheet, View} from 'react-native'

import {AppCard} from './ui/AppCard'

export const NotesList = ({data, onOpen}) => {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={note => note.id.toString()}
        renderItem={({item}) => <AppCard note={item} onOpen={onOpen}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  }
})
