import React, { useEffect, useState }from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, FlatList, Text, ActivityIndicator, Alert } from 'react-native';

import CarCard from './CarCard';

const PopularCars = ({styles}) => {
    const navigation = useNavigation();
    const [cars, setCars] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await fetch('https://stormy-mountain-53708-efbddb5e7d01.herokuapp.com/api/cars/topCars');
                if (!response.ok) {
                    throw new Error('Failed to fetch cars data');
                }
                const data = await response.json();
                setCars(data);
            } catch (error) {
                Alert.alert('Error', error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCars();
    }, []);
    
    if (isLoading) {
        return (
            <View style={styles.popularSection}>
                <ActivityIndicator size="large" color="#C67C4E" />
            </View>
        );
    }

    return (
        <View>
            <Text style={styles.popularTitle}>MOST POPULAR</Text>
            <FlatList
                data={cars}
                numColumns={2} // Set number of columns to 2
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.popularGrid}
                renderItem={({ item }) => (
                    <View style={styles.popularCardWrapper}>
                        <CarCard
                            styles={styles}
                            imageUri={item.imageUri}
                            title={`${item.brand} | ${item.model}`}
                            subtitle={`${item.year} | ${item.power} hp | ${item.color}`}
                            compact={true} // Pass compact prop
                        />
                    </View>
                )}
            />
        </View>
    );
};

export default PopularCars;