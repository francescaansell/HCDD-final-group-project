import React, {useState,} from 'react';
import {Text, View, StyleSheet, SafeAreaView, Button, ScrollView} from 'react-native';
import {TextBox, EmailInput, DateTime, Telephone, DropDown, Option, Form, OptionGroup, } from "react-form-elements";


export default function App({ navigation }) {
  return (
  <SafeAreaView>
    <ScrollView>
    <View>
      <Text style = {styles.header}>This assessment provides questions about events that may be stressful, 
      harmful, or disturbing for almost everyone. Answer truthfully and to the best of your ability. This
      assessment can be retaken at any time. Please answer each question in order of presentation.</Text>
    </View>

    <Form 
      onSubmit= {() => alert("You have submitted the form")}
      name = "Assesment"
      >
    <View style = {styles.dropDown}>
      
      <View style= {styles.subText}>
      <Text>1. Have you ever served in a war zone, or have you ever served in
      a noncombat job that exposed you to war-related casualties (for
      example, as a medic or on graves registration duty?) 
      </Text>
    </View>
    
      <DropDown label = "" data-testid="" name="question1">
      <OptionGroup>
        <Option initialValue = "yes"> Yes</Option>
        <Option initialValue = "no"> No</Option>
      </OptionGroup>
      </DropDown>

      <View style= {styles.subText}>
        <Text>2. Have you ever been in a serious car accident, or a serious
        accident at work or somewhere else?</Text>
      </View>

      <DropDown label = "" data-testid="" name="question2">
      <OptionGroup>
        <Option initialValue = "yes"> Yes</Option>
        <Option initialValue = "no"> No</Option>
      </OptionGroup>
      </DropDown>

      <View style= {styles.subText}>
        <Text>3. Have you ever been in a major natural or technological disaster,
        such as a fire, tornado, hurricane, flood, earthquake, orchemical spill? </Text>
      </View>

      <DropDown label = "" data-testid="" name="question3">
      <OptionGroup>
        <Option initialValue = "yes"> Yes</Option>
        <Option initialValue = "no"> No</Option>
      </OptionGroup>
      </DropDown>

      <View style= {styles.subText}>
        <Text>4. Have you ever had a life-threatening illness such as cancer, a heart
        attack, leukemia, AIDS, multiple sclerosis, etc.?</Text>
      </View>

      <DropDown label = "" data-testid="" name="question4">
        
      <OptionGroup>
        <Option initialValue = "yes"> Yes</Option>
        <Option initialValue = "no"> No</Option>
      </OptionGroup>
      </DropDown>

      <View style= {styles.subText}>
        <Text>5. Before age 18, were you ever physically punished or beaten by a
        parent, caretaker, or teacher so that: you were very frightened; or
        you thought you would be injured; or you received bruises, cuts,
        welts, lumps or other injuries? </Text>
      </View>
      
      <DropDown label = "" data-testid="" name="question5">
      <OptionGroup>
        <Option initialValue = "yes"> Yes</Option>
        <Option initialValue = "no"> No</Option>
      </OptionGroup>
      </DropDown>
      
      <View style= {styles.subText}>
        <Text>6. Not including any punishments or beatings you already reported
        in Question 5, have you ever been attacked, beaten, or mugged by
        anyone, including friends, family members or strangers? </Text>
      </View>

      <DropDown label = "" data-testid="" name="question6">
      <OptionGroup>
        <Option initialValue = "yes"> Yes</Option>
        <Option initialValue = "no"> No</Option>
      </OptionGroup>
      </DropDown>
      
      <View style= {styles.subText}>
        <Text>7. Has anyone ever made or pressured you into having some type of
        unwanted sexual contact?</Text>
      </View>

      <DropDown label = "" data-testid="" name="question7">
      <OptionGroup>
        <Option initialValue = "yes"> Yes</Option>
        <Option initialValue = "no"> No</Option>
      </OptionGroup>
      </DropDown>
    
      <Button style = {styles.button} title = "Submit"/>

      <View style={styles.bottomText}>
        <Text>Assessment questions sourced from: https://www.ptsd.va.gov/professional/assessment/documents/BTQ.pdf.</Text>
      </View>

    </View>
    </Form>
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
    // alignItems: 'top',
    justifyContent: 'center',
    justifyContent: 'flex-start',
    margin: 20, 
    padding: 20,
    fontSize: 20,
  },
  subText: {
    // alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    padding: 10,
  },
  dropDown: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  bottomText: {
    flex: 1,
    // alignItems: 'bottom',
    justifyContent: 'center',
    fontSize: 15,
    padding: 10,
  },
  button: {
    flex: 1,
    // alignItem: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    marginTop: 5, 
  },
});

