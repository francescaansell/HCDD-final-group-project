import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Resources from '../Screens/Resources';
import ChatBot from '../Screens/ChatBot';
import Preferences from '../Screens/Preferences';
import ExternalLinks from '../Screens/ExternalLinks';
import Assessment from '../Screens/Assessment';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? 'happy' : 'happy-outline';
          } else if (route.name === "Resources") {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />
        }, 
        
        
      })}
      tabBarOptions={{
        labelStyle: { fontSize: 20 },
        activeTintColor: '#084887',
        inactiveTintColor: 'grey',
        
  
      }}
      >
        <Tab.Screen
          name="Home"
          component={ChatBot}
          
        />
        <Tab.Screen
          name="Resources"
          component={ResourcesStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function ResourcesStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name = "Resources"
        component={Resources}
      />
      <Stack.Screen
        name= "Preferences"
        component={Preferences}
      />
      <Stack.Screen 
        name = "Assessment"
        component = {Assessment}
      />
      <Stack.Screen
        name = "External Links"
        component = {ExternalLinks}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});
