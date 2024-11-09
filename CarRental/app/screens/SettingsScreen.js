import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Picker, ScrollView } from 'react-native';
import { useTheme } from '../ContextAPI';

const SettingsScreen = () => {
    const { isDarkTheme, toggleTheme } = useTheme();
    const styles = getStyles(isDarkTheme);

    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const [selectedCurrency, setSelectedCurrency] = useState('EUR');

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>

                <View style={styles.settingsSection}>
                    <Text style={styles.settingsTitle}>Theme</Text>
                    <View style={styles.settingItem}>
                        <Text style={styles.settingLabel}>Dark Mode</Text>
                        <Switch
                            value={isDarkTheme}
                            onValueChange={toggleTheme}
                            thumbColor={isDarkTheme ? '#C67C4E' : '#E3E3E3'}
                        />
                    </View>
                </View>

                <View style={styles.settingsSection}>
                    <Text style={styles.settingsTitle}>Currency</Text>
                    <View style={styles.settingItem}>
                        <Text style={styles.settingLabel}>Select Currency</Text>
                        <Picker
                            selectedValue={selectedCurrency}
                            onValueChange={(itemValue) => setSelectedCurrency(itemValue)}
                            style={styles.picker}
                        >
                            <Picker.Item label="Euro (€)" value="EUR" />
                            <Picker.Item label="US Dollar ($)" value="USD" />
                            <Picker.Item label="British Pound (£)" value="GBP" />
                        </Picker>
                    </View>
                </View>
            </ScrollView>
            <Footer styles={styles} />
        </View>
    );
};

const Footer = ({ styles }) => (
    <View style={styles.footer}>
        <Text style={styles.footerText}>Kalymarym</Text>
        <Text style={styles.footerCopy}>2024 All Rights Reserved | Terms of Use</Text>
    </View>
);

const getStyles = (isDarkTheme) =>
    StyleSheet.create({
        container: { flex: 1, backgroundColor: isDarkTheme ? '#313131' : '#F9F2ED' },
        scrollContainer: { flexGrow: 1 },

        header: { flexDirection: 'row', justifyContent: 'space-between', padding: 16, backgroundColor: '#313131' },
        logo: { color: '#EDD6C8', fontSize: 18 },
        navLinks: { flexDirection: 'row' },
        navLink: { color: '#EDD6C8', marginHorizontal: 10 },
        icon: { marginRight: 10 },

        settingsSection: { padding: 16, marginVertical: 10, backgroundColor: isDarkTheme ? '#3E3E3E' : '#EDD6C8', borderRadius: 8 },
        settingsTitle: { color: isDarkTheme ? '#EDD6C8' : '#313131', fontSize: 20, fontWeight: 'bold' },
        settingItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
        settingLabel: { color: isDarkTheme ? '#EDD6C8' : '#313131', fontSize: 16 },
        picker: { width: 150, color: isDarkTheme ? '#EDD6C8' : '#313131', backgroundColor: isDarkTheme ? '#313131' : '#EDD6C8'},

        footer: { backgroundColor: '#313131', padding: 16, alignItems: 'center' },
        footerText: { color: '#EDD6C8', marginTop: 10 },
        footerCopy: { color: '#EDD6C8', fontSize: 12, marginTop: 10 },
    });

export default SettingsScreen;
