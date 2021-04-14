import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
 
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App({ navigation }) {

  const [name, setName] = useState("Name");
  const [text, setText] = useState("");
  const [age, setAge] = useState("");

  const setNameFromStorage = (name_string) => {
    setName(JSON.parse(name_string));
  }

  const storeName = async (newValue) => {
    try {
      await AsyncStorage.setItem('name', JSON.stringify(newValue))
      setName(newValue);
    } catch (e) {
      console.error(e)
    }
  }

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

  useEffect(() => {
    readName();
  })
  
  return (
    <SafeAreaView style={styles.container}>
      <View style = {styles.header}>
        <Text>Use this page to adjust your preferences. </Text>
      </View>
      <View style={styles.preference}>
        <Text style= {{marginTop: 5}}>Prefered name: </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textinput}
            onChangeText = {text => setText(text)}
            value={text}
            onSubmitEditing ={ () => storeName(text)}
            placeholder = {name}
          />
        </View>
        <Button
          style={styles.button}
          title="Update"
          onPress={() => storeName(text)}
        />
      </View>
      <View style={styles.preference}>
        <Text style = {{marginTop: 5}}>Age: </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textinput}
            onChangeText = {age => setAge(age)}
            value = {age}
            placeholder = {age}
          />
        </View>
        <Button 
          style = {styles.button}
          title = "Update"
        />
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
    margin: 20, 
    justifyContent: 'flex-start',
    fontSize: 34,
  },
  preference: {
    flexDirection: 'row', 
    margin: 15, 
  },
  inputContainer: {
    borderWidth: 1, 
    borderRadius: 5, 
    padding: 5, 
    marginLeft: 5, 
    marginRight: 5, 
  }
});