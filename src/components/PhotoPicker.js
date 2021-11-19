import React, {useEffect, useState} from 'react'
import {StyleSheet, View, Image, Button, Platform, Alert} from 'react-native'
import * as ImagePicker from 'expo-image-picker'

async function askForPermission() {
  if (Platform.OS !== 'web') {
    const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if(status !== 'granted'){
      Alert.alert('Error', 'Sorry, we need camera roll permissions to make this work!')
    }
  }
}

export const PhotoPicker = ({onPick, img}) => {
  const [image, setImage] = useState(null)

  useEffect(() => {
    askForPermission()
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

  return (
    <View style={styles.wrapper}>
      <Button
        title="Take photo"
        onPress={takePhoto}
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
