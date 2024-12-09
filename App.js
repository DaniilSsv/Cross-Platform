import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import CollectionScreen from './src/screens/CollectionScreen';
import DetailScreen from './src/screens/DetailScreen';
import SettingsScreen from './src/screens/SettingsScreen';

// Theme
import { ThemeProvider } from './src/theme/ContextAPI';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
  
// Tab Navigator
const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Collection') {
            iconName = 'car';
          } else if (route.name === 'Settings') {
            iconName = 'cogs';
          }

          return <Icon name={iconName} size={20} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: '#313131', // Dark theme background
        },
        tabBarActiveTintColor: '#C67C4E',
        tabBarInactiveTintColor: '#E3E3E3',
        headerShown: false, // Hide header in Tab views
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Collection" component={CollectionScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

// App Component
export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* Main Tabs */}
          <Stack.Screen
            name="MainTabs"
            component={MainTabNavigator}
            options={{ headerShown: false }} // Hide header for the tab view
          />
          {/* Additional Screens */}
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
      </NavigationContainer>
    </ThemeProvider>
  );
}

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
