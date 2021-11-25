import React, {useEffect} from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import * as WebBrowser from 'expo-web-browser'

import {AppText} from '../components/ui/AppText'
import {privacyScreenText} from '../texts/privacy-screen.text'
import {AppTextBold} from '../components/ui/AppTextBold'
import {AppTextMedium} from '../components/ui/AppTextMedium'
import {AppButtonText} from '../components/ui/AppButtonText'

export const PrivacyScreen = ({navigation}) => {

  useEffect(() => {
    navigation.setOptions({
      headerTitle: privacyScreenText.screenTitle,
    })
  }, [navigation])

  const handleOpenLink = (link) => {
    WebBrowser.openBrowserAsync(link)
  }

  return (
    <ScrollView>
      <View style={styles.center}>
        <AppText style={styles.text}>
          {privacyScreenText.text1}
        </AppText>

        <AppTextBold style={styles.title}>
          {privacyScreenText.introduction}
        </AppTextBold>
        <AppText style={styles.text}>
          {privacyScreenText.introductionText1}
        </AppText>
        <AppText style={styles.text}>
          {privacyScreenText.introductionText2}
        </AppText>
        <AppText style={styles.text}>
          {privacyScreenText.introductionText3}
        </AppText>

        <AppTextBold style={styles.title}>
          {privacyScreenText.howCollectTitle}
        </AppTextBold>
        <AppTextMedium style={styles.subtitle}>
          {privacyScreenText.howCollectSubtitle1}
        </AppTextMedium>
        <AppText style={styles.text}>
          {privacyScreenText.howCollectText1}
        </AppText>
        <AppTextMedium style={styles.subtitle}>
          {privacyScreenText.howCollectSubtitle2}
        </AppTextMedium>
        <AppText style={styles.text}>
          {privacyScreenText.howCollectText2}
        </AppText>
        <AppTextMedium style={styles.subtitle}>
          {privacyScreenText.howCollectSubtitle3}
        </AppTextMedium>
        <AppText style={styles.text}>
          {privacyScreenText.howCollectText3}
        </AppText>
        <AppTextMedium style={styles.subtitle}>
          {privacyScreenText.howCollectSubtitle4}
        </AppTextMedium>
        <AppText style={styles.text}>
          {privacyScreenText.howCollectText4}
        </AppText>
        <AppText style={styles.text}>
          {privacyScreenText.howCollectText4_1}
        </AppText>
        <AppTextMedium style={styles.subtitle}>
          {privacyScreenText.howCollectSubtitle5}
        </AppTextMedium>
        <AppText style={styles.text}>
          {privacyScreenText.howCollectText5}
        </AppText>
        <AppTextMedium style={styles.subtitle}>
          {privacyScreenText.howCollectSubtitle6}
        </AppTextMedium>
        <AppText style={styles.text}>
          {privacyScreenText.howCollectText6}
        </AppText>
        <AppTextMedium style={styles.subtitle}>
          {privacyScreenText.howCollectSubtitle7}
        </AppTextMedium>
        <AppText style={styles.text}>
          {privacyScreenText.howCollectText7}
        </AppText>

        <AppTextBold style={styles.title}>
          {privacyScreenText.useCollectTitle}
        </AppTextBold>
        <AppText style={styles.text}>
          {privacyScreenText.useCollectText1}
        </AppText>
        <AppText style={styles.text}>
          {privacyScreenText.useCollectText2}
        </AppText>
        <AppText style={styles.list}>
          {privacyScreenText.useCollectText3}
        </AppText>
        <AppText style={styles.list}>
          {privacyScreenText.useCollectText4}
        </AppText>
        <AppText style={styles.list}>
          {privacyScreenText.useCollectText5}
        </AppText>

        <AppTextBold style={styles.title}>
          {privacyScreenText.shareCollectTitle}
        </AppTextBold>
        <AppText style={styles.text}>
          {privacyScreenText.shareCollectText1}
        </AppText>
        <AppText style={styles.text}>
          {privacyScreenText.shareCollectText2}
        </AppText>
        <AppText style={styles.text}>
          {privacyScreenText.shareCollectText3}
        </AppText>
        <AppText style={styles.text}>
          {privacyScreenText.shareCollectText4}
        </AppText>
        <AppButtonText
          onPress={()=>handleOpenLink(privacyScreenText.shareCollectLink1)}
          style={{paddingLeft: 0}}
          styleText={styles.link}>
          {privacyScreenText.shareCollectLink1}
        </AppButtonText>
        <AppText style={styles.text}>
          {privacyScreenText.shareCollectText5}
        </AppText>
        <AppButtonText
          onPress={()=>handleOpenLink(privacyScreenText.shareCollectLink2)}
          style={{paddingLeft: 0}}
          styleText={styles.link}>
          {privacyScreenText.shareCollectLink2}
        </AppButtonText>
        <AppText style={styles.text}>
          {privacyScreenText.shareCollectText6}
        </AppText>
        <AppText style={styles.text}>
          {privacyScreenText.shareCollectText7}
        </AppText>
        <AppButtonText
          onPress={()=>handleOpenLink(privacyScreenText.shareCollectLink3)}
          style={{paddingLeft: 0}}
          styleText={styles.link}>
          {privacyScreenText.shareCollectLink3}
        </AppButtonText>
        <AppText style={styles.text}>
          {privacyScreenText.shareCollectText8}
        </AppText>
        <AppButtonText
          onPress={()=>handleOpenLink(privacyScreenText.shareCollectLink4)}
          style={{paddingLeft: 0}}
          styleText={styles.link}>
          {privacyScreenText.shareCollectLink4}
        </AppButtonText>
        <AppText style={styles.text}>
          {privacyScreenText.shareCollectText9}
        </AppText>
        <AppButtonText
          onPress={()=>handleOpenLink(privacyScreenText.shareCollectLink5)}
          style={{paddingLeft: 0}}
          styleText={styles.link}>
          {privacyScreenText.shareCollectLink5}
        </AppButtonText>
        <AppText style={styles.text}>
          {privacyScreenText.shareCollectText10}
        </AppText>
        <AppText style={styles.text}>
          {privacyScreenText.shareCollectText11}
        </AppText>
        <AppButtonText
          onPress={()=>handleOpenLink(privacyScreenText.shareCollectLink6)}
          style={{paddingLeft: 0}}
          styleText={styles.link}>
          {privacyScreenText.shareCollectLink6}
        </AppButtonText>
        <AppText style={styles.text}>
          {privacyScreenText.shareCollectText12}
        </AppText>
        <AppButtonText
          onPress={()=>handleOpenLink(privacyScreenText.shareCollectLink7)}
          style={{paddingLeft: 0}}
          styleText={styles.link}>
          {privacyScreenText.shareCollectLink7}
        </AppButtonText>
        <AppText style={styles.text}>
          {privacyScreenText.shareCollectText13}
        </AppText>
        <AppText style={styles.text}>
          {privacyScreenText.shareCollectText14}
        </AppText>
        <AppButtonText
          onPress={()=>handleOpenLink(privacyScreenText.shareCollectLink8)}
          style={{paddingLeft: 0}}
          styleText={styles.link}>
          {privacyScreenText.shareCollectLink8}
        </AppButtonText>
        <AppText style={styles.text}>
          {privacyScreenText.shareCollectText15}
        </AppText>
        <AppButtonText
          onPress={()=>handleOpenLink(privacyScreenText.shareCollectLink9)}
          style={{paddingLeft: 0}}
          styleText={styles.link}>
          {privacyScreenText.shareCollectLink9}
        </AppButtonText>

        <AppTextBold style={styles.title}>
          {privacyScreenText.securityUsageTittle}
        </AppTextBold>
        <AppText style={styles.text}>
          {privacyScreenText.securityUsageText}
        </AppText>

        <AppTextBold style={styles.title}>
          {privacyScreenText.childUsageTitle}
        </AppTextBold>
        <AppText style={styles.text}>
          {privacyScreenText.childUsageText}
        </AppText>

        <AppTextBold style={styles.title}>
          {privacyScreenText.yourRightTitle}
        </AppTextBold>
        <AppText style={styles.text}>
          {privacyScreenText.yourRightText1}
        </AppText>
        <AppText style={styles.text}>
          {privacyScreenText.yourRightText2}
        </AppText>
        <AppText style={styles.text}>
          {privacyScreenText.yourRightText3}
        </AppText>

        <AppTextBold style={styles.title}>
          {privacyScreenText.serviceTitle}
        </AppTextBold>
        <AppText style={styles.text}>
          {privacyScreenText.serviceText}
        </AppText>

        <AppTextBold style={styles.title}>
          {privacyScreenText.contactTitle}
        </AppTextBold>
        <AppText style={styles.text}>
          {privacyScreenText.contactText}
        </AppText>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    width: '100%',
    fontSize: 16,
    paddingTop: 8,
    paddingBottom: 8,
    lineHeight: 27
  },
  subtitle: {
    width: '100%',
    fontSize: 14,
    paddingTop: 4,
    paddingBottom: 4,
    lineHeight: 24
  },
  text: {
    width: '100%',
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 11,
    textAlign: 'justify'
  },
  list: {
    width: '100%',
    paddingBottom: 5,
    fontSize: 11,
  },
  link: {
    width: '100%',
    color: '#145c8f',
    paddingTop: 0,
    paddingBottom: 2,
    fontSize: 11,
    paddingLeft: 0,
    alignItems: 'flex-start'
  }
})
