import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, Picker, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Settings Screen
const SettingsScreen = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const [selectedCurrency, setSelectedCurrency] = useState('EUR');

    // Toggle Theme
    const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

    return (
        <View style={[styles.container, isDarkTheme && styles.darkBackground]}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Header />

                {/* Theme Selection */}
                <View style={styles.settingsSection}>
                    <Text style={[styles.settingsTitle, isDarkTheme && styles.darkText]}>Theme</Text>
                    <View style={styles.settingItem}>
                        <Text style={[styles.settingLabel, isDarkTheme && styles.darkText]}>Dark Mode</Text>
                        <Switch
                            value={isDarkTheme}
                            onValueChange={toggleTheme}
                            thumbColor={isDarkTheme ? '#C67C4E' : '#E3E3E3'}
                        />
                    </View>
                </View>

                {/* Language Selection */}
                <View style={styles.settingsSection}>
                    <Text style={[styles.settingsTitle, isDarkTheme && styles.darkText]}>Language</Text>
                    <View style={styles.settingItem}>
                        <Text style={[styles.settingLabel, isDarkTheme && styles.darkText]}>Select Language</Text>
                        <Picker
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
                            style={[styles.picker, isDarkTheme && styles.darkPicker]}
                        >
                            <Picker.Item label="English" value="en" />
                            <Picker.Item label="Dutch" value="nl" />
                            <Picker.Item label="French" value="fr" />
                        </Picker>
                    </View>
                </View>

                {/* Currency Selection */}
                <View style={styles.settingsSection}>
                    <Text style={[styles.settingsTitle, isDarkTheme && styles.darkText]}>Currency</Text>
                    <View style={styles.settingItem}>
                        <Text style={[styles.settingLabel, isDarkTheme && styles.darkText]}>Select Currency</Text>
                        <Picker
                            selectedValue={selectedCurrency}
                            onValueChange={(itemValue) => setSelectedCurrency(itemValue)}
                            style={[styles.picker, isDarkTheme && styles.darkPicker]}
                        >
                            <Picker.Item label="Euro (€)" value="EUR" />
                            <Picker.Item label="US Dollar ($)" value="USD" />
                            <Picker.Item label="British Pound (£)" value="GBP" />
                        </Picker>
                    </View>
                </View>
            </ScrollView>
            <Footer />
        </View>
    );
};

// Header Component
const Header = () => (
    <View style={styles.header}>
        <Text style={styles.logo}>Kalymarym</Text>
        <View style={styles.navLinks}>
            <Text style={styles.navLink}>Home</Text>
            <Text style={styles.navLink}>Collection</Text>
        </View>
        <Icon name="user" size={20} color="#C67C4E" style={styles.icon} />
    </View>
);

// Footer Component
const Footer = () => (
    <View style={styles.footer}>
        <Text style={styles.footerText}>Kalymarym</Text>
        <Text style={styles.footerCopy}>2024 All Rights Reserved | Terms of Use</Text>
    </View>
);

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9F2ED' },
    scrollContainer: { flexGrow: 1 },

    header: { flexDirection: 'row', justifyContent: 'space-between', padding: 16, backgroundColor: '#313131' },
    logo: { color: '#EDD6C8', fontSize: 18 },
    navLinks: { flexDirection: 'row' },
    navLink: { color: '#E3E3E3', marginHorizontal: 10 },
    icon: { marginRight: 10 },

    settingsSection: { padding: 16, backgroundColor: '#EDD6C8', marginVertical: 10, borderRadius: 8 },
    settingsTitle: { fontSize: 20, fontWeight: 'bold', color: '#313131' },
    settingItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
    settingLabel: { color: '#313131', fontSize: 16 },
    picker: { width: 150, color: '#313131' },

    darkBackground: { backgroundColor: '#313131' },
    darkText: { color: '#EDD6C8' },
    darkPicker: { color: '#EDD6C8' },

    footer: { backgroundColor: '#313131', padding: 16, alignItems: 'center' },
    footerText: { color: '#EDD6C8', marginTop: 10 },
    footerCopy: { color: '#E3E3E3', fontSize: 12, marginTop: 10 },
});

export default SettingsScreen;
