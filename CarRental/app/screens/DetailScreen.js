import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Detail Screen
const DetailScreen = () => (
    <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Header />
            <CarDetailSection />
            <RentalInfoSection />
        </ScrollView>
        <Footer />
    </View>
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

// Car Detail Section Component
const CarDetailSection = () => (
    <View style={styles.detailSection}>
        <Image source={{ uri: 'path/to/car-image.jpg' }} style={styles.carImage} />
        <Text style={styles.carTitle}>Car Model: Tesla Model S</Text>
        <Text style={styles.carSpecs}>Year: 2023 | Mileage: 10,000 km | Fuel Type: Electric</Text>
        <Text style={styles.carDescription}>
            The Tesla Model S is a sleek electric sedan with autopilot capabilities, a range of 370 miles per charge,
            and cutting-edge safety features. Ideal for both city and highway driving.
        </Text>
    </View>
);

// Rental Info Section Component
const RentalInfoSection = () => (
    <View style={styles.rentalSection}>
        <Text style={styles.rentalTitle}>Rent this Car</Text>
        
        {/* Rental Price */}
        <View style={styles.rentalRow}>
            <Text style={styles.label}>Rental Price:</Text>
            <Text style={styles.price}>€100/day</Text>
        </View>
        
        {/* Date Selection */}
        <View style={styles.rentalRow}>
            <Text style={styles.label}>Select Rental Dates:</Text>
            <TextInput placeholder="Start Date" style={styles.dateInput} />
            <TextInput placeholder="End Date" style={styles.dateInput} />
        </View>
        
        {/* Location */}
        <View style={styles.rentalRow}>
            <Text style={styles.label}>Pickup Location:</Text>
            <Text style={styles.location}>Kortrijk, Belgium</Text>
        </View>

        {/* Deposit */}
        <View style={styles.rentalRow}>
            <Text style={styles.label}>Deposit:</Text>
            <Text style={styles.deposit}>€500</Text>
        </View>
        
        {/* Confirm Button */}
        <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmText}>Confirm Rental</Text>
        </TouchableOpacity>
    </View>
);

// Footer Component
const Footer = () => (
    <View style={styles.footer}>
        <Text style={styles.footerText}>Kalymarym</Text>
        <Text style={styles.footerCopy}>2024 All Rights Reserved | Terms of Use</Text>
    </View>
);

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9F2ED' },
    scrollContainer: { flexGrow: 1 },

    header: { flexDirection: 'row', justifyContent: 'space-between', padding: 16, backgroundColor: '#313131' },
    logo: { color: '#EDD6C8', fontSize: 18 },
    navLinks: { flexDirection: 'row' },
    navLink: { color: '#E3E3E3', marginHorizontal: 10 },
    icon: { marginRight: 10 },
    
    detailSection: { padding: 16, backgroundColor: '#EDD6C8' },
    carImage: { width: '100%', height: 200, borderRadius: 8, marginBottom: 0 },
    carTitle: { color: '#313131', fontSize: 24, fontWeight: 'bold', marginTop: 10 },
    carSpecs: { color: '#313131', fontSize: 16, marginTop: 5 },
    carDescription: { color: '#313131', marginTop: 10 },

    rentalSection: { padding: 16, backgroundColor: '#313131', marginTop: 0 },
    rentalTitle: { color: '#EDD6C8', fontSize: 20, fontWeight: 'bold' },
    rentalRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 },
    label: { color: '#E3E3E3', fontSize: 16 },
    price: { color: '#C67C4E', fontSize: 16, fontWeight: 'bold' },
    dateInput: { backgroundColor: '#E3E3E3', color: '#313131', borderRadius: 8, padding: 8, width: '48%' },
    location: { color: '#C67C4E' },
    deposit: { color: '#C67C4E', fontSize: 16, fontWeight: 'bold' },
    
    confirmButton: { backgroundColor: '#C67C4E', borderRadius: 8, padding: 12, marginTop: 10 },
    confirmText: { color: '#FFF', textAlign: 'center', fontWeight: 'bold' },

    footer: { backgroundColor: '#313131', padding: 16, alignItems: 'center' },
    footerText: { color: '#EDD6C8', marginTop: 10 },
    footerCopy: { color: '#E3E3E3', fontSize: 12, marginTop: 10 },
});

export default DetailScreen;
