import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Navigators
import MainTabNavigator from './MainTabNavigator';

// Screens
import DetailScreen from '../screens/DetailScreen';
import RentalListScreen from '../screens/RentalListScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={MainTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Rentals"
        component={RentalListScreen}
        options={{
          headerStyle: { backgroundColor: '#FFEBE8' },
          headerTintColor: '#1A1A1A',
          title: 'Car Details',
        }}
      />
      <Stack.Screen
        name="CarDetails"
        component={DetailScreen}
        options={{
          headerStyle: { backgroundColor: '#FFEBE8' },
          headerTintColor: '#1A1A1A',
          title: 'Car Details',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;