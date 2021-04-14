import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Linking
  
} from 'react-native';


import { Ionicons } from '@expo/vector-icons';

export default function App({ navigation }) {
  
  return (
    <SafeAreaView style={styles.container}>
      <View style = {styles.header}>
        <Text>There are many more resources outside of our app. The links bellow are resources that we want to make sure you have quick access to. </Text>
      </View>
      <View>
      <Text style={styles.links}
        onPress={() => Linking.openURL('https://www.ptsd.va.gov/')}>
        U.S. Department of Veterans Affairs, PTSD: National Center for PTSD
      </Text>
      <Text style={styles.links}
        onPress={() => Linking.openURL('https://www.psychiatry.org/patients-families/ptsd')}>
        American Psychiatric Association, Help with Posttraumatic Stress Disorder (PTSD)
      </Text>
      <Text style={styles.links}
        onPress={() => Linking.openURL('https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions/Posttraumatic-Stress-Disorder')}>
        National Alliance on Mental Illness, Posttraumatic Stress Disorder
      </Text>
      <Text style={styles.links}
        onPress={() => Linking.openURL('https://adaa.org/sites/default/files/ADAA_PTSD.pdf')}>
        Anxiety and Depression Association of American, PTSD brochure
      </Text>

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
    justifyContent: 'center',
    fontSize: 34,
  },
  links: {
    color: 'blue', 
    textDecorationLine: 'underline',
    margin: 15,
  }
});