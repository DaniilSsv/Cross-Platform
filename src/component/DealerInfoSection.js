import React from 'react';
import { View, Text } from 'react-native';

const DealerInfoSection = ({ styles }) => (
    <View style={styles.dealerSection}>
        <Text style={styles.dealerTitle}>Dealer Information</Text>
        <Text style={styles.dealerName}>Dealer Name: Elite Motors</Text>
        <Text style={styles.dealerAddress}>Address: 123 Luxury Ave</Text>
        <Text style={styles.dealerCity}>City: Kortrijk, Belgium</Text>
        <Text style={styles.dealerContact}>Contact: +32 12 345 678</Text>
    </View>
);

export default DealerInfoSection;