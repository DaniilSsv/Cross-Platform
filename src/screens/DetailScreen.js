import React, { useEffect, useState } from 'react';
import { View, ScrollView ,ActivityIndicator, StyleSheet, Platform, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Theme
import { useTheme } from '../styles/theme/ContextAPI';
import colors from '../styles/theme/colors';

// Components
import CarDetailSection from '../component/CarDetailSection';
import DealerInfoSection from '../component/DealerInfoSection';
import RentalInfoSection from '../component/RentalInfoSection';

// Detail Screen
const DetailScreen = ({route}) => {
    const { car } = route.params;
    const carId = car.id;

    const navigation = useNavigation();

    const { isDarkTheme } = useTheme();
    const themeColors = isDarkTheme ? colors.darkTheme : colors.lightTheme; // Choose theme colors
    const styles = getStyles(themeColors);

    // State Management 
    const [carDetails, setCarDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch car details with dealer info
    useEffect(() => {
        const fetchCarDetails = async () => {
            try {
                const response = await fetch(`https://stormy-mountain-53708-efbddb5e7d01.herokuapp.com/api/cars/carWithDealer/${carId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCarDetails(data);
            } catch (error) {
                console.error('Error fetching car details:', error);
                alert('Unable to fetch car details. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchCarDetails();
    }, [carId]);

    // Handle rental creation
    const handleRental = async (rentalData) => {
        try {
            const response = await fetch(
                'https://stormy-mountain-53708-efbddb5e7d01.herokuapp.com/api/rentals',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(rentalData),
                }
            );
    
            if (!response.ok) {
                switch (response.status) {
                    case 409:
                        alert('These dates are already taken. Please view the rented dates using the button.');
                        return;
                    case 400:
                        alert('Please check your input fields. Dates cannot be in the past');
                        return;
                    default:
                        alert('Network response was not ok.');
                        return;
                }
            }
    
            alert('Rental confirmed!');
        } catch (error) {
            console.error('Error during rental confirmation:', error);
            alert('Unable to confirm rental. Please try again later.');
        }
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
                <TouchableOpacity style={styles.confirmButton} onPress={() => navigation.navigate('Rentals', { carId })} accessibilityLabel={`View rented dates for ${carDetails.model}`} accessibilityRole="button">
                    <Text style={styles.confirmText}>View Rented dates for this car</Text>
                </TouchableOpacity>
                <RentalInfoSection styles={styles} car={carDetails} onConfirmRental={handleRental}/>
            </ScrollView> 
        </View>
    );
};

const getStyles = (themeColors) => 
    StyleSheet.create({
        container: { flex: 1, backgroundColor: themeColors.primaryBackgroundColor },

        detailSection: {padding: 16,backgroundColor: themeColors.secondaryBackgroundColor,marginBottom: 10},
        carImage: { width: '100%', height: Platform.OS === 'web' ? 700 : 250, borderRadius: 8, marginBottom: 16 },
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

        loadingContainer: { justifyContent: 'center', alignItems: 'center', flex: 1 },
        error: { color: themeColors.textColor, fontSize: 18, textAlign: 'center', marginTop: 20 },
    });

export default DetailScreen;
