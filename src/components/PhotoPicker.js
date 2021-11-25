import React, {useEffect, useState} from 'react'
import {StyleSheet, View, Image, Button, Platform, Alert} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import {AppButton} from './ui/AppButton'
import {THEME} from '../theme'
import {createScreenText} from '../texts/create-screen.text'

export const PhotoPicker = ({onPick, img}) => {
  const [image, setImage] = useState(null)

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync().then(res => {
          if (res.status !== 'granted') {
            return {
              ...res,
              status: 'error'
            }
            Alert.alert(createScreenText.errorCamera);
          } else {
            return ImagePicker.requestCameraPermissionsAsync()
          }
        });
        if (status !== 'granted') {
          Alert.alert(createScreenText.errorMedia);
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
      <AppButton
        style={{
          marginBottom: 15
        }}
        color={THEME.SECOND_COLOR}
        onPress={chosePhoto}
      >
        {createScreenText.attachBtn}
      </AppButton>

      <AppButton
        color={THEME.SECOND_COLOR}
        onPress={takePhoto}
      >
        {createScreenText.cameraBtn}
      </AppButton>
      {image && <Image style={styles.image} source={{uri: image}}/>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 15,
    flexDirection: 'column'
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10
  }
})
