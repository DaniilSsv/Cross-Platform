import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

// Theme
import { useTheme } from '../styles/theme/ContextAPI';
import colors from '../styles/theme/colors';

// Screens
import HomeScreen from '../screens/HomeScreen';
import CollectionScreen from '../screens/CollectionScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    const { isDarkTheme } = useTheme();
    const themeColors = isDarkTheme ? colors.darkTheme : colors.lightTheme;

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
            backgroundColor: themeColors.primaryBackgroundColor,
          },
          tabBarActiveTintColor: themeColors.highlightColor,
          tabBarInactiveTintColor: themeColors.secondaryTextColor,
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Collection" component={CollectionScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    );
};

  export default MainTabNavigator;