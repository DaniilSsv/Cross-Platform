import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Picker, ScrollView } from 'react-native';
import { useTheme } from '../theme/ContextAPI';

//components
import Footer from '../component/Footer';

const SettingsScreen = () => {
    const { isDarkTheme, toggleTheme } = useTheme();
    const styles = getStyles(isDarkTheme);

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

const getStyles = (isDarkTheme) =>
    StyleSheet.create({
        container: { flex: 1, backgroundColor: isDarkTheme ? '#313131' : '#F9F2ED' },
        scrollContainer: { flexGrow: 1 },

        settingsSection: { padding: 16, marginVertical: 10, backgroundColor: isDarkTheme ? '#3E3E3E' : '#EDD6C8', borderRadius: 8 },
        settingsTitle: { color: isDarkTheme ? '#EDD6C8' : '#313131', fontSize: 20, fontWeight: 'bold' },
        settingItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
        settingLabel: { color: isDarkTheme ? '#EDD6C8' : '#313131', fontSize: 16 },
        picker: { width: 150, color: isDarkTheme ? '#EDD6C8' : '#313131', backgroundColor: isDarkTheme ? '#313131' : '#EDD6C8'},

        footer: { backgroundColor: isDarkTheme ? '#3E3E3E' : '#EDD6C8', padding: 16, alignItems: 'center' },
        footerText: { color: isDarkTheme ? '#EDD6C8' : '#313131', marginTop: 10 },
        footerCopy: { color: isDarkTheme ? '#EDD6C8' : '#313131', fontSize: 12, marginTop: 10 },
    });

export default SettingsScreen;
