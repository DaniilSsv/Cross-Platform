import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Context
import { ThemeProvider } from './src/styles/theme/ContextAPI';
import { CurrencyProvider } from './src/context/CurrencyContext';

// Navigators
import StackNavigator from './src/navigation/StackNavigator';

export default function App() {
  return (
    <ThemeProvider>
      <CurrencyProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </CurrencyProvider>
    </ThemeProvider>
  );
};