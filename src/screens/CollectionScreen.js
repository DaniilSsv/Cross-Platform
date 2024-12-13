import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

// Theme
import { useTheme } from '../styles/theme/ContextAPI';

// Components
import SearchBar from '../component/SearchBar';
import Footer from '../component/Footer';
import CarCard from '../component/CarCard';

const CollectionScreen = () => {
    const { isDarkTheme } = useTheme();
    const styles = getStyles(isDarkTheme);

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
                <ActivityIndicator size="large" color={isDarkTheme ? '#EDD6C8' : '#313131'} />
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
                <View>
                {filteredCars.map((item) => (
                    <TouchableOpacity
                        key={item.id.toString()}
                        style={styles.carCardCollection}
                        activeOpacity={0.8}
                        onPress={() => console.log('Navigating with carId:', item.id)}
                    >
                        <CarCard
                            styles={styles}
                            imageUri={item.imageUri}
                            title={`${item.brand} | ${item.model}`}
                            subtitle={`${item.year} | ${item.power} hp | ${item.color}`}
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

const getStyles = (isDarkTheme) =>
    StyleSheet.create({
        container: { backgroundColor: isDarkTheme ? '#313131' : '#F9F2ED', flex: 1 },
        collectionSection: { padding: 16, backgroundColor: isDarkTheme ? '#313131' : '#F9F2ED' },
        collectionTitle: { color: isDarkTheme ? '#EDD6C8' : '#313131', fontSize: 20, fontWeight: 'bold' },
        collectionCars: { flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-between' },
        collectionList: { marginHorizontal: 16, padding: 16, borderRadius: 8},
            
        carCard: { width: '100%', backgroundColor: isDarkTheme ? '#3E3E3E' : '#EDD6C8', marginVertical: 10, borderRadius: 8, padding: 10 },
        carImage: { width: '100%', height: 120, borderRadius: 8 },
        carDetails: { color: isDarkTheme ? '#EDD6C8' : '#313131', marginTop: 10 },
        carSubDetails: { color: isDarkTheme ? '#EDD6C8' : '#313131' },

        searchContainer: {
        flexDirection: 'row', alignItems: 'center', backgroundColor: isDarkTheme ? '#555' : '#E3E3E3',
        borderRadius: 8, paddingHorizontal: 4, paddingVertical: 4, marginVertical: 10},
        searchInput: { flex: 1, color: isDarkTheme ? '#E3E3E3' : '#313131', fontSize: 16, paddingVertical: 4},
        searchBarInput: { color: isDarkTheme ? '#E3E3E3' : '#313131'},
        searchIcon: { marginRight: 5, fontSize: 20, color: isDarkTheme ? '#EDD6C8' : '#313131'},
        
        footer: { backgroundColor: isDarkTheme ? '#3E3E3E' : '#EDD6C8', padding: 16, alignItems: 'center' },
        footerText: { color: isDarkTheme ? '#EDD6C8' : '#313131', marginTop: 10 },
        footerCopy: { color: isDarkTheme ? '#EDD6C8' : '#313131', fontSize: 12, marginTop: 10 }
});

export default CollectionScreen;