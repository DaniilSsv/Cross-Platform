import React from 'react';
import { ScrollView, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

// Theme
import { useTheme } from '../styles/theme/ContextAPI';

// Components
import Banner from '../component/Banner';
import PopularCars from '../component/PopularCars';
import Footer from '../component/Footer';

// Main Component
const HomeScreen = () => {
    const { isDarkTheme } = useTheme();
    const styles = getStyles(isDarkTheme);
    
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar/>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
                <Banner styles={styles}/>
                <PopularCars styles={styles}/>
                <Footer styles={styles}/>
            </ScrollView>
        </SafeAreaView>
    );
};

const getStyles = (isDarkTheme) =>
    StyleSheet.create({
        container: { backgroundColor: isDarkTheme ? '#313131' : '#F9F2ED', flex: 1 },
        safeArea: {flex: 1, backgroundColor: isDarkTheme ? '#313131' : '#F9F2ED',},

        // Banner
        banner: { position: 'relative' },
        bannerImage: { width: '100%' },
        bannerTextContainer: { position: 'absolute', top: 50, left: 20 },
        bannerTitle: { color: 'white', fontSize: 35, fontWeight: 'bold' },
        bannerSubtitle: { color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 5 },
        
        // Popular Car Section
        popularGrid: {padding: 20,justifyContent: 'space-between',},
        popularTitle: {fontSize: 24,fontWeight: 'bold',color: isDarkTheme ? '#EDD6C8' : '#313131',marginTop: 20,marginLeft: 20,},
        popularCars: {flexDirection: 'row',flexWrap: 'wrap',justifyContent: 'space-between',padding: 15,},
        carCard: {width: '48%',marginBottom: 10,marginLeft: 5},

        // Car Cards
        compactCardContainer: {backgroundColor: isDarkTheme ? '#3E3E3E' : '#EDD6C8',borderRadius: 10,width: '100%',alignItems: 'center',},
        compactImage: {width: '100%',height: 300,resizeMode: 'cover',borderTopLeftRadius: 10,borderTopRightRadius: 10,},
        compactCarDetails: {fontSize: 18,fontWeight: 'bold',color: isDarkTheme ? '#EDD6C8' : '#313131',textAlign: 'center', marginTop: 10, marginBottom: 5},
        compactCarSubDetails: {fontSize: 16,color: isDarkTheme ? '#EDD6C8' : '#313131',textAlign: 'center',fontStyle: 'italic', marginBottom: 5},

        seeAllButton: { alignItems: 'center', marginTop: 10 },
        seeAllText: { color: '#C67C4E' },

        footer: { backgroundColor: isDarkTheme ? '#3E3E3E' : '#EDD6C8', padding: 16, alignItems: 'center' },
        footerText: { color: isDarkTheme ? '#EDD6C8' : '#313131', marginTop: 10 },
        footerCopy: { color: isDarkTheme ? '#EDD6C8' : '#313131', fontSize: 16, marginTop: 10 },
    });

export default HomeScreen;
