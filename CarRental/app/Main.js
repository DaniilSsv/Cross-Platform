import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './app/screens/HomeScreen';
import CollectionScreen from './app/screens/CollectionScreen';
import DetailScreen from './app/screens/DetailScreen';
import SettingsScreen from './app/screens/SettingsScreen';
import { ThemeProvider } from './app/Context/ContextAPI';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Custom Header Component
const Header = ({ navigation, title }) => (
  <View style={styles.header}>
    <Text style={styles.logo}>{title}</Text>
    <View style={styles.navLinks}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.navLink}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Collection')}>
        <Text style={styles.navLink}>Collection</Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
      <Icon name="user" size={20} color="#C67C4E" style={styles.icon} />
    </TouchableOpacity>
  </View>
);

export default function Main() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              header: ({ navigation }) => <Header navigation={navigation} title="Kalymarym" />,
            }}
          />
          <Stack.Screen
            name="Collection"
            component={CollectionScreen}
            options={{
              header: ({ navigation }) => <Header navigation={navigation} title="Collection" />,
            }}
          />
          <Stack.Screen
            name="Details"
            component={DetailScreen}
            options={{
              header: ({ navigation }) => <Header navigation={navigation} title="Details" />,
            }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              header: ({ navigation }) => <Header navigation={navigation} title="Settings" />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#313131',
  },
  logo: {
    color: '#EDD6C8',
    fontSize: 18,
  },
  navLinks: {
    flexDirection: 'row',
  },
  navLink: {
    color: '#EDD6C8',
    marginHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
});
