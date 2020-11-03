import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActiveMQ } from 'react-native-activemq'
import Chat from './src/pages/chat/chat'
import { Provider } from 'react-redux'
import { store } from './src/stores'

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Chat></Chat>
        <StatusBar style="auto" />
      </View>
    </Provider>
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
