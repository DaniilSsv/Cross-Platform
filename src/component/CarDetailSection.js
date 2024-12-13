import React from 'react';
import { View, Image, Text } from 'react-native';
import { ImagePathMap } from '../assets/ImagePathMap';

const CarDetailSection = ({ styles, carDealer }) => {    
    return(
    <View style={styles.detailSection}>
        <Image source={ImagePathMap[carDealer.imageUri]} style={styles.carImage} />
        <Text style={styles.carTitle}>Car Model: {carDealer.brand} {carDealer.model}</Text>
        <Text style={styles.carSpecs}>Year: {carDealer.year} | Power: {carDealer.power} HP | Color: {carDealer.color}</Text>
        <Text style={styles.carDescription}>{carDealer.description}</Text>
    </View>
)};

export default CarDetailSection;