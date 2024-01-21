import { Image, ImageSourcePropType, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'

type Props = {
  imageLink: ImageSourcePropType,
  color: string,
  size?: number,
  onPress: () => void
}
const ImageButton = ({ imageLink, color, size = 80, onPress }: Props) => {
  const customStyle = {
    width: size,
    height: size, 
    backgroundColor: color
  }
  return (
    <View>
      <Pressable style={[styles.container, customStyle]} onPress={onPress}>
        <Image source={imageLink} style={styles.image} />
      </Pressable>
    </View>
  )
}

export default ImageButton

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '90%',
    height: '90%',
    resizeMode: 'stretch',
  }
})