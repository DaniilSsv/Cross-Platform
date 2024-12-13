import React, { useEffect, useState } from 'react';
import { View, ScrollView ,ActivityIndicator, Alert} from 'react-native';

// Theme
import { useTheme } from '../styles/theme/ContextAPI';
import getStyles from '../styles/style/styles';

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
                <RentalInfoSection styles={styles} car={carDetails}/>
                <Footer styles={styles} />
            </ScrollView> 
        </View>
    );
};

export default DetailScreen;
