import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Navigators
import MainTabNavigator from './MainTabNavigator';

// Screens
import DetailScreen from '../screens/DetailScreen';

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
        name="CarDetails"
        component={DetailScreen}
        options={{
          headerStyle: { backgroundColor: '#313131' },
          headerTintColor: '#C67C4E',
          title: 'Car Details',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;