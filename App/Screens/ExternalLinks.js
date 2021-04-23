import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Linking,
  ScrollView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function App({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            There are many more resources outside of our app. The <Text style={{color:'#008080'}}>links</Text> below
            are resources that we want to make sure you have quick access to.{' '}
          </Text>
        </View>
        <View>
          <Text
            style={styles.links}
            onPress={() => Linking.openURL('https://www.ptsd.va.gov/')}>
            U.S. Department of Veterans Affairs, PTSD: National Center for PTSD
          </Text>
          <Text style={styles.linkText}>{'\t'}The U.S. Department of Verterans Affairs provides 
          resources to better inform the public of PTSD, resouces of how to seek help, and where to get the correct treatment.</Text>
          <Text
            style={styles.links}
            onPress={() =>
              Linking.openURL(
                'https://www.psychiatry.org/patients-families/ptsd'
              )
            }>
            American Psychiatric Association, Help with Posttraumatic Stress
            Disorder (PTSD)
          </Text>
          <Text style={styles.linkText}>{'\t'}The American Psychiatric Association includes blog articles pertaining to PTSD
          and resources on how to reach out to a psychiatrist.</Text>
          <Text
            style={styles.links}
            onPress={() =>
              Linking.openURL(
                'https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions/Posttraumatic-Stress-Disorder'
              )
            }>
            National Alliance on Mental Illness, Posttraumatic Stress Disorder
          </Text>
          <Text style={styles.linkText}>{'\t'}The National Alliance on Mental Illness provides general information on PTSD; 
          symptoms, causes, diagnosis, treatment, and related conditions.</Text>
          <Text
            style={styles.links}
            onPress={() =>
              Linking.openURL(
                'https://adaa.org/sites/default/files/ADAA_PTSD.pdf'
              )
            }>
            Anxiety and Depression Association of America, PTSD brochure
          </Text>
          <Text style={styles.linkText}>{'\t'}The Anxiety and Depression Association of America provides more information about 
          PTSD and many resources for people to reach out to.</Text>
          <Text
            style={styles.links}
            onPress={() =>
              Linking.openURL(
                'https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd/index.shtml'
              )
            }>
            National Insitute of Mental Health, information on PTSD
          </Text>
          <Text style={styles.linkText}>{'\t'}The National Insitute of Mental Health provides general information on PTSD; signs, symptoms, 
          risk factors, treatments, therapies, and joining a study.</Text>
          <Text
            style={styles.links}
            onPress={() =>
              Linking.openURL(
                'https://medlineplus.gov/posttraumaticstressdisorder.html'
              )
            }>
            Medline Plus: Trusted Health information for You, inclides additional
            sources on PTSD
          </Text>
          <Text style={[styles.linkText,{marginBottom: 25}]}>{'\t'}Medline Plus provides a general overview on causes, symptoms, and diagnosis of PTSD. 
          Also provides resouces to more information on research, living with, related issues, statistics, clinical trials, 
          jounral articles, finding an expert and how different demographics are affected by PTSD.</Text>
        </View>
      </ScrollView>
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
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: -15
  },
  header: {
    margin: 20,
    justifyContent: 'center',
  },
  links: {
    color: '#008080',
    margin: 15,
    padding: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#008080',
    backgroundColor: '#fafafa'
  },
  linkText: {
    marginTop: -5,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
  },
});
