import React, { useEffect, useState } from 'react';
import { View, ScrollView ,ActivityIndicator, Alert, StyleSheet} from 'react-native';

// Theme
import { useTheme } from '../styles/theme/ContextAPI';

// Components
import CarDetailSection from '../component/CarDetailSection';
import DealerInfoSection from '../component/DealerInfoSection';
import RentalInfoSection from '../component/RentalInfoSection';
import Footer from '../component/Footer';

// Detail Screen
const DetailScreen = ({route}) => {
    const { car } = route.params;
    carId = car.id;

    const { isDarkTheme } = useTheme();
    const styles = getStyles(isDarkTheme);

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
                Alert.alert('Error', 'Unable to fetch car details. Please try again later.');
            })
            .finally(() => setLoading(false));
    }, []);

    
    // Handle rental creation
    const handleRental = (rentalData) => {
        // Check if the dates are in the future or present
        const today = new Date();
        const startDate = new Date(rentalData.startDate);
        const endDate = new Date(rentalData.endDate);

        if (startDate < today || endDate < today) {
            Alert.alert('Invalid Date', 'Dates must be in the present or future.');
            return;
        }

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
                    Alert.alert('Error', 'These dates are already taken. Please choose another date.');
                    return;
                }
                if (response.status === 400) {
                    Alert.alert('Error', 'Bad request. Please check your input fields.');
                    return;
                } else {
                    Alert.alert('Error', 'Network response was not ok.');
                    return;
                }
            }
            Alert.alert('Success', 'Rental confirmed!');
        })
        .catch((error) => {
            Alert.alert('Error', 'Unable to confirm rental. Please try again later.');
        });
    };


    if (loading) {
        return (
            <View style={[styles.container, styles.loadingContainer]}>
                <ActivityIndicator size="large" color="#C67C4E" />
            </View>
        );
    }

    if (!carDetails) {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>No car data available.</Text>
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

const getStyles = (isDarkTheme) => {
    const primaryBackgroundColor = isDarkTheme ? '#313131' : '#F9F2ED';
    const secondaryBackgroundColor = isDarkTheme ? '#3E3E3E' : '#D9C2B4';
    const tertiaryBackgroundColor = isDarkTheme ? '#4A4A4A' : '#EDD6C8'; 
    const textColor = isDarkTheme ? '#EDD6C8' : '#313131';
    const secondaryTextColor = isDarkTheme ? '#E3E3E3' : '#555';
    const highlightColor = '#C67C4E';

    return StyleSheet.create({
        container: { flex: 1, backgroundColor: primaryBackgroundColor },

        detailSection: {padding: 16,backgroundColor: secondaryBackgroundColor,borderBottomWidth: 1,borderBottomColor: isDarkTheme ? '#555' : '#CCC',},
        carImage: { width: '100%', height: 200, borderRadius: 8, marginBottom: 16 },
        carTitle: { color: textColor, fontSize: 24, fontWeight: 'bold', marginTop: 10 },
        carSpecs: { color: textColor, fontSize: 16, marginTop: 5 },
        carDescription: { color: secondaryTextColor, marginTop: 10 },

        dealerSection: {padding: 16,backgroundColor: tertiaryBackgroundColor,marginVertical: 10,borderRadius: 8,},
        dealerTitle: { color: textColor, fontSize: 20, fontWeight: 'bold', marginBottom: 5 },
        dealerName: { color: secondaryTextColor, fontSize: 16 },
        dealerAddress: { color: secondaryTextColor, fontSize: 16 },
        dealerCity: { color: secondaryTextColor, fontSize: 16 },
        dealerContact: { color: secondaryTextColor, fontSize: 16 },

        rentalSection: {padding: 16,backgroundColor: secondaryBackgroundColor,marginTop: 10,borderRadius: 8,},
        rentalTitle: { color: textColor, fontSize: 20, fontWeight: 'bold' },
        rentalRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 },
        label: { color: secondaryTextColor, fontSize: 16 },
        price: { color: highlightColor, fontSize: 16, fontWeight: 'bold' },
        dateInputTouchable: {backgroundColor: '#F9F2ED',borderRadius: 8,borderWidth: 1,borderColor: '#C67C4E',paddingVertical: 10,paddingHorizontal: 12,justifyContent: 'center',},
        dateInputText: {color: '#313131',fontSize: 16,},
        dateInput: {backgroundColor: secondaryTextColor,color: '#313131',borderRadius: 8,padding: 8,width: '48%',},
        location: { color: highlightColor },
        deposit: { color: highlightColor, fontSize: 16, fontWeight: 'bold' },

        confirmButton: { backgroundColor: highlightColor, borderRadius: 8, padding: 12, marginTop: 10 },
        confirmText: { color: '#FFF', textAlign: 'center', fontWeight: 'bold' },

        footer: {backgroundColor: tertiaryBackgroundColor,padding: 16,alignItems: 'center',borderTopWidth: 1,borderTopColor: isDarkTheme ? '#555' : '#CCC',},
        footerText: { color: textColor, marginTop: 10 },
        footerCopy: { color: textColor, fontSize: 12, marginTop: 10 },

        loadingContainer: { justifyContent: 'center', alignItems: 'center', flex: 1 },
        error: { color: textColor, fontSize: 18, textAlign: 'center', marginTop: 20 },
    });
};

export default DetailScreen;
