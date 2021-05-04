import React, { useState, } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Button, ScrollView, Picker } from 'react-native';
// import {TextBox, EmailInput, DateTime, Telephone, DropDown, Option, Form, OptionGroup, } from "react-form-elements";

export default function App({ navigation }) {
  const [q1, setQ1] = useState();
  const [q2, setQ2] = useState();
  const [q3, setQ3] = useState();
  const [q4, setQ4] = useState();
  const [q5, setQ5] = useState();
  const [q6, setQ6] = useState();
  const [q7, setQ7] = useState();

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={styles.header}>This assessment provides questions about events that may be stressful, 
      harmful, or disturbing for almost everyone. Answer truthfully and to the best of your ability. This
      assessment can be retaken at any time. Please answer each question in order of presentation.</Text>
        </View>
        {/*
    <Form 
      onSubmit= {() => alert("You have submitted the form")}
      name = "Assessment"
      > */}
        <View style={styles.dropDown}>

          <View style={styles.subText}>
            <Text>1. Have you ever served in a war zone, or have you ever served in
      a noncombat job that exposed you to war-related casualties (for
      example, as a medic or on graves registration duty?)
            </Text>
          </View>

          <Picker
            selectedValue={q1}
            onValueChange={(itemValue, itemIndex) =>
              setQ1(itemValue)
            }>
            <Picker.Item label='Please select an option...' value='0' />
            <Picker.Item label="Yes" value="yes" />
            <Picker.Item label="No" value="no" />
          </Picker>



          <View style={styles.subText}>
            <Text>2. Have you ever been in a serious car accident, or a serious
        accident at work or somewhere else?</Text>
          </View>

          <Picker
            selectedValue={q2}
            onValueChange={(itemValue, itemIndex) =>
              setQ2(itemValue)
            }>
            <Picker.Item label='Please select an option...' value='0' />
            <Picker.Item label="Yes" value="yes" />
            <Picker.Item label="No" value="no" />
          </Picker>

          <View style={styles.subText}>
            <Text>3. Have you ever been in a major natural or technological disaster,
        such as a fire, tornado, hurricane, flood, earthquake, orchemical spill? </Text>
          </View>

          <Picker
            selectedValue={q3}
            onValueChange={(itemValue, itemIndex) =>
              setQ3(itemValue)
            }>
            <Picker.Item label='Please select an option...' value='0' />
            <Picker.Item label="Yes" value="yes" />
            <Picker.Item label="No" value="no" />
          </Picker>

          <View style={styles.subText}>
            <Text>4. Have you ever had a life-threatening illness such as cancer, a heart
        attack, leukemia, AIDS, multiple sclerosis, etc.?</Text>
          </View>

          <Picker
            selectedValue={q4}
            onValueChange={(itemValue, itemIndex) =>
              setQ4(itemValue)
            }>
            <Picker.Item label='Please select an option...' value='0' />
            <Picker.Item label="Yes" value="yes" />
            <Picker.Item label="No" value="no" />
          </Picker>
          <View style={styles.subText}>
            <Text>5. Before age 18, were you ever physically punished or beaten by a
            parent, caretaker, or teacher so that: you were very frightened; or
            you thought you would be injured; or you received bruises, cuts,
        welts, lumps or other injuries? </Text>
          </View>

          <Picker
            selectedValue={q5}
            onValueChange={(itemValue, itemIndex) =>
              setQ5(itemValue)
            }>
            <Picker.Item label='Please select an option...' value='0' />
            <Picker.Item label="Yes" value="yes" />
            <Picker.Item label="No" value="no" />
          </Picker>

          <View style={styles.subText}>
            <Text>6. Not including any punishments or beatings you already reported
            in Question 5, have you ever been attacked, beaten, or mugged by
        anyone, including friends, family members or strangers? </Text>
          </View>

          <Picker
            selectedValue={q6}
            onValueChange={(itemValue, itemIndex) =>
              setQ6(itemValue)
            }>
            <Picker.Item label='Please select an option...' value='0' />
            <Picker.Item label="Yes" value="yes" />
            <Picker.Item label="No" value="no" />
          </Picker>

          <View style={styles.subText}>
            <Text>7. Has anyone ever made or pressured you into having some type of
        unwanted sexual contact?</Text>
          </View>

          <Picker
            selectedValue={q7}
            onValueChange={(itemValue, itemIndex) =>
              setQ7(itemValue)
            }>
            <Picker.Item label='Please select an option...' value='0' />
            <Picker.Item label="Yes" value="yes" />
            <Picker.Item label="No" value="no" />
          </Picker>

          <Button 
            style={styles.button} 
            title="Submit" 
            color="#084887"
            onPress={() => {navigation.navigate('Resources')}}/>
          <View style={styles.bottomText}>
            <Text> <Text>Assessment questions sourced from: https://www.ptsd.va.gov/professional/assessment/documents/BTQ.pdf. </Text> </Text>
          </View>

        </View>
        {/*</Form>*/}
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
  header: {
    justifyContent: 'center',
    justifyContent: 'flex-start',
    margin: 20,
    padding: 20,
    fontSize: 20,
  },
  subText: {
    justifyContent: 'center',
    fontSize: 15,
    padding: 10,
  },
  dropDown: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomText: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 15,
    padding: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#084887',
    paddingTop: 10,
    marginTop: 5,
  },
});