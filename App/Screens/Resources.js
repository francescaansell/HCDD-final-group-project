
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Button,
  TouchableOpacity,
  
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App({ navigation, route }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.links}>
        <Ionicons name="person-outline" size={64} color={'black'} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Preferences')}>
          <Text style={styles.text}>Go to Preferences</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.links}>
        <Ionicons name="reader-outline" size={64} color={'black'} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Assessment')}>
          <Text style={styles.text}>Go to Assessment</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.links}>
        <Ionicons name="link-outline" size={64} color={'black'} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('External Links')}>
          <Text style={styles.text}>Go to External Links</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#084887',
    justifyContent: 'center',
    padding: 10,
    height: 70,
    width: '100%',
    marginLeft: '5%',
    borderRadius: 10
  },
  links: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: '5%',
    padding: 10,
    maxHeight: 110,
    width: '65%'
  },
});