import 'react-native-gesture-handler';
import React from 'react';

import { StoreProvider } from './Store';
import { reducer, initialState } from './reducers/GlobalStateReducer';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import HomeScreen from './screens/HomeScreen'
import TravelScreen from './screens/TravelScreen'
import HikingScreen from './screens/HikingScreen'
import AstronomyScreen from './screens/AstronomyScreen'
import AboutScreen from './screens/AboutScreen'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  return (
      <StoreProvider initialState={initialState} reducer={reducer}>
      <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{
                      title: 'TwoTreeWood',
                      tabBarLabel: 'Home',
                      tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="home" color={color} size={size} />
                      ),
                  }}
              />
              <Tab.Screen
                  name="Travel"
                  component={TravelScreen}
                  options={{ title: 'Travel',
                      tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="airplane-takeoff" color={color} size={size} />
                      ),
                  }}
              />
              <Tab.Screen
                  name="Hiking"
                  component={HikingScreen}
                  options={{ title: 'Hiking',
                      tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="walk" color={color} size={size} />
                      ),
                  }}
              />
              <Tab.Screen
                  name="Astronomy"
                  component={AstronomyScreen}
                  options={{ title: 'Astronomy',
                      tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="weather-night" color={color} size={size} />
                      ),
                  }}
              />
              <Tab.Screen
                  name="About"
                  component={AboutScreen}
                  options={{ title: 'About',
                      tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="information-outline" color={color} size={size} />
                      ), }}
              />
          </Tab.Navigator>
      </NavigationContainer>
      </StoreProvider>
  );
}


