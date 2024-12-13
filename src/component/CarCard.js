import React from 'react';
import { View, Text, Image } from 'react-native';
import { ImagePathMap } from '../assets/ImagePathMap';

const CarCard = ({ styles, imageUri, title, subtitle, compact = false }) => {
    return (
        <View style={compact ? styles.compactCardContainer : styles.carCardContainer}>
            <Image style={compact ? styles.compactImage : styles.carImage} source={ImagePathMap[imageUri]}/>
            <View style={styles.carTextContainer}>
            <Text style={compact ? styles.compactCarDetails : styles.carDetails} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
            <Text style={compact ? styles.compactCarSubDetails : styles.carSubDetails} numberOfLines={1} ellipsizeMode="tail">{subtitle}</Text>
            </View>
        </View>
    );
};

export default CarCard;
