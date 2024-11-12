import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import popular from '../json/popular.json'
import { useTheme } from '../Context/ContextAPI';

// Main Component
const HomeScreen = () => {
    const { isDarkTheme } = useTheme();
    const styles = getStyles(isDarkTheme);
    
    return (
        <ScrollView style={styles.container}>
            <View>
                <Banner styles={styles}/>
                <PopularCars styles={styles}/>
                <Footer styles={styles} />
            </View>
        </ScrollView>
    );
};

// Banner Component
const Banner = ({styles}) => (
    <View style={styles.banner}>
        <Image source={require('../assets/CarBanner.jpg')} style={styles.bannerImage} />
        <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Drive your dream car</Text>
            <Text style={styles.bannerSubtitle}>Over 20 New Models</Text>
        </View>
    </View>
);

// Popular Cars Section Component
const PopularCars = ({styles}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.popularSection}>
            <Text style={styles.popularTitle}>MOST POPULAR</Text>
            <View style={styles.popularCars}>
                {popular.map((car) => (
                    <TouchableOpacity key={car.id} style={styles.carCard} activeOpacity={0.8} onPress={() => navigation.navigate('CarDetails', { car })}>
                        <CarCard
                            key={car.id}
                            styles={styles}
                            imageUri={car.imageUri}
                            title={car.title}
                            subtitle={`${car.year} | ${car.hp} hp | ${car.fuelType}`}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const CarCard = ({styles, imageUri, title, subtitle }) => {
    
    return (
        <View>
            <Image source={{ uri: imageUri }} style={styles.carImage} />
            <Text style={styles.carDetails}>{title}</Text>
            <Text style={styles.carSubDetails}>{subtitle}</Text>
        </View>
    );
};

// Footer Component
const Footer = ({styles}) => (
    <View style={styles.footer}>
        <Text style={styles.footerText}>Kalymarym</Text>
        <Text style={styles.footerCopy}>2024 All Rights Reserved | Terms of Use</Text>
    </View>
);

// Styles
const getStyles = (isDarkTheme) =>
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

        footer: { backgroundColor: isDarkTheme ? '#3E3E3E' : '#EDD6C8', padding: 16, alignItems: 'center' },
        footerText: { color: isDarkTheme ? '#EDD6C8' : '#313131', marginTop: 10 },
        footerCopy: { color: isDarkTheme ? '#EDD6C8' : '#313131', fontSize: 12, marginTop: 10 },
    });

export default HomeScreen;
