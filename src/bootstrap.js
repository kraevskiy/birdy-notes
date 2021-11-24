import * as Font from 'expo-font'
import {DB} from './db'

export async function bootstrap() {
  try{
    await Font.loadAsync({
      'poppins-regular': require('./../assets/fonts/Poppins-Regular.ttf'),
      'poppins-medium': require('./../assets/fonts/Poppins-Medium.ttf'),
      'poppins-bold': require('./../assets/fonts/Poppins-SemiBold.ttf'),
    })
    await DB.init()
    console.log('database started...')
  } catch (e) {
    console.log(e)
  }
}
