import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import GameDashboard from './screens/GameDashboard'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <GameDashboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
