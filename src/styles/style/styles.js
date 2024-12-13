import { StyleSheet } from 'react-native';

const getStyles = (isDarkTheme) => {
    const colors = {
        background: isDarkTheme ? '#313131' : '#F9F2ED',
        cardBackground: isDarkTheme ? '#414141' : '#FFFFFF',
        textPrimary: isDarkTheme ? '#EDD6C8' : '#313131',
        textSecondary: isDarkTheme ? '#E3E3E3' : '#757575',
        accent: '#C67C4E',
        shadow: '#000',
    };

    return StyleSheet.create({
        // Global Styles
        safeArea: {
            flex: 1,
            backgroundColor: colors.background,
        },
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },

        // Footer
        footer: {
            backgroundColor: isDarkTheme ? '#3E3E3E' : '#EDD6C8',
            padding: 16,
            alignItems: 'center',
        },
        footerText: {
            color: colors.textPrimary,
            marginTop: 10,
            fontSize: 14,
        },
        footerCopy: {
            color: colors.textPrimary,
            fontSize: 12,
            marginTop: 10,
        },

        // Home Screen

        // Banner
        banner: {
            position: 'relative',
        },
        bannerImage: {
            width: '100%',
            height: 400,
            resizeMode: 'cover',
        },
        bannerTextContainer: {
            position: 'absolute',
            top: 50,
            left: 20,
        },
        bannerTitle: {
            color: 'white',
            fontSize: 35,
            fontWeight: 'bold',
        },
        bannerSubtitle: {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 5,
        },

        // Popular Car Section
        popularGrid: {
            padding: 20,
            justifyContent: 'space-between',
        },
        popularTitle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: colors.accent,
            marginTop: 20,
            marginLeft: 20,
        },
        popularCars: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            padding: 15,
        },
        popularCardWrapper: {
            flex: 1,
            margin: 5,
        },

        // Car Cards
        carCardContainer: {
            backgroundColor: colors.cardBackground,
            borderRadius: 10,
            overflow: 'hidden',
            marginBottom: 20,
            shadowColor: colors.shadow,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 3,
        },
        cardImage: {
            width: '100%',
            height: 200,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
        },
        cardTextContainer: {
            padding: 15,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
        },
        carDetails: {
            fontSize: 16,
            fontWeight: 'bold',
            color: colors.textPrimary,
            textAlign: 'center',
        },
        carSubDetails: {
            fontSize: 14,
            color: colors.textSecondary,
            textAlign: 'center',
        },

        // Compact Cards
        carCard: {
            width: '48%',
            marginBottom: 10,
            marginLeft: 5,
        },
        compactCardContainer: {
            backgroundColor: colors.cardBackground,
            borderRadius: 10,
            overflow: 'hidden',
            width: '100%',
            alignItems: 'center',
        },
        compactImage: {
            width: '100%',
            height: 250,
            resizeMode: 'cover',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
        },
        compactCarDetails: {
            fontSize: 16,
            fontWeight: 'bold',
            color: colors.textPrimary,
            textAlign: 'center',
        },
        compactCarSubDetails: {
            fontSize: 14,
            color: colors.textSecondary,
            textAlign: 'center',
        },

        // Collection Screen
        collectionSection: {
            padding: 10,
            backgroundColor: colors.background,
        },
        collectionHeader: {
            marginBottom: 20,
            paddingHorizontal: 10,
        },
        collectionTitle: {
            fontSize: 22,
            fontWeight: 'bold',
            color: colors.textPrimary,
            marginBottom: 10,
        },
        carCardCollection: {
            marginVertical: 10,
            borderRadius: 10,
            overflow: 'hidden',
            backgroundColor: colors.cardBackground,
            shadowColor: colors.shadow,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
        },

        // Search Bar
        searchContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: isDarkTheme ? '#555' : '#E3E3E3',
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
            marginVertical: 10,
        },
        searchInput: {
            flex: 1,
            color: colors.textPrimary,
            fontSize: 16,
            marginRight: 10,
        },
        searchIcon: {
            marginRight: 5,
            fontSize: 20,
            color: colors.textPrimary,
        },

        // Detail Screen
        detailSection: {
            padding: 16,
            backgroundColor: isDarkTheme ? '#3E3E3E' : '#EDD6C8',
        },
        carTitle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: colors.textPrimary,
            marginTop: 10,
        },
        carSpecs: {
            fontSize: 16,
            color: colors.textPrimary,
            marginTop: 5,
        },
        carDescription: {
            color: colors.textSecondary,
            marginTop: 10,
        },

        // Settings Screen
        settingsSection: {
            padding: 16,
            marginVertical: 10,
            backgroundColor: isDarkTheme ? '#3E3E3E' : '#EDD6C8',
            borderRadius: 8,
        },
        settingsTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: colors.textPrimary,
        },
        settingItem: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
        },
        settingLabel: {
            fontSize: 16,
            color: colors.textPrimary,
        },
    });
};

export default getStyles;
