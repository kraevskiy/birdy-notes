import React, {useEffect, useState} from 'react'
import {StyleSheet, View, Image, Button, Platform, Alert} from 'react-native'
import * as ImagePicker from 'expo-image-picker'

export const PhotoPicker = ({onPick, img}) => {
  const [image, setImage] = useState(null)

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync().then(res => {
          if (res.status !== 'granted') {
            return {
              ...res,
              status: 'error'
            }
            Alert.alert('Sorry, we need camera roll permissions to make this work!');
          } else {
            return ImagePicker.requestCameraPermissionsAsync()
          }
        });
        if (status !== 'granted') {
          Alert.alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, [])

  useEffect(()=>{
    if(img === null) {
      setImage(null)
    }
  }, [img])

  const takePhoto = async () => {
    let img = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    });

    if (!img.cancelled) {
      setImage(img.uri);
      onPick(img.uri);
    }
  }

  const chosePhoto = async () => {
    let img = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    });

    if (!img.cancelled) {
      setImage(img.uri);
      onPick(img.uri);
    }
  }

  return (
    <View style={styles.wrapper}>
      <Button
        title="Take photo"
        onPress={takePhoto}
      />
      <Button
        title="Chose a library"
        onPress={chosePhoto}
      />
      {image && <Image style={styles.image} source={{uri: image}}/>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10
  }
})
