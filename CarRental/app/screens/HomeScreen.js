import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Main Component
const HomeScreen = () => (
    <ScrollView style={styles.container}>
        <Header />
        <Banner />
        <PopularCars />
        <SellCarSection />
        <Footer />
    </ScrollView>
);

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
const Banner = () => (
    <View style={styles.banner}>
        <Image source={require('../assets/CarBanner.jpg')} style={styles.bannerImage} />
        <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Drive your dream car</Text>
            <Text style={styles.bannerSubtitle}>Over 20 New Models</Text>
            <SearchBar />
        </View>
    </View>
);

const SearchBar = () => (
    <View style={styles.searchContainer}>
        <TextInput placeholder="What are you looking for?" style={styles.searchInput} />
        <Icon name="search" size={20} color="#313131" style={styles.searchIcon} />
    </View>
);

// Sell Car Section Component
const SellCarSection = () => (
    <View style={styles.sellCarSection}>
        <Text style={styles.sellTitle}>WANT TO RENT OUT YOUR CAR?</Text>
        <Text style={styles.sellSubtitle}>Here is how you can do it in less than a minute</Text>
        <Image source={require('../assets/CarRent.jpeg')} style={styles.sellImage} />
        <Text style={styles.sellFeatures}>• Best Price{'\n'}• Instant Payment/delivery</Text>
        <TouchableOpacity style={styles.knowMoreButton}>
            <Text style={styles.knowMoreText}>RENT OUT</Text>
        </TouchableOpacity>
    </View>
);

// Popular Cars Section Component
const PopularCars = () => (
    <View style={styles.popularSection}>
        <Text style={styles.popularTitle}>POPULAR</Text>
        <View style={styles.popularCars}>
            {['path/to/car1', 'path/to/car2', 'path/to/car3', 'path/to/car4'].map((uri, index) => (
                <CarCard key={index} imageUri={uri} title="Car Title" subtitle="Year - 2021 | KMS - 25000 | Fuel Type - Petrol" />
            ))}
        </View>
        <TouchableOpacity style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
    </View>
);

const CarCard = ({ imageUri, title, subtitle }) => (
    <View style={styles.carCard}>
        <Image source={{ uri: imageUri }} style={styles.carImage} />
        <Text style={styles.carDetails}>{title}</Text>
        <Text style={styles.carSubDetails}>{subtitle}</Text>
    </View>
);

// Footer Component
const Footer = () => (
    <View style={styles.footer}>
        <Text style={styles.footerText}>Kalymarym</Text>
        <Text style={styles.footerCopy}>2024 All Rights Reserved | Terms of Use</Text>
    </View>
);

// Styles
const styles = StyleSheet.create({
    container: { backgroundColor: '#F9F2ED', flex: 1 },
    header: { flexDirection: 'row', justifyContent: 'space-between', padding: 16, backgroundColor: '#313131' },
    logo: { color: '#EDD6C8', fontSize: 18 },
    navLinks: { flexDirection: 'row' },
    navLink: { color: '#E3E3E3', marginHorizontal: 10 },
    icon: { marginRight: 10 },

    banner: { position: 'relative' },
    bannerImage: { width: '100%' },
    bannerTextContainer: { position: 'absolute', top: 50, left: 20 },
    bannerTitle: { color: '#EDD6C8', fontSize: 24, fontWeight: 'bold' },
    bannerSubtitle: { color: '#EDD6C8', marginTop: 5 },
    searchContainer: { flexDirection: 'row', marginTop: 20, backgroundColor: '#E3E3E3', borderRadius: 8 },
    searchInput: { flex: 1, padding: 8 },
    searchIcon: { padding: 10 },

    sellCarSection: { padding: 16, backgroundColor: '#313131' },
    sellTitle: { color: '#EDD6C8', fontSize: 20, fontWeight: 'bold' },
    sellSubtitle: { color: '#E3E3E3', marginVertical: 10 },
    sellImage: { width: '100%', borderRadius: 8, marginVertical: 10 },
    sellFeatures: { color: '#EDD6C8' },
    knowMoreButton: { padding: 10, backgroundColor: '#C67C4E', borderRadius: 8, marginTop: 10 },
    knowMoreText: { color: '#FFF', textAlign: 'center' },

    popularSection: { padding: 16, backgroundColor: '#313131' },
    popularTitle: { color: '#EDD6C8', fontSize: 20, fontWeight: 'bold' },
    popularCars: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
    carCard: { width: '48%', backgroundColor: '#EDD6C8', marginVertical: 10, borderRadius: 8, padding: 10 },
    carImage: { width: '100%', height: 120, borderRadius: 8 },
    carDetails: { color: '#313131', marginTop: 10 },
    carSubDetails: { color: '#313131' },
    seeAllButton: { alignItems: 'center', marginTop: 10 },
    seeAllText: { color: '#C67C4E' },

    footer: { padding: 16, backgroundColor: '#313131' },
    footerText: { color: '#EDD6C8', marginTop: 10 },
    footerCopy: { color: '#E3E3E3', fontSize: 12, marginTop: 10 },
});

export default HomeScreen;
