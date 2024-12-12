import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

// Screens
import HomeScreen from '../screens/HomeScreen';
import CollectionScreen from '../screens/CollectionScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

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
            backgroundColor: '#313131',
          },
          tabBarActiveTintColor: '#C67C4E',
          tabBarInactiveTintColor: '#E3E3E3',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Collection" component={CollectionScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
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
  
  export default MainTabNavigator;