import React from 'react';
import { View, Image, Text, Platform } from 'react-native';
import { ImagePathMap } from '../assets/ImagePathMap';

const CarDetailSection = ({ styles, carDealer }) => {
    return(
    <View style={styles.detailSection}>
        <Image source={ImagePathMap[carDealer.imageUri]} style={styles.carImage} accessibilityLabel={`Image of ${carDealer.brand} ${carDealer.model}`} accessibilityRole="image"/>
        <Text style={styles.carTitle} accessibilityLabel={`Car Model: ${carDealer.brand} ${carDealer.model}`}>Car Model: {carDealer.brand} {carDealer.model}</Text>
        <Text style={styles.carSpecs} accessibilityLabel={`Year: ${carDealer.year} | Power: ${carDealer.power} HP | Color: ${carDealer.color}`}>Year: {carDealer.year} | Power: {carDealer.power} HP | Color: {carDealer.color}</Text>
        <Text style={styles.carDescription} accessibilityLabel={`Car Description: ${carDealer.description}`}>{carDealer.description}</Text>
    </View>
)};

export default CarDetailSection;