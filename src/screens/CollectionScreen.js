import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// Theme
import { useTheme } from '../theme/ContextAPI';

import cars from '../json/cars.json';

// Replace `SearchBar` with a custom component or import a valid library component
import SearchBar from '../component/SearchBar';
import Footer from '../component/Footer';
import CollectionList from '../component/CollectionSection';

const CollectionScreen = () => {
    const { isDarkTheme } = useTheme();
    const styles = getStyles(isDarkTheme);

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCars, setFilteredCars] = useState(cars);

    useEffect(() => {
        const filtered = cars.filter(car =>
            car.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            car.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCars(filtered);
    }, [searchQuery]);

    return (
        <View style={styles.container}>
            <View style={styles.collectionList}>
                <Text style={styles.collectionTitle}>OUR VEHICLES</Text>
                <SearchBar 
                    placeholder="Search for cars..."
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    styles={styles}
                />
            </View>
            <ScrollView style={styles.container}>
                <CollectionList styles={styles} cars={filteredCars} />
                <Footer styles={styles} />
            </ScrollView>
        </View>
    );
};

const getStyles = (isDarkTheme) => StyleSheet.create({
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
