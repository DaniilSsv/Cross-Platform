import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../ContextAPI';

// Main Component
const HomeScreen = () => {
    const { isDarkTheme } = useTheme();

    // Apply theme colors conditionally
    const dynamicStyles = createStyles(isDarkTheme);

    return (
        <ScrollView style={dynamicStyles.container}>
            <Header />
            <Banner />
            <PopularCars />
            <RentCarSection
         />
            <Footer />
        </ScrollView>
    );
};

// Header Component
const Header = () => (
    <View style={styles.header}>
        <Text style={styles.logo}>Kalymarym</Text>
        <View style={styles.navLinks}>
            <Text style={styles.navLink}>Home</Text>
            <Text style={styles.navLink}>Collection</Text>
        </View>
        <Icon name="user" size={20} color="#C67C4E" style={styles.icon} />
    </View>
);

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
                <SearchBar />
            </View>
        </View>
    );
};

const SearchBar = () => {
    const { isDarkTheme } = useTheme();
    const dynamicStyles = createStyles(isDarkTheme);
    
    return (
        <View style={dynamicStyles.searchContainer}>
            <TextInput placeholder="What are you looking for?" placeholderTextColor={isDarkTheme ? "#E3E3E3" : "#313131"} style={dynamicStyles.searchInput} />
            <Icon name="search" size={20} color={isDarkTheme ? "#EDD6C8" : "#313131"} style={dynamicStyles.searchIcon} />
        </View>
    );
};

// Rent Car Section Component
const RentCarSection = () => {
    const { isDarkTheme } = useTheme();
    const dynamicStyles = createStyles(isDarkTheme);
    
    return (
        <View style={dynamicStyles.RentCarSection
        
        }>
            <Text style={dynamicStyles.rentTitle}>WANT TO RENT OUT YOUR CAR?</Text>
            <Text style={dynamicStyles.rentSubtitle}>Here is how you can do it in less than a minute</Text>
            <Image source={require('../assets/CarRent.jpeg')} style={dynamicStyles.rentImage} />
            <Text style={dynamicStyles.rentFeatures}>• Best Price{'\n'}• Instant Payment/delivery</Text>
            <TouchableOpacity style={dynamicStyles.knowMoreButton}>
                <Text style={dynamicStyles.knowMoreText}>RENT OUT</Text>
            </TouchableOpacity>
        </View>
    );
};

// Popular Cars Section Component
const PopularCars = () => {
    const { isDarkTheme } = useTheme();
    const dynamicStyles = createStyles(isDarkTheme);
    
    return (
        <View style={dynamicStyles.popularSection}>
            <Text style={dynamicStyles.popularTitle}>POPULAR</Text>
            <View style={dynamicStyles.popularCars}>
                {['path/to/car1', 'path/to/car2', 'path/to/car3', 'path/to/car4'].map((uri, index) => (
                    <CarCard key={index} imageUri={uri} title="Car Title" subtitle="Year - 2021 | KMS - 25000 | Fuel Type - Petrol" />
                ))}
            </View>
            <TouchableOpacity style={dynamicStyles.seeAllButton}>
                <Text style={dynamicStyles.seeAllText}>See All</Text>
            </TouchableOpacity>
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
        bannerTitle: { color: '#313131', fontSize: 35, fontWeight: 'bold' },
        bannerSubtitle: { color: '#313131', marginTop: 5 },
        
        searchContainer: { flexDirection: 'row', marginTop: 20, backgroundColor: isDarkTheme ? '#555' : '#E3E3E3', borderRadius: 8 },
        searchInput: { flex: 1, padding: 8, color: isDarkTheme ? '#EDD6C8' : '#313131' },
        searchIcon: { padding: 10 },

        RentCarSection
    : { padding: 16, backgroundColor: isDarkTheme ? '#313131' : '#F9F2ED' },
        rentTitle: { color: isDarkTheme ? '#EDD6C8' : '#313131', fontSize: 20, fontWeight: 'bold' },
        rentSubtitle: { color: isDarkTheme ? '#E3E3E3' : '#313131', marginVertical: 10 },
        rentImage: { width: '100%', borderRadius: 8, marginVertical: 10 },
        rentFeatures: { color: isDarkTheme ? '#EDD6C8' : '#313131' },
        knowMoreButton: { padding: 10, backgroundColor: '#C67C4E', borderRadius: 8, marginTop: 10 },
        knowMoreText: { color: '#FFF', textAlign: 'center' },

        popularSection: { padding: 16, backgroundColor: isDarkTheme ? '#313131' : '#F9F2ED' },
        popularTitle: { color: isDarkTheme ? '#EDD6C8' : '#313131', fontSize: 20, fontWeight: 'bold' },
        popularCars: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
        carCard: { width: '48%', backgroundColor: '#EDD6C8', marginVertical: 10, borderRadius: 8, padding: 10 },
        carImage: { width: '100%', height: 120, borderRadius: 8 },
        carDetails: { color: isDarkTheme ? '#313131' : '#313131', marginTop: 10 },
        carSubDetails: { color: isDarkTheme ? '#313131' : '#313131' },
        seeAllButton: { alignItems: 'center', marginTop: 10 },
        seeAllText: { color: '#C67C4E' },
    });

const styles = StyleSheet.create({
    header: { flexDirection: 'row', justifyContent: 'space-between', padding: 16, backgroundColor: '#313131' },
    logo: { color: '#EDD6C8', fontSize: 18 },
    navLinks: { flexDirection: 'row' },
    navLink: { color: '#E3E3E3', marginHorizontal: 10 },
    icon: { marginRight: 10 },

    footer: { padding: 16, backgroundColor: '#313131' },
    footerText: { color: '#EDD6C8', marginTop: 10 },
    footerCopy: { color: '#E3E3E3', fontSize: 12, marginTop: 10 },
});

export default HomeScreen;
