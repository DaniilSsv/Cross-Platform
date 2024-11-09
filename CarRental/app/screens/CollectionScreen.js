import React, { useState, useEffect} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../ContextAPI';
import cars from '../json/cars.json'; // collectie te vullen

// Collection Screen
const CollectionScreen = () => {
    const { isDarkTheme } = useTheme();
    const dynamicStyles = createStyles(isDarkTheme);

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
    <ScrollView style={dynamicStyles.container}>
        <CollectionSection cars={filteredCars} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <Footer />
    </ScrollView>
    );
};

// Searchbar Component
const SearchBar = ({searchQuery, setSearchQuery}) => {
    const { isDarkTheme } = useTheme();
    const dynamicStyles = createStyles(isDarkTheme);
    
    return (
        <View style={dynamicStyles.searchContainer}>
            <TextInput value={searchQuery} onChangeText={setSearchQuery} placeholder={"What are you looking for?"} placeholderTextColor={isDarkTheme ? "#E3E3E3" : "#313131"} style={dynamicStyles.searchInput} />
            <Icon name="search" size={20} color={isDarkTheme ? "#EDD6C8" : "#313131"} style={dynamicStyles.searchIcon} />
        </View>
    );
};

// Collection Section Component
const CollectionSection = ({cars, searchQuery, setSearchQuery}) => {
    const { isDarkTheme } = useTheme();
    const dynamicStyles = createStyles(isDarkTheme);

    return (
        <View style={dynamicStyles.collectionSection}>
            <Text style={dynamicStyles.collectionTitle}>OUR COLLECTION</Text>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

            <View style={dynamicStyles.collectionCars}>
                {cars.map((car, index) => (
                    {/* touchable maken en de detail scherm kunnen openen van die wagen */},
                    <CarCard key={index} imageUri={car.imageUri} title={car.title} subtitle={car.subtitle} />
                ))}
            </View>
        </View>
    );
};

// Car Card Component
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
}

// Footer Component
const Footer = () => (
    <View style={styles.footer}>
        <Text style={styles.footerText}>Kalymarym</Text>
        <Text style={styles.footerCopy}>2024 All Rights Reserved | Terms of Use</Text>
    </View>
);

const createStyles = (isDarkTheme) =>
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

        searchContainer: { flexDirection: 'row', marginTop: 20, backgroundColor: isDarkTheme ? '#555' : '#E3E3E3', borderRadius: 8 },
        searchInput: { flex: 1, padding: 8, color: isDarkTheme ? '#EDD6C8' : '#313131' },
        searchIcon: { padding: 10 },
    });

const styles = StyleSheet.create({
    footer: { padding: 16, backgroundColor: '#313131' },
    footerText: { color: '#EDD6C8', marginTop: 10 },
    footerCopy: { color: '#E3E3E3', fontSize: 12, marginTop: 10 },
});

export default CollectionScreen;
