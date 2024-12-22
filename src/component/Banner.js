import React from 'react';
import { View, Image, Text } from 'react-native';

const Banner = ({styles}) => {
    return (
        <View style={styles.banner} accessible={true} accessibilityRole="header">
            <Image source={require('../assets/CarBanner.jpg')} style={styles.bannerImage} accessible={true} accessibilityLabel="Car banner showcasing a luxury car"/>
            <View style={styles.bannerTextContainer}>
                <Text style={styles.bannerTitle} accessible={true} accessibilityLabel="Drive your dream car">Drive your dream car</Text>
                <Text style={styles.bannerSubtitle} accessible={true} accessibilityLabel="Over 20 new models available">Over 20 New Models</Text>
            </View>
        </View>
    );
};

export default Banner;
