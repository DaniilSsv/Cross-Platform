import React, { useState } from 'react';
import { View, Text, Switch, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from '../styles/theme/ContextAPI';
import getStyles from '../styles/style/styles';

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

export default SettingsScreen;
