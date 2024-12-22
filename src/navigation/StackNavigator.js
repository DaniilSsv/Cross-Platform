import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Theme
import { useTheme } from '../styles/theme/ContextAPI';
import colors from '../styles/theme/colors';

// Navigators
import MainTabNavigator from './MainTabNavigator';

// Screens
import DetailScreen from '../screens/DetailScreen';
import RentalListScreen from '../screens/RentalListScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { isDarkTheme } = useTheme();
  const themeColors = isDarkTheme ? colors.darkTheme : colors.lightTheme;

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
          headerStyle: { backgroundColor: themeColors.primaryBackgroundColor },
          headerTintColor: themeColors.textColor,
          title: 'Unavailable On',
        }}
      />
      <Stack.Screen
        name="CarDetails"
        component={DetailScreen}
        options={{
          headerStyle: { backgroundColor: themeColors.primaryBackgroundColor },
          headerTintColor: themeColors.textColor,
          title: 'Car Details',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;