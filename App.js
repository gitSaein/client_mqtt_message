import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ActiveMQ } from 'react-native-activemq'
import Chat from './src/pages/chat/chat'

export default function App() {
  return (
    <View style={styles.container}>
      <Chat></Chat>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
