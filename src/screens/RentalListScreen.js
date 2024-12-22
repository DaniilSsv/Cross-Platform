import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useTheme } from '../styles/theme/ContextAPI';
import colors from '../styles/theme/colors';

const RentalListScreen = ({ route }) => {
    const { carId } = route.params;

    const { isDarkTheme } = useTheme();
    const themeColors = isDarkTheme ? colors.darkTheme : colors.lightTheme;
    const styles = getStyles(themeColors);

    const [rentals, setRentals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRentals = async () => {
            try {
                const response = await fetch('https://stormy-mountain-53708-efbddb5e7d01.herokuapp.com/api/rentals');
                if (!response.ok) throw new Error('Failed to fetch rentals');
                const data = await response.json();
                const filteredRentals = data.filter((rental) => rental.carId === carId);
                setRentals(filteredRentals);
            } catch (error) {
                console.error('Error fetching rentals:', error);
                alert('Unable to fetch rental details. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
    
        fetchRentals();
    }, [carId]);
    

    if (loading) {
        return (
           <View style={[styles.container, styles.loadingContainer]}>
               <ActivityIndicator size="large" color="#C67C4E" accessibilityLabel="Loading cars..."/>
            </View>
       );
    }

    if (rentals.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.error} accessibilityLabel="Not rented out">Not rented out.</Text>
            </View>
        );
    }

    const renderRentalItem = ({ item }) => (
        <View style={styles.rentalItem} accessibilityLabel={`Rented dates starting from: ${item.startDate} till ${item.endDate}`}>
            <Text style={styles.label}>Start Date: <Text style={styles.value}>{item.startDate}</Text></Text>
            <Text style={styles.label}>End Date: <Text style={styles.value}>{item.endDate}</Text></Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Rented dates for the chosen car</Text>
            <FlatList
                data={rentals}
                keyExtractor={(item) => item.id?.toString()}
                renderItem={renderRentalItem}
            />
        </View>
    );
};

const getStyles = (themeColors) =>
    StyleSheet.create({
        container: {flex: 1,backgroundColor: themeColors.primaryBackgroundColor,padding: 16,},
        header: {fontSize: 24,fontWeight: 'bold',color: themeColors.textColor,marginBottom: 10,},
        rentalItem: {backgroundColor: themeColors.secondaryBackgroundColor,padding: 12,borderRadius: 8,marginBottom: 10,},
        label: {fontWeight: 'bold',color: themeColors.textColor, fontSize:20},
        value: {fontWeight: 'normal',color: themeColors.secondaryTextColor,fontSize:16},
        noRentals: {textAlign: 'center',marginTop: 20,color: themeColors.textColor,},
        loadingContainer: {flex: 1,justifyContent: 'center',alignItems: 'center',},
        backButton: {backgroundColor: themeColors.highlightColor,padding: 12,borderRadius: 8,marginTop: 20,},
        backButtonText: {color: '#FFF',textAlign: 'center',fontWeight: 'bold',},
    });

export default RentalListScreen;
