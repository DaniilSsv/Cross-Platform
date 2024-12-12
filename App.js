import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Theme
import { ThemeProvider } from './src/styles/theme/ContextAPI';

// Navigators
import StackNavigator from './src/navigation/StackNavigator';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};