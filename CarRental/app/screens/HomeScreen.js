import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../ContextAPI';
import { Button } from 'react-native-web';

// Main Component
const HomeScreen = () => {
    const { isDarkTheme } = useTheme();

    // Apply theme colors conditionally
    const dynamicStyles = createStyles(isDarkTheme);

    return (
        <ScrollView style={dynamicStyles.container}>
            <Banner />
            <PopularCars />
            <Footer />
        </ScrollView>
    );
};

// Banner Component
const Banner = () => {
    const { isDarkTheme } = useTheme();
    const dynamicStyles = createStyles(isDarkTheme);
    
    return (
        <View style={dynamicStyles.banner}>
            <Image source={require('../assets/CarBanner.jpg')} style={dynamicStyles.bannerImage} />
            <View style={dynamicStyles.bannerTextContainer}>
                <Text style={dynamicStyles.bannerTitle}>Drive your dream car</Text>
                <Text style={dynamicStyles.bannerSubtitle}>Over 20 New Models</Text>
                <Button title='Rent now' color='#313131'/>
            </View>
        </View>
    );
};



// Popular Cars Section Component
const PopularCars = () => {
    const { isDarkTheme } = useTheme();
    const dynamicStyles = createStyles(isDarkTheme);
    
    return (
        <View style={dynamicStyles.popularSection}>
            <Text style={dynamicStyles.popularTitle}>MOST POPULAR</Text>
            <View style={dynamicStyles.popularCars}>
                {['path/to/car1', 'path/to/car2', 'path/to/car3', 'path/to/car4'].map((uri, index) => (
                    <CarCard key={index} imageUri={uri} title="Car Title" subtitle="Year - 2021 | KMS - 25000 | Fuel Type - Petrol" />
                ))}
            </View>
        </View>
    );
};

const CarCard = ({ imageUri, title, subtitle }) => {
    const { isDarkTheme } = useTheme();
    const dynamicStyles = createStyles(isDarkTheme);
    
    return (
        <View style={dynamicStyles.carCard}>
            <Image source={{ uri: imageUri }} style={dynamicStyles.carImage} />
            <Text style={dynamicStyles.carDetails}>{title}</Text>
            <Text style={dynamicStyles.carSubDetails}>{subtitle}</Text>
        </View>
    );
};

// Footer Component
const Footer = () => (
    <View style={styles.footer}>
        <Text style={styles.footerText}>Kalymarym</Text>
        <Text style={styles.footerCopy}>2024 All Rights Reserved | Terms of Use</Text>
    </View>
);

// Styles
const createStyles = (isDarkTheme) =>
    StyleSheet.create({
        container: { backgroundColor: isDarkTheme ? '#313131' : '#F9F2ED', flex: 1 },

        banner: { position: 'relative' },
        bannerImage: { width: '100%' },
        bannerTextContainer: { position: 'absolute', top: 50, left: 20 },
        bannerTitle: { color: 'white', fontSize: 35, fontWeight: 'bold' },
        bannerSubtitle: { color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 5 },

        popularSection: { padding: 16, backgroundColor: isDarkTheme ? '#313131' : '#F9F2ED' },
        popularTitle: { color: isDarkTheme ? '#EDD6C8' : '#313131', fontSize: 20, fontWeight: 'bold' },
        popularCars: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },

        carCard: { width: '48%', backgroundColor: isDarkTheme ? '#3E3E3E' : '#EDD6C8', marginVertical: 10, borderRadius: 8, padding: 10 },
        carImage: { width: '100%', height: 120, borderRadius: 8 },
        carDetails: { color: isDarkTheme ? '#EDD6C8' : '#313131', marginTop: 10 },
        carSubDetails: { color: isDarkTheme ? '#EDD6C8' : '#313131' },
        seeAllButton: { alignItems: 'center', marginTop: 10 },
        seeAllText: { color: '#C67C4E' },
    });

const styles = StyleSheet.create({
    footer: { backgroundColor: '#313131', padding: 16, alignItems: 'center' },
    footerText: { color: '#EDD6C8', marginTop: 10 },
    footerCopy: { color: '#EDD6C8', fontSize: 12, marginTop: 10 },
});

export default HomeScreen;
