import React from 'react';
import { View, Text, Image } from 'react-native';
import { ImagePathMap } from '../assets/ImagePathMap';

const CarCard = ({ styles, imageUri, title, subtitle, compact = false }) => {
    return (
        <View style={compact ? styles.compactCardContainer : styles.carCardContainer} accessible={true} accessibilityRole="button" accessibilityLabel={`${title}, ${subtitle}`}>
            <Image style={compact ? styles.compactImage : styles.carImage} resizeMode='cover' source={ImagePathMap[imageUri]} accessible={true} accessibilityLabel={`Image of ${title}`}/>
            <View style={styles.carTextContainer}>
            <Text style={compact ? styles.compactCarDetails : styles.carDetails} numberOfLines={1} ellipsizeMode="tail" accessible={true} accessibilityLabel={title}>{title}</Text>
            <Text style={compact ? styles.compactCarSubDetails : styles.carSubDetails} numberOfLines={1} ellipsizeMode="tail" accessible={true} accessibilityLabel={subtitle}>{subtitle}</Text>
            </View>
        </View>
    );
};

export default CarCard;
