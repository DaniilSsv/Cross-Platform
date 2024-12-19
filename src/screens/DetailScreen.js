import React, { useEffect, useState } from 'react';
import { View, ScrollView ,ActivityIndicator, StyleSheet, Platform} from 'react-native';

// Theme
import { useTheme } from '../styles/theme/ContextAPI';
import colors from '../styles/theme/colors';

// Components
import CarDetailSection from '../component/CarDetailSection';
import DealerInfoSection from '../component/DealerInfoSection';
import RentalInfoSection from '../component/RentalInfoSection';
import Footer from '../component/Footer';

// Detail Screen
const DetailScreen = ({route}) => {
    const { car } = route.params;
    const carId = car.id;

    const { isDarkTheme } = useTheme();
    const themeColors = isDarkTheme ? colors.darkTheme : colors.lightTheme; // Choose theme colors
    const styles = getStyles(themeColors);

    // State Management
    const [carDetails, setCarDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch car details with dealer info
    useEffect(() => {
        fetch(`https://stormy-mountain-53708-efbddb5e7d01.herokuapp.com/api/cars/carWithDealer/${carId}`) // Adjust the endpoint and ID as needed
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setCarDetails(data);
            })
            .catch((error) => {
                console.error('Error fetching car details:', error);
                alert('Error', 'Unable to fetch car details. Please try again later.');
            })
            .finally(() => setLoading(false));
    }, []);

    
    // Handle rental creation
    const handleRental = (rentalData) => {
        fetch(`https://stormy-mountain-53708-efbddb5e7d01.herokuapp.com/api/rentals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(rentalData),
        })
        // we willen geen error gooien in geval dat er iets verkeerd loopt. we controleren de response statusen die wij hebben en geven de nodige feedback weer in een alert
        .then((response) => {
            if (!response.ok) {
                if (response.status === 409) {
                    alert('These dates are already taken. Please choose another date.')
                    return;
                }
                if (response.status === 400) {
                    alert('Bad request. Please check your input fields.');
                    return;
                } else {
                    alert('Network response was not ok.');
                    return;
                }
            }
            alert('Rental confirmed!');
        })
        .catch((error) => {
            alert('Unable to confirm rental. Please try again later.');
        });
    };


    if (loading) {
        return (
            <View style={[styles.container, styles.loadingContainer]}>
                <ActivityIndicator size="large" color="#C67C4E" accessibilityLabel="Loading cars..."/>
            </View>
        );
    }

    if (!carDetails) {
        return (
            <View style={styles.container}>
                <Text style={styles.error} accessibilityLabel="No car data available">No car data available.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <CarDetailSection styles={styles} carDealer={carDetails}/>
                <DealerInfoSection styles={styles} carDealer={carDetails} />
                <RentalInfoSection styles={styles} car={carDetails} onConfirmRental={handleRental}/>
                <Footer styles={styles} />
            </ScrollView> 
        </View>
    );
};

const getStyles = (themeColors) => 
    StyleSheet.create({
        container: { flex: 1, backgroundColor: themeColors.primaryBackgroundColor },

        detailSection: {padding: 16,backgroundColor: themeColors.secondaryBackgroundColor,marginBottom: 10},
        carImage: { width: '100%', height: Platform.OS === 'web' ? 500 : 250, borderRadius: 8, marginBottom: 16 },
        carTitle: { color: themeColors.textColor, fontSize: 24, fontWeight: 'bold', marginTop: 10 },
        carSpecs: { color: themeColors.textColor, fontSize: 16, marginTop: 5 },
        carDescription: { color: themeColors.secondaryTextColor, marginTop: 10 },

        dealerSection: {padding: 16,backgroundColor: themeColors.tertiaryBackgroundColor,marginVertical: 10,borderRadius: 8,},
        dealerTitle: { color: themeColors.textColor, fontSize: 20, fontWeight: 'bold', marginBottom: 5 },
        dealerName: { color: themeColors.secondaryTextColor, fontSize: 16 },
        dealerAddress: { color: themeColors.secondaryTextColor, fontSize: 16 },
        dealerCity: { color: themeColors.secondaryTextColor, fontSize: 16 },
        dealerContact: { color: themeColors.secondaryTextColor, fontSize: 16 },

        rentalSection: {padding: 16,backgroundColor: themeColors.secondaryBackgroundColor,marginVertical: 10,borderRadius: 8,},
        rentalTitle: { color: themeColors.textColor, fontSize: 20, fontWeight: 'bold' },
        rentalRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8},
        label: { color: themeColors.secondaryTextColor, fontSize: 16 },
        price: { color: themeColors.highlightColor, fontSize: 16, fontWeight: 'bold' },
        dateInputTouchable: {backgroundColor: '#F9F2ED',borderRadius: 8,borderWidth: 1,borderColor: '#9E5C33',paddingVertical: 10,paddingHorizontal: 12,justifyContent: 'center',},
        dateInputText: {color: '#313131',fontSize: 16,},
        dateInput: {backgroundColor: '#F9F2ED',color: '#313131',borderRadius: 8,padding: 8,width: '48%',},
        location: { color: themeColors.highlightColor },
        deposit: { color: themeColors.highlightColor, fontSize: 16, fontWeight: 'bold' },

        confirmButton: { backgroundColor: themeColors.highlightColor, borderRadius: 8, padding: 12, marginTop: 10 },
        confirmText: { color: '#FFF', textAlign: 'center', fontWeight: 'bold' },

        footer: {backgroundColor: themeColors.tertiaryBackgroundColor,padding: 16,alignItems: 'center'},
        footerText: { color: themeColors.textColor, marginTop: 10 },
        footerCopy: { color: themeColors.textColor, fontSize: 16, marginTop: 10 },

        loadingContainer: { justifyContent: 'center', alignItems: 'center', flex: 1 },
        error: { color: themeColors.textColor, fontSize: 18, textAlign: 'center', marginTop: 20 },
    });

export default DetailScreen;
