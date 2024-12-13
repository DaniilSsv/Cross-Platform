import React from 'react';
import { View, Image, Text } from 'react-native';
import { imagePathMap } from '../assets/imagePathMap';

const CarDetailSection = ({ styles, carDealer }) => {    
    return(
    <View style={styles.detailSection}>
        <Image source={imagePathMap[carDealer.imageUri]} style={styles.carImage} />
        <Text style={styles.carTitle}>Car Model: {carDealer.brand} {carDealer.model}</Text>
        <Text style={styles.carSpecs}>Year: {carDealer.year} | Power: {carDealer.power} HP | Color: {carDealer.color}</Text>
        <Text style={styles.carDescription}>{carDealer.description}</Text>
    </View>
)};

export default CarDetailSection;