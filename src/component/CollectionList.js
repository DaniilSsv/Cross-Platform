import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // For navigation
import CarCard from './CarCard';

const CollectionList = ({ styles, cars }) => {
    const navigation = useNavigation(); // Navigation instance

    return (
        <View style={styles.collectionSection}>
            <View style={styles.collectionCars}>
                {cars.map((car, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={styles.carCard} 
                        activeOpacity={0.8} 
                        onPress={() => {
                            console.log('Navigating with carId:', car.id); 
                            navigation.navigate('CarDetails', { car })}
                        }
                    >
                        <CarCard
                            styles={styles}
                            imageUri={car.imageUri}
                            title={`${car.brand} | ${car.model} `}
                            subtitle={`${car.year} | ${car.power} hp | ${car.color}`} // Match PopularCars formatting
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default CollectionList;
