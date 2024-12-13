import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

// Theme
import { useTheme } from '../styles/theme/ContextAPI';
import getStyles from '../styles/style/styles';

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

export default CollectionScreen;