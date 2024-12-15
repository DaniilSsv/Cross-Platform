import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Theme
import { useTheme } from '../styles/theme/ContextAPI';
import colors from '../styles/theme/colors';

// Components
import SearchBar from '../component/SearchBar';
import Footer from '../component/Footer';
import CarCard from '../component/CarCard';

const CollectionScreen = () => {
    const { isDarkTheme } = useTheme();
    const themeColors = isDarkTheme ? colors.darkTheme : colors.lightTheme; // Choose theme colors
    const styles = getStyles(themeColors);

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
                <ActivityIndicator size="large" color={themeColors.textColor} accessibilityLabel="Loading cars..." />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.collectionHeader}>
                    <Text style={styles.collectionTitle} accessible={true} accessibilityLabel="Our Vehicles Section">OUR VEHICLES</Text>
                    <SearchBar
                        placeholder="Search for cars..."
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        styles={styles}
                        accessible={true}
                        accessibilityLabel="Search Bar"
                        accessibilityRole="search"
                    />
                </View>
                <View style={styles.collectionList}>
                {filteredCars.map((car) => (
                    <TouchableOpacity
                        key={car.id}
                        style={styles.carCardCollection}
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('CarDetails', { car })}
                        accessible={true}
                        accessibilityLabel={`View details for ${car.brand} ${car.model}`}
                        accessibilityRole="button"
                        >
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

const getStyles = (themeColors) => 
    StyleSheet.create({
        safeArea: {flex: 1,backgroundColor: themeColors.primaryBackgroundColor},
        container: { backgroundColor: themeColors.primaryBackgroundColor, flex: 1 },
        
        // Collection Section
        collectionSection: { padding: 16, backgroundColor: themeColors.primaryBackgroundColor },
        collectionTitle: { color: themeColors.textColor, fontSize: 20, fontWeight: 'bold' },
        collectionCars: { flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-between' },
        collectionList: {paddingHorizontal: 15},
        collectionHeader: {padding: 15},

        // Car Card
        carCardContainer: {borderRadius: 10,width: '100%',aligncars: 'center',},
        carCardCollection: { width: '100%', backgroundColor:  themeColors.tertiaryBackgroundColor, marginVertical: 10, borderRadius: 8, padding: 10 },
        carImage: { width: '100%', height: 700, borderRadius: 8, },
        carDetails: { color: themeColors.secondaryTextColor, marginTop: 10, textAlign: 'center', marginBottom: 5, fontWeight: 'bold' },
        carSubDetails: { color: themeColors.secondaryTextColor, textAlign: 'center',},

        // Search Bar
        searchContainer: {flexDirection: 'row', aligncars: 'center', backgroundColor: '#F9F2ED',
        borderRadius: 8, paddingHorizontal: 4, paddingVertical: 4, marginVertical: 10},
        searchInput: { flex: 1, color: '#313131', fontSize: 16, paddingVertical: 4},
        searchBarInput: { color: '#313131'},
        searchIcon: { marginRight: 5, fontSize: 20, color: '#1A1A1A'},
        
        footer: { backgroundColor: themeColors.tertiaryBackgroundColor, padding: 16, alignItems: 'center' },
        footerText: { color: themeColors.textColor, marginTop: 10,},
        footerCopy: { color: themeColors.textColor, fontSize: 16, marginTop: 10,}
    });

export default CollectionScreen;