import React from 'react';
import HomeScreen from './app/screens/HomeScreen';
import CollectionScreen from './app/screens/CollectionScreen';
import DetailScreen from './app/screens/DetailScreen';
import SettingsScreen from './app/screens/SettingsScreen';
import { ThemeProvider } from './app/ContextAPI';

export default function App() {
  return (
    <ThemeProvider>
      {/* navigatie plus nog andere schermen */}
      <SettingsScreen/>
    </ThemeProvider>
  );
}