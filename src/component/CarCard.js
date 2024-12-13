import React from 'react';
import { View, Text } from 'react-native';
import ImageView from './Image';

const CarCard = ({ styles, imageUri, title, subtitle }) => {
    return (
        <View >
            <ImageView styles={styles} imageUri={imageUri}/>
            <Text style={styles.carDetails} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
            <Text style={styles.carSubDetails} numberOfLines={1} ellipsizeMode="tail">{subtitle}</Text>
        </View>
    );
};

export default CarCard;
