import React from 'react';
import { View, Text } from 'react-native';

const DealerInfoSection = ({ styles, carDealer}) => (
    <View style={styles.dealerSection}>
        <Text style={styles.dealerTitle}>Dealer Information</Text>
        <Text style={styles.dealerName}>Dealer Name: {carDealer.dealerName}</Text>
        <Text style={styles.dealerAddress}>Address: {carDealer.dealerAddress}</Text>
        <Text style={styles.dealerCity}>City: {carDealer.dealerCity}, {carDealer.dealerPostcode}</Text>
        <Text style={styles.dealerContact}>Contact: {carDealer.dealerPhone}</Text>
    </View>
);

export default DealerInfoSection;