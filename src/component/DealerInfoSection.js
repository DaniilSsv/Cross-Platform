import React from 'react';
import { View, Text } from 'react-native';

const DealerInfoSection = ({ styles, carDealer}) => (
    <View style={styles.dealerSection}>
        <Text style={styles.dealerTitle} accessibilityRole="header" accessibilityLabel={"Dealer information"} >Dealer Information</Text>
        <Text style={styles.dealerName} accessibilityLabel={`Dealer Name: ${carDealer.dealerName}`}>Dealer Name: {carDealer.dealerName}</Text>
        <Text style={styles.dealerAddress} accessibilityLabel={`Address: ${carDealer.dealerAddress}`}>Address: {carDealer.dealerAddress}</Text>
        <Text style={styles.dealerCity} accessibilityLabel={`City: ${carDealer.dealerCity}, ${carDealer.dealerPostcode}`}>City: {carDealer.dealerCity}, {carDealer.dealerPostcode}</Text>
        <Text style={styles.dealerContact} accessibilityLabel={`Contact: ${carDealer.dealerPhone}`}>Contact: {carDealer.dealerPhone}</Text>
    </View>
);

export default DealerInfoSection;