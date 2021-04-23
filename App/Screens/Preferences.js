import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App({ navigation }) {
  const [name, setName] = useState('Name');
  const [text, setText] = useState('');
  const [age, setAge] = useState('');

  const setNameFromStorage = (name_string) => {
    setName(JSON.parse(name_string));
  };

  const storeName = async (newValue) => {
    try {
      await AsyncStorage.setItem('name', JSON.stringify(newValue));
      setName(newValue);
    } catch (e) {
      console.error(e);
    }
  };

  const readName = async () => {
    try {
      const storage_name = await AsyncStorage.getItem('name');
      if (storage_name !== null) {
        setNameFromStorage(storage_name);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    readName();
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>
          Use this page to adjust your preferences.{' '}
        </Text>
      </View>
        <View style={styles.preference}>
          <Text style={styles.inputLabel}>Prefered name:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textinput}
              onChangeText={(text) => setText(text)}
              value={text}
              onSubmitEditing={() => storeName(text)}
              placeholder={name}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => storeName(text)}>
            <Text style={styles.text}>Update</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.preference}>
          <Text style={styles.inputLabel}>Age:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textinput}
              onChangeText={(age) => setAge(age)}
              value={age}
              placeholder = 'e.x 54' //temp example value
              //placeholder={age}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            //add onPress for setting age
          >
            <Text style={styles.text}>Update</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.preference}>
          <Text style={styles.inputLabel}>Email:</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textinput}
              /*
              onChangeText={(email) => setEmail(email)}
              value={email}
              placeholder={email}*/
              placeholder='exampleEamil@email.com'
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            //add onPress for setting email
          >
            <Text style={styles.text}>Update</Text>
          </TouchableOpacity>
        </View>
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
  header: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  preference: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
    maxHeight: 30,
    alignItems: 'center',
    width:'100%'
  },
  inputLabel: {
    flex: 1,
    width: 60,
    textAlign: 'right'
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    flex: 1,
    marginRight: 5,
    marginLeft: 5
  },
  button: {
    backgroundColor: '#084887',
    padding: 6,
    borderRadius: 5,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '5%'

  },
  text: {
    color: 'white',
    fontSize: 14,
  },
});