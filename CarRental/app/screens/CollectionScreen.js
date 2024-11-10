import React, { useState, useEffect} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../Context/ContextAPI';
import cars from '../json/cars.json'; // collectie te vullen

// Collection Screen
const CollectionScreen = () => {
    const { isDarkTheme } = useTheme();
    const styles = getStyles(isDarkTheme);

    //state
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCars, setFilteredCars] = useState(cars);

    //update list
    useEffect(() => {
        const filtered = cars.filter(car =>
            car.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            car.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCars(filtered);
    }, [searchQuery]);

    return (
        <View style={styles.container}>
            <View style={styles.collectionSection}>
                <Text style={styles.collectionTitle}>OUR VEHICLES</Text>
                <SearchBar styles={styles} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            </View>
            <ScrollView style={styles.container}>
                <CollectionSection styles={styles} cars={filteredCars} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                <Footer styles={styles} />
            </ScrollView>
        </View>
    );
};

// Searchbar Component
const SearchBar = ({styles, searchQuery, setSearchQuery}) => (
        <View style={styles.searchContainer}>
            <TextInput value={searchQuery} onChangeText={setSearchQuery} placeholder={"What are you looking for?"} placeholderTextColor={styles.searchBarInput} style={styles.searchInput} />
            <Icon name="search" style={styles.searchIcon} />
        </View>
    );

// Collection Section Component
const CollectionSection = ({styles, cars, searchQuery, setSearchQuery}) => {
    
    return (
        <View style={styles.collectionSection}>
            <View style={styles.collectionCars}>
                {cars.map((car, index) => (
                    {/* touchable maken en de detail scherm kunnen openen van die wagen */},
                    <CarCard styles={styles} key={index} imageUri={car.imageUri} title={car.title} subtitle={car.subtitle} />
                ))}
            </View>
        </View>
    );
};

// Car Card Component
const CarCard = ({styles, imageUri, title, subtitle }) => {
    
    return (
    <View style={styles.carCard}>
        <Image source={{ uri: imageUri }} style={styles.carImage} />
        <Text style={styles.carDetails}>{title}</Text>
        <Text style={styles.carSubDetails}>{subtitle}</Text>
    </View>
);
}

// Footer Component
const Footer = ({styles}) => (
    <View style={styles.footer}>
        <Text style={styles.footerText}>Kalymarym</Text>
        <Text style={styles.footerCopy}>2024 All Rights Reserved | Terms of Use</Text>
    </View>
);

const getStyles = (isDarkTheme) =>
    StyleSheet.create({
        container: { backgroundColor: isDarkTheme ? '#313131' : '#F9F2ED', flex: 1 },
        collectionSection: { padding: 16, backgroundColor: isDarkTheme ? '#313131' : '#F9F2ED' },
        collectionTitle: { color: isDarkTheme ? '#EDD6C8' : '#313131', fontSize: 20, fontWeight: 'bold' },
        collectionCars: { flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-between' },
        
        carCard: { width: '100%', backgroundColor: isDarkTheme ? '#3E3E3E' : '#EDD6C8', marginVertical: 10, borderRadius: 8, padding: 10 },
        carImage: { width: '100%', height: 120, borderRadius: 8 },
        carDetails: { color: isDarkTheme ? '#EDD6C8' : '#313131', marginTop: 10 },
        carSubDetails: { color: isDarkTheme ? '#EDD6C8' : '#313131' },
        seeAllButton: { alignItems: 'center', marginTop: 10 },
        seeAllText: { color: '#C67C4E' },

        searchBarInput: {color: isDarkTheme ? "#E3E3E3" : "#313131"},
        searchContainer: { flexDirection: 'row', marginTop: 20, backgroundColor: isDarkTheme ? '#555' : '#E3E3E3', borderRadius: 8 },
        searchInput: { flex: 1, padding: 8, color: isDarkTheme ? '#EDD6C8' : '#313131' },
        searchIcon: { padding: 10, size: 20, color: isDarkTheme ? "#EDD6C8" : "#313131" },
        
        footer: { backgroundColor: isDarkTheme ? '#3E3E3E' : '#EDD6C8', padding: 16, alignItems: 'center' },
        footerText: { color: isDarkTheme ? '#EDD6C8' : '#313131', marginTop: 10 },
        footerCopy: { color: isDarkTheme ? '#EDD6C8' : '#313131', fontSize: 12, marginTop: 10 },
    });

export default CollectionScreen;
