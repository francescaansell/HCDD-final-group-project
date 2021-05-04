import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Linking,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';


import { Ionicons } from '@expo/vector-icons';

export default function App({ navigation }) {

  const [name, setName] = useState("");

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
    <SafeAreaView>
    <TouchableOpacity style={{ paddingTop: 70 }}>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL('https://snack.expo.io/@taylorbracone/53d952')}
      >
        Click Here to Access PTSDBot
      </Text>
    </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  link: {
    textAlign: 'center',
    padding: 25,
    color: '#008080',
    borderColor: '#008080',
    backgroundColor: '#fafafa',
    fontSize: 30,
  },
});