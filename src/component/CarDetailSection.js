import React from 'react';
import { View, Image, Text } from 'react-native';

const CarDetailSection = ({ styles }) => (
    <View style={styles.detailSection}>
        <Image source={{ uri: 'path/to/car-image.jpg' }} style={styles.carImage} />
        <Text style={styles.carTitle}>Car Model: Tesla Model S</Text>
        <Text style={styles.carSpecs}>Year: 2023 | Mileage: 10,000 km | Fuel Type: Electric</Text>
        <Text style={styles.carDescription}>
            The Tesla Model S is a sleek electric sedan with autopilot capabilities, a range of 370 miles per charge,
            and cutting-edge safety features. Ideal for both city and highway driving.
        </Text>
    </View>
);

export default CarDetailSection;