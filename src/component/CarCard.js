import React from 'react';
import { View, Image, Text } from 'react-native';

const CarCard = ({ styles, imageUri, title, subtitle }) => {
    return (
        <View style={styles.carCard}>
            <Image source={{ uri: imageUri }} style={styles.carImage} />
            <Text style={styles.carDetails}>{title}</Text>
            <Text style={styles.carSubDetails}>{subtitle}</Text>
        </View>
    );
};

export default CarCard;
