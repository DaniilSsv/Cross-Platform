import React, { useState } from 'react';
import { View, Text, Switch, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// Theme
import colors from '../styles/theme/colors';

// Context
import { useTheme } from '../styles/theme/ContextAPI';
import { useCurrency } from '../context/CurrencyContext';

const SettingsScreen = () => {
    const { isDarkTheme, toggleTheme } = useTheme();
    const themeColors = isDarkTheme ? colors.darkTheme : colors.lightTheme;
    const styles = getStyles(themeColors);

    const {currency, setCurrency} = useCurrency();

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>

                <View style={styles.settingsSection}>
                    <Text style={styles.settingsTitle} accessibilityRole="header">Theme</Text>
                    <View style={styles.settingItem}>
                        <Text style={styles.settingLabel}>Dark Mode</Text>
                        <Switch
                            value={isDarkTheme}
                            onValueChange={toggleTheme}
                            thumbColor={isDarkTheme ? '#C67C4E' : '#E3E3E3'}
                            accessibilityLabel="Toggle dark mode on or off"
                        />
                    </View>
                </View>

                <View style={styles.settingsSection}>
                    <Text style={styles.settingsTitle} accessibilityRole="header">Currency</Text>
                    <View style={styles.settingItem}>
                        <Text style={styles.settingLabel}>Select Currency</Text>
                        <Picker
                            selectedValue={currency}
                            onValueChange={(itemValue) => setCurrency(itemValue)}
                            style={styles.picker}
                            accessibilityLabel="Choose your preffered currency"
                        >
                            <Picker.Item label="Euro (€)" value="EUR" />
                            <Picker.Item label="US Dollar ($)" value="USD" />
                            <Picker.Item label="British Pound (£)" value="GBP" />
                        </Picker>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const getStyles = (themeColors) =>
    StyleSheet.create({
        container: { flex: 1, backgroundColor: themeColors.primaryBackgroundColor },
        scrollContainer: { flexGrow: 1 },

        settingsSection: { padding: 16, marginVertical: 10, backgroundColor: themeColors.secondaryBackgroundColor, borderRadius: 8 },
        settingsTitle: { color: themeColors.textColor, fontSize: 20, fontWeight: 'bold' },
        settingItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
        settingLabel: { color: themeColors.textColor, fontSize: 18 },
        picker: { width: 150, color: themeColors.textColor, backgroundColor: themeColors.primaryBackgroundColor},
    });

export default SettingsScreen;
