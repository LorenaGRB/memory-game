import { Image, ImageSourcePropType, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/styles'
import { HIDE } from '../../constants/enum'

type Props = {
  imageLink: ImageSourcePropType,
  color?: string,
  size?: number,
  status: 'hide' | 'show' | 'completed',
  onPress: () => void,
}
const ImageButton = ({ status = HIDE, imageLink, color = Colors['pink-500'], size = 80, onPress }: Props) => {
  const customStyle = {
    width: size,
    height: size,
  }
  return (
    <View>
      <Pressable style={[styles.container, customStyle, styles[status]]} onPress={onPress}>
        <Image source={imageLink} style={[styles.image, { opacity: status === HIDE ? 0 : 1 }]} />
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
  },
  hide: {
    backgroundColor: Colors['gray-200'],
  },
  show: {
    backgroundColor: Colors['pink-500'],
  },
  completed: {
    backgroundColor: Colors['pink-700'],
  }
})