import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ImageButton from '../UI/ImageButton'
import { Colors } from '../../constants/styles'
import { princesses } from '../../assets'

const Dashboard = () => {
  const [size, setSize] = useState(6);
  console.log(princesses)
  return (
    <View style={styles.container}>
     {
      princesses.map((princess,index)=> 
      <View key={index} style={styles.buttonContainer}>
        <ImageButton imageLink={princess} color={Colors['pink-500']} onPress={()=>{}}/> 
      </View>
      )
     } 
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonContainer: {
    width:'33%',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})