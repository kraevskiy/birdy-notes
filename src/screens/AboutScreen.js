import React, {useEffect} from 'react'
import {StyleSheet, View, ScrollView} from 'react-native'

import {DrawerAppButton} from '../components/ui/DrawerAppButton'
import {AppTextBold} from '../components/ui/AppTextBold'
import {AppText} from '../components/ui/AppText'
import {AppTextMedium} from '../components/ui/AppTextMedium'
import {aboutScreenText} from '../texts/about-screen.text'
import {AppButtonText} from '../components/ui/AppButtonText'
import {namesNavigationConstant} from '../navigation/names-navigation.constans'

export const AboutScreen = ({navigation}) => {

  useEffect(() => {
    navigation.setOptions({
      headerTitle: aboutScreenText.screenTitle,
      headerLeft: () => <DrawerAppButton navigation={navigation}/>
    })
  }, [])

  const openPrivacyHandler = () => {
    navigation.navigate(namesNavigationConstant.stack.privacy)
  }

  return (
    <ScrollView
      style={styles.wrapper}>
      <View style={styles.center}>
        <AppTextBold style={styles.title}>
          {aboutScreenText.title}
        </AppTextBold>
        <AppText style={styles.text}>
          {aboutScreenText.text1}
        </AppText>
        <AppText style={styles.text}>
          {aboutScreenText.text2}
        </AppText>
        <AppTextMedium style={styles.subtitle}>
          {aboutScreenText.subtitle}
        </AppTextMedium>
        {
          aboutScreenText.list.map((item) => (
            <AppText key={item.toString()} style={styles.list}>
              {item}
            </AppText>
          ))
        }
        <AppText style={{...styles.text, marginTop: 15}}>
          {aboutScreenText.language}
        </AppText>
        <AppText style={styles.text}>
          {aboutScreenText.text3}
        </AppText>
        <AppText>
          {aboutScreenText.version} <AppTextBold>1.0.0</AppTextBold>
        </AppText>
        <AppButtonText
          onPress={openPrivacyHandler}>
          {aboutScreenText.privacy}
        </AppButtonText>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%'
  },
  title: {
    width: '100%',
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 20,
    lineHeight: 30
  },
  subtitle: {
    width: '100%',
    fontSize: 16,
    paddingTop: 8,
    paddingBottom: 14,
    lineHeight: 24
  },
  text: {
    width: '100%',
    paddingTop: 5,
    paddingBottom: 10,
    fontSize: 13,
  },
  list: {
    width: '100%',
    paddingBottom: 5,
    fontSize: 13,
  },
  link: {
    width: '100%',
    color: '#145c8f',
    paddingTop: 5,
    paddingBottom: 10,
    fontSize: 13,
  }
})
