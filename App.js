import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen'
import HikingScreen from './screens/HikingScreen'
import AboutScreen from './screens/AboutScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{ title: 'TwoTreeWood' }}
              />
              <Stack.Screen
                  name="Hiking"
                  component={HikingScreen}
                  options={{ title: 'Hiking' }}
              />
              <Stack.Screen
                  name="About"
                  component={AboutScreen}
                  options={{ title: 'About' }}
              />
          </Stack.Navigator>
      </NavigationContainer>
  );
}


