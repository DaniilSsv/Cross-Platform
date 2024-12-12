import { StyleSheet } from 'react-native';

const getStyles = (isDarkTheme) => {
    const baseStyles = {
        safeArea: {
            flex: 1,
            backgroundColor: isDarkTheme ? '#313131' : '#F9F2ED',
        },
        container: {
            flex: 1,
            backgroundColor: isDarkTheme ? '#313131' : '#F9F2ED',
        },
        footer: {
            backgroundColor: isDarkTheme ? '#3E3E3E' : '#EDD6C8',
            padding: 16,
            alignItems: 'center',
        },
        footerText: {
            color: isDarkTheme ? '#EDD6C8' : '#313131',
            marginTop: 10,
        },
        footerCopy: {
            color: isDarkTheme ? '#EDD6C8' : '#313131',
            fontSize: 12,
            marginTop: 10,
        },
    };

    return StyleSheet.create({
        ...baseStyles,

        // Home Screen 
        banner: { position: 'relative' },
        bannerImage: { width: '100%' },
        bannerTextContainer: { position: 'absolute', top: 50, left: 20 },
        bannerTitle: { color: 'white', fontSize: 35, fontWeight: 'bold' },
        bannerSubtitle: { color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 5 },

        popularSection: { padding: 16 },
        popularTitle: { color: isDarkTheme ? '#EDD6C8' : '#313131', fontSize: 20, fontWeight: 'bold' },
        popularCars: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
        
        carCard: { width: '48%', backgroundColor: isDarkTheme ? '#3E3E3E' : '#EDD6C8', marginVertical: 10, borderRadius: 8, padding: 10 },
        carImage: { width: '100%', height: 120, borderRadius: 8 },
        carDetails: { color: isDarkTheme ? '#EDD6C8' : '#313131', marginTop: 10 },
        carSubDetails: { color: isDarkTheme ? '#EDD6C8' : '#313131' },

        seeAllButton: { alignItems: 'center', marginTop: 10 },
        seeAllText: { color: '#C67C4E' },

        // Detail Screen 
        detailSection: { padding: 16, backgroundColor: isDarkTheme ? '#3E3E3E' : '#EDD6C8' },
        carTitle: { color: '#313131', fontSize: 24, fontWeight: 'bold', marginTop: 10 },
        carSpecs: { color: '#313131', fontSize: 16, marginTop: 5 },
        carDescription: { color: '#313131', marginTop: 10 },

        dealerSection: { padding: 16, backgroundColor: isDarkTheme ? '#3E3E3E' : '#EDD6C8' },
        dealerTitle: { color: '#313131', fontSize: 20, fontWeight: 'bold', marginBottom: 5 },
        dealerContact: { color: '#313131', fontSize: 16 },
        dealerAddress: { color: '#313131', fontSize: 16 },
        dealerCity: { color: '#313131', fontSize: 16 },
        dealerName: { color: '#313131', fontSize: 16 },

        rentalSection: { padding: 16, backgroundColor: '#313131' },
        rentalTitle: { color: '#EDD6C8', fontSize: 20, fontWeight: 'bold' },
        rentalRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 },
        price: { color: '#C76C4E', fontSize: 16, fontWeight: 'bold'},
        dateInput: { backgroundColor: '#E3E3E3', color: '#313131', borderRadius: 8, padding: 8, width: '48%' },
        location: { color: '#C67C4E' },
        deposit: { color: '#C67C4E', fontSize: 16, fontWeight: 'bold' },
        label: { color: '#E3E3E3', fontSize: 16 },

        confirmButton: { backgroundColor: '#C67C4E', borderRadius: 8, padding: 12, marginTop: 10 },
        confirmText: { color: '#FFF', textAlign: 'center', fontWeight: 'bold' },

        // Collection Screen 
        collectionSection: { padding: 16, backgroundColor: isDarkTheme ? '#313131' : '#F9F2ED' },
        collectionTitle: { color: isDarkTheme ? '#EDD6C8' : '#313131', fontSize: 20, fontWeight: 'bold' },
        collectionCars: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'},
        collectionList: { marginHorizontal: 16, padding: 16, borderRadius: 8 },

        searchContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: isDarkTheme ? '#555' : '#E3E3E3',
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
            marginVertical: 10,
        },
        searchInput: { flex: 1, color: isDarkTheme ? '#E3E3E3' : '#313131', fontSize: 16, marginRight: 10 },
        searchBarInput: { color: isDarkTheme ? '#E3E3E3' : '#313131'},
        searchIcon: { marginRight: 5, fontSize: 20, color: isDarkTheme ? '#EDD6C8': '#313131'},
        carCardCollection: { width: '100%', backgroundColor: isDarkTheme ? '#3E3E3E' : '#EDD6C8', marginVertical: 10, borderRadius: 8, padding: 10 },

        // Settings Screen 
        scrollContainer: { flexGrow: 1},
        settingsSection: { padding: 16, marginVertical: 10, backgroundColor: isDarkTheme ? '#3E3E3E' : '#EDD6C8', borderRadius: 8 },
        settingsTitle: { color: isDarkTheme ? '#EDD6C8' : '#313131', fontSize: 20, fontWeight: 'bold' },
        settingItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
        settingLabel: { color: isDarkTheme ? '#EDD6C8' : '#313131', fontSize: 16 },
        picker: { color: isDarkTheme ? '#EDD6C8' : '#313131', backgroundColor: isDarkTheme ? '#313131' : '#EDD6C8' },
    });
};

export default getStyles;
