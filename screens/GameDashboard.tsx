import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextButton from '../components/UI/TextButton'
import ImageButton from '../components/UI/ImageButton'
import { Colors } from '../constants/styles'
import Dashboard from '../components/Compound/Dashboard'
type Props = {

}
const GameDashboard = () => {
  return (
  <View style={styles.container}>
    <View>
      <Text style={styles.title}>Memory</Text>
    </View>
    <View style={styles.buttonContainer}>
      <TextButton text='Reiniciar' onPress={()=>{}}/>
      <TextButton text='Salir' onPress={()=>{}}/>
    </View>
   <View>
      <Dashboard/>
    </View> 
  </View>
  )
}

export default GameDashboard

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    padding:38
  },
  title:{
    color:Colors['pink-700'],
    fontSize: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingVertical: 30,
  },
})