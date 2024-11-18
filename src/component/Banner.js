import React from 'react';
import { View, Image, Text } from 'react-native';

const Banner = ({styles}) => {
    return(
    <View style={styles.banner}>
        <Image source={require('../assets/CarBanner.jpg')} style={styles.bannerImage} />
        <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Drive your dream car</Text>
            <Text style={styles.bannerSubtitle}>Over 20 New Models</Text>
        </View>
    </View>
    );
};

export default Banner;