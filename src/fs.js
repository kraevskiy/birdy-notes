import * as FileSystem from 'expo-file-system'

export class FS {
  static getPathMovedImg (img){
    return new Promise(async (resolve, reject) => {
      const fileName = img.split('/').pop()
      const newPath = FileSystem.documentDirectory + fileName
      try {
        await FileSystem.moveAsync({
          to: newPath,
          from: img
        })
        resolve(newPath)
      } catch (e) {
        reject(e)
      }
    })
  }
}
