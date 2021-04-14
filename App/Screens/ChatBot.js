import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
 
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

//import ChatBot from 'react-native-chatbot';
//https://www.npmjs.com/package/react-native-gifted-chat/v/next ???
export default function App({ navigation }) {
  const steps = [
    {
      id: '0',
      message: 'Welcome to react chatbot!',
      trigger: '1',
    },
    {
      id: '1',
      message: 'Bye!',
      end: true,
    },
  ];

  const [name, setName ] = useState("");

  const readName = async () => {
    try {
      const storage_name = await AsyncStorage.getItem('name');
      if (storage_name !== null) {
        setNameFromStorage(storage_name);
      }
    } catch (e) {
      console.error(e);
    }
  }

  const setNameFromStorage = (name_string) => {
    setName(JSON.parse(name_string));
  }

  useEffect(() => {
    readName();
  }, [])

  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Chatbot</Text>
      <Text>Name: {name}</Text>
      { /* <ChatBot steps={steps} /> **/}
    </SafeAreaView>
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
