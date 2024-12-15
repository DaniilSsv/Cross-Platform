import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Theme
import { useTheme } from '../styles/theme/ContextAPI';

// Components
import SearchBar from '../component/SearchBar';
import Footer from '../component/Footer';
import CarCard from '../component/CarCard';

const CollectionScreen = () => {
    const { isDarkTheme } = useTheme();
    const styles = getStyles(isDarkTheme);

    const navigation = useNavigation();
    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCars, setFilteredCars] = useState([]);

    useEffect(() => {
        // Fetch cars from the API
        const fetchCars = async () => {
            try {
                const response = await fetch('https://stormy-mountain-53708-efbddb5e7d01.herokuapp.com/api/cars');
                if (!response.ok) {
                    throw new Error('Failed to fetch cars');
                }
                const data = await response.json();
                setCars(data);
                setFilteredCars(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCars();
    }, []);

    useEffect(() => {
        const filtered = cars.filter(car =>
            car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
            car.model.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCars(filtered);
    }, [searchQuery, cars]);

    if (isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color={textColor} />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.collectionHeader}>
                    <Text style={styles.collectionTitle}>OUR VEHICLES</Text>
                    <SearchBar
                        placeholder="Search for cars..."
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        styles={styles}
                    />
                </View>
                <View style={styles.collectionList}>
                {filteredCars.map((car) => (
                    <TouchableOpacity key={car.id} style={styles.carCardCollection} activeOpacity={0.8} onPress={() => navigation.navigate('CarDetails', { car })}>
                        <CarCard
                            key={car.id}
                            styles={styles}
                            imageUri={car.imageUri}
                            title={`${car.brand} | ${car.model}`}
                            subtitle={`${car.year} | ${car.power} hp | ${car.color}`}
                            compact={false}
                        />
                    </TouchableOpacity>
                ))}
                </View>
                <Footer styles={styles} />
            </ScrollView>
        </SafeAreaView>
    );
};

const getStyles = (isDarkTheme) => {
    const primaryBackgroundColor = isDarkTheme ? '#4D2C2C' : '#FFEBE8';
    const tertiaryBackgroundColor = isDarkTheme ? '#995353' : '#FFC4BA';
    const textColor = isDarkTheme ? '#FFFFFF' : '#1A1A1A';
    const secondaryTextColor = isDarkTheme ? '#E5E5E5' : '#4D4D4D';

    return StyleSheet.create({
        safeArea: {flex: 1,backgroundColor: primaryBackgroundColor},
        container: { backgroundColor: primaryBackgroundColor, flex: 1 },
        scrollViewContainer: { alignItems: 'center',},
        
        // Collection Section
        collectionSection: { padding: 16, backgroundColor: primaryBackgroundColor },
        collectionTitle: { color: textColor, fontSize: 20, fontWeight: 'bold' },
        collectionCars: { flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-between' },
        collectionList: {paddingHorizontal: 15},
        collectionHeader: {padding: 15},

        // Car Card
        carCardContainer: {borderRadius: 10,width: '100%',aligncars: 'center',},
        carCardCollection: { width: '100%', backgroundColor:  tertiaryBackgroundColor, marginVertical: 10, borderRadius: 8, padding: 10 },
        carImage: { width: '100%', height: 700, borderRadius: 8, },
        carDetails: { color: secondaryTextColor, marginTop: 10, textAlign: 'center', marginBottom: 5, fontWeight: 'bold' },
        carSubDetails: { color: secondaryTextColor, textAlign: 'center',},

        // Search Bar
        searchContainer: {flexDirection: 'row', aligncars: 'center', backgroundColor: isDarkTheme ? '#555' : '#CCC',
        borderRadius: 8, paddingHorizontal: 4, paddingVertical: 4, marginVertical: 10},
        searchInput: { flex: 1, color: '#313131', fontSize: 16, paddingVertical: 4},
        searchBarInput: { color: '#313131'},
        searchIcon: { marginRight: 5, fontSize: 20, color: textColor},
        
        footer: { backgroundColor: tertiaryBackgroundColor, padding: 16, aligncars: 'center' },
        footerText: { color: textColor, marginTop: 10 },
        footerCopy: { color: textColor, fontSize: 16, marginTop: 10 }
    });
};

export default CollectionScreen;