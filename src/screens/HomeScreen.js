import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ContextAPI';
import Banner from '../component/Banner'
import PopularCars from '../component/PopularCars';
import Footer from '../component/Footer';

// Main Component
const HomeScreen = () => {
    const { isDarkTheme } = useTheme();
    const styles = getStyles(isDarkTheme);
    
    return (
        <ScrollView style={styles.container}>
            <View>
                <Banner styles={styles}/>
                <PopularCars styles={styles}/>
                <Footer styles={styles} />
            </View>
        </ScrollView>
    );
};

// Styles
const getStyles = (isDarkTheme) =>
    StyleSheet.create({
        container: { backgroundColor: isDarkTheme ? '#313131' : '#F9F2ED', flex: 1 },

        banner: { position: 'relative' },
        bannerImage: { width: '100%' },
        bannerTextContainer: { position: 'absolute', top: 50, left: 20 },
        bannerTitle: { color: 'white', fontSize: 35, fontWeight: 'bold' },
        bannerSubtitle: { color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 5 },
        
        popularSection: { padding: 16, backgroundColor: isDarkTheme ? '#313131' : '#F9F2ED' },
        popularTitle: { color: isDarkTheme ? '#EDD6C8' : '#313131', fontSize: 20, fontWeight: 'bold' },
        popularCars: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },

        carCard: { width: '48%', backgroundColor: isDarkTheme ? '#3E3E3E' : '#EDD6C8', marginVertical: 10, borderRadius: 8, padding: 10 },
        carImage: { width: '100%', height: 120, borderRadius: 8 },
        carDetails: { color: isDarkTheme ? '#EDD6C8' : '#313131', marginTop: 10 },
        carSubDetails: { color: isDarkTheme ? '#EDD6C8' : '#313131' },
        seeAllButton: { alignItems: 'center', marginTop: 10 },
        seeAllText: { color: '#C67C4E' },

        footer: { backgroundColor: isDarkTheme ? '#3E3E3E' : '#EDD6C8', padding: 16, alignItems: 'center' },
        footerText: { color: isDarkTheme ? '#EDD6C8' : '#313131', marginTop: 10 },
        footerCopy: { color: isDarkTheme ? '#EDD6C8' : '#313131', fontSize: 12, marginTop: 10 },
    });

export default HomeScreen;
