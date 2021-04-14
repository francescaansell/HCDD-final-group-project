<script src="http://localhost:8097"></script>
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Button
  
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App({ navigation, route }) {
 

  return (
    <SafeAreaView style={styles.container}>

      <View style= {styles.links}>
        <Ionicons name="person-outline" size={64} color={'black'} />
          <Button
            style = {styles.button}
            title="Go to Preferences"
            onPress={() => navigation.navigate('Preferences')}
          />
      </View>
      <View style= {styles.links}>
        <Ionicons name="reader-outline"  size = {64} color = {'black'} />
        <Button
          style = {styles.button}
          title="Go to Assesment"
          onPress={() => navigation.navigate('Assesment')}
        />
      </View> 
      <View style= {styles.links}> 
        <Ionicons name="link-outline" size = {64} color={'black'} />
        <Button
          style = {styles.button}
          title="Go to External Links"
          onPress={() => navigation.navigate('External Links')}
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
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
  },
  button: {
   
  }, 
  links: {
    flex: 1, 
    flexDirection: 'row',
    margin: 20, 
    padding: 10, 
  }
});
