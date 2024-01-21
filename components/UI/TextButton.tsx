import { Pressable, StyleSheet, Text, View } from 'react-native'
import{ Colors} from '../../constants/styles'
import React from 'react'

type Props = {
  text: string,
  onPress: () => void
}

const TextButton = ({ text, onPress }: Props) => {
  return (
    <View>
      <Pressable style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>

  )
}

export default TextButton

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 30,
    backgroundColor: Colors['pink-500'],
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  text: {
    color: Colors['purple-500'],
    fontSize: 18,
  }
})