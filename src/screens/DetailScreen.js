import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Alert} from 'react-native';
import { useTheme } from '../theme/ContextAPI';

// Components
import CarDetailSection from '../component/CarDetailSection';
import DealerInfoSection from '../component/DealerInfoSection';
import RentalInfoSection from '../component/RentalInfoSection';
import Footer from '../component/Footer';
import { ScrollView } from 'react-native-web';

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
        fetch(`https://stormy-mountain-53708-efbddb5e7d01.herokuapp.com/api/rentals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(rentalData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                Alert.alert('Success', 'Rental confirmed!');
            })
            .catch((error) => {
                console.error('Error creating rental:', error);
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

    if (!carId) {
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
                <RentalInfoSection styles={styles} car={carDetails}/>
                <Footer styles={styles} />
            </ScrollView> 
        </View>
    );
};

const getStyles = (isDarkTheme) =>
    StyleSheet.create({
        container: { flex: 1, backgroundColor: '#F9F2ED' },

        detailSection: { padding: 16, backgroundColor: '#EDD6C8' },
        carImage: { width: '100%', height: 200, borderRadius: 8, marginBottom: 0 },
        carTitle: { color: '#313131', fontSize: 24, fontWeight: 'bold', marginTop: 10 },
        carSpecs: { color: '#313131', fontSize: 16, marginTop: 5 },
        carDescription: { color: '#313131', marginTop: 10 },

        dealerSection: { padding: 16, backgroundColor: '#F9F2ED', marginVertical: 10 },
        dealerTitle: { color: '#313131', fontSize: 20, fontWeight: 'bold', marginBottom: 5 },
        dealerName: { color: '#313131', fontSize: 16 },
        dealerAddress: { color: '#313131', fontSize: 16 },
        dealerCity: { color: '#313131', fontSize: 16 },
        dealerContact: { color: '#313131', fontSize: 16 },

        rentalSection: { padding: 16, backgroundColor: '#313131', marginTop: 0 },
        rentalTitle: { color: '#EDD6C8', fontSize: 20, fontWeight: 'bold' },
        rentalRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 },
        label: { color: '#E3E3E3', fontSize: 16 },
        price: { color: '#C67C4E', fontSize: 16, fontWeight: 'bold' },
        dateInput: { backgroundColor: '#E3E3E3', color: '#313131', borderRadius: 8, padding: 8, width: '48%' },
        location: { color: '#C67C4E' },
        deposit: { color: '#C67C4E', fontSize: 16, fontWeight: 'bold' },
        
        confirmButton: { backgroundColor: '#C67C4E', borderRadius: 8, padding: 12, marginTop: 10 },
        confirmText: { color: '#FFF', textAlign: 'center', fontWeight: 'bold' },

        footer: { backgroundColor: isDarkTheme ? '#3E3E3E' : '#EDD6C8', padding: 16, alignItems: 'center' },
        footerText: { color: isDarkTheme ? '#EDD6C8' : '#313131', marginTop: 10 },
        footerCopy: { color: isDarkTheme ? '#EDD6C8' : '#313131', fontSize: 12, marginTop: 10 },

        error: {
            fontSize: 16,
            color: 'red',
            textAlign: 'center',
            marginTop: 20,
        }        
    });

export default DetailScreen;
