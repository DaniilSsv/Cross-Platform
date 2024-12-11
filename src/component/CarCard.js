import React from 'react';
import { View, Image, Text } from 'react-native';

const CarCard = ({ styles, imageUri, title, subtitle }) => {
    return (
        <View >
            <Image source={{ uri: imageUri }} style={styles.carImage} />
            <Text style={styles.carDetails} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
            <Text style={styles.carSubDetails} numberOfLines={1} ellipsizeMode="tail">{subtitle}</Text>
        </View>
    );
};

export default CarCard;
