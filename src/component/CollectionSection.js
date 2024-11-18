import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // For navigation
import CarCard from './CarCard';

const CollectionSection = ({ styles, cars }) => {
    const navigation = useNavigation(); // Navigation instance

    return (
        <View style={styles.collectionSection}>
            <View style={styles.collectionCars}>
                {cars.map((car, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={styles.carCard} 
                        activeOpacity={0.8} 
                        onPress={() => navigation.navigate('CarDetails', { car })}
                    >
                        <CarCard
                            styles={styles}
                            imageUri={car.imageUri}
                            title={car.title}
                            subtitle={`${car.year} | ${car.hp} hp | ${car.fuelType}`} // Match PopularCars formatting
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default CollectionSection;
