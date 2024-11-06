import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Collection Screen
const CollectionScreen = () => (
    <ScrollView style={styles.container}>
        <Header />
        <CollectionSection />
        <Footer />
    </ScrollView>
);

// Collection Section Component
const CollectionSection = () => {
    const cars = [
        { imageUri: 'path/to/car1', title: 'Car 1', subtitle: 'Year - 2021 | KMS - 25000 | Fuel Type - Petrol' },
        { imageUri: 'path/to/car2', title: 'Car 2', subtitle: 'Year - 2020 | KMS - 15000 | Fuel Type - Diesel' },
        { imageUri: 'path/to/car3', title: 'Car 3', subtitle: 'Year - 2019 | KMS - 30000 | Fuel Type - Electric' },
        { imageUri: 'path/to/car4', title: 'Car 4', subtitle: 'Year - 2022 | KMS - 10000 | Fuel Type - Petrol' },
        { imageUri: 'path/to/car5', title: 'Car 5', subtitle: 'Year - 2023 | KMS - 5000 | Fuel Type - Electric' },
        { imageUri: 'path/to/car6', title: 'Car 6', subtitle: 'Year - 2018 | KMS - 40000 | Fuel Type - Petrol' },
        { imageUri: 'path/to/car7', title: 'Car 7', subtitle: 'Year - 2021 | KMS - 25000 | Fuel Type - Diesel' },
        { imageUri: 'path/to/car8', title: 'Car 8', subtitle: 'Year - 2019 | KMS - 27000 | Fuel Type - Electric' },
        { imageUri: 'path/to/car9', title: 'Car 9', subtitle: 'Year - 2020 | KMS - 15000 | Fuel Type - Petrol' },
        { imageUri: 'path/to/car10', title: 'Car 10', subtitle: 'Year - 2021 | KMS - 22000 | Fuel Type - Diesel' },
        { imageUri: 'path/to/car11', title: 'Car 11', subtitle: 'Year - 2022 | KMS - 10000 | Fuel Type - Electric' },
        { imageUri: 'path/to/car12', title: 'Car 12', subtitle: 'Year - 2023 | KMS - 3000 | Fuel Type - Petrol' },
        { imageUri: 'path/to/car13', title: 'Car 13', subtitle: 'Year - 2018 | KMS - 35000 | Fuel Type - Diesel' },
        { imageUri: 'path/to/car14', title: 'Car 14', subtitle: 'Year - 2021 | KMS - 18000 | Fuel Type - Electric' },
        { imageUri: 'path/to/car15', title: 'Car 15', subtitle: 'Year - 2019 | KMS - 22000 | Fuel Type - Petrol' },
        { imageUri: 'path/to/car16', title: 'Car 16', subtitle: 'Year - 2020 | KMS - 25000 | Fuel Type - Diesel' },
        { imageUri: 'path/to/car17', title: 'Car 17', subtitle: 'Year - 2021 | KMS - 12000 | Fuel Type - Electric' },
        { imageUri: 'path/to/car18', title: 'Car 18', subtitle: 'Year - 2022 | KMS - 7000 | Fuel Type - Petrol' },
        { imageUri: 'path/to/car19', title: 'Car 19', subtitle: 'Year - 2023 | KMS - 5000 | Fuel Type - Diesel' },
        { imageUri: 'path/to/car20', title: 'Car 20', subtitle: 'Year - 2019 | KMS - 35000 | Fuel Type - Electric' },
    ];

    return (
        <View style={styles.collectionSection}>
            <Text style={styles.collectionTitle}>OUR COLLECTION</Text>
            <View style={styles.collectionCars}>
                {cars.map((car, index) => (
                    <CarCard key={index} imageUri={car.imageUri} title={car.title} subtitle={car.subtitle} />
                ))}
            </View>
        </View>
    );
};

// Car Card Component
const CarCard = ({ imageUri, title, subtitle }) => (
    <View style={styles.carCard}>
        <Image source={{ uri: imageUri }} style={styles.carImage} />
        <Text style={styles.carDetails}>{title}</Text>
        <Text style={styles.carSubDetails}>{subtitle}</Text>
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

// Footer Component
const Footer = () => (
    <View style={styles.footer}>
        <Text style={styles.footerText}>Kalymarym</Text>
        <Text style={styles.footerCopy}>2024 All Rights Reserved | Terms of Use</Text>
    </View>
);

const styles = StyleSheet.create({
    container: { backgroundColor: '#F9F2ED', flex: 1 },
    collectionSection: { padding: 16, backgroundColor: '#313131' },
    collectionTitle: { color: '#EDD6C8', fontSize: 20, fontWeight: 'bold' },
    collectionCars: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
    carCard: { width: '48%', backgroundColor: '#EDD6C8', marginVertical: 10, borderRadius: 8, padding: 10 },
    carImage: { width: '100%', height: 120, borderRadius: 8 },
    carDetails: { color: '#313131', marginTop: 10 },
    carSubDetails: { color: '#313131' },
    seeAllButton: { alignItems: 'center', marginTop: 10 },
    seeAllText: { color: '#C67C4E' },
    header: { flexDirection: 'row', justifyContent: 'space-between', padding: 16, backgroundColor: '#313131' },
    logo: { color: '#EDD6C8', fontSize: 18 },
    navLinks: { flexDirection: 'row' },
    navLink: { color: '#E3E3E3', marginHorizontal: 10 },
    icon: { marginRight: 10 },
    footer: { padding: 16, backgroundColor: '#313131' },
    footerText: { color: '#EDD6C8', marginTop: 10 },
    footerCopy: { color: '#E3E3E3', fontSize: 12, marginTop: 10 },
});

export default CollectionScreen;
