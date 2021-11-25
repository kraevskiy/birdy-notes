export const sliceText = (text, length= 60) => {
  if(text.length > length) {
    return `${text.slice(0, length)}...`
  }
  return text
}
