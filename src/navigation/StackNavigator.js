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
          headerTintColor: '#EDD6C8',
          title: 'Car Details',
        }}
      />
    </Stack.Navigator>
  );
};

const getStyles = (isDarkTheme) =>
  StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: isDarkTheme ? '#3E3E3E' : '#EDD6C8',
  },
  logo: {
    color: isDarkTheme ? '#EDD6C8' : '#313131',
    fontSize: 18,
  },
  navLinks: {
    flexDirection: 'row',
  },
  navLink: {
    color: isDarkTheme ? '#EDD6C8' : '#313131',
    marginHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default StackNavigator;