import React, { useEffect, useState }from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';

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
            <View style={styles.popularCars}>
                {cars.map((car) => (
                    <TouchableOpacity key={car.id} style={styles.carCard} activeOpacity={0.8} onPress={() => navigation.navigate('CarDetails', { car })}>
                        <CarCard
                            key={car.id}
                            styles={styles}
                            imageUri={car.imageUri}
                            title={`${car.brand} ${car.model}`}
                            subtitle={`${car.year} | ${car.power} hp | ${car.color}`}
                            compact={true}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default PopularCars;