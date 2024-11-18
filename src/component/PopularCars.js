import React from 'react';
import popular from '../json/popular.json'
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Text } from 'react-native';

import CarCard from './CarCard';

const PopularCars = ({styles}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.popularSection}>
            <Text style={styles.popularTitle}>MOST POPULAR</Text>
            <View style={styles.popularCars}>
                {popular.map((car) => (
                    <TouchableOpacity key={car.id} style={styles.carCard} activeOpacity={0.8} onPress={() => navigation.navigate('CarDetails', { car })}>
                        <CarCard
                            key={car.id}
                            styles={styles}
                            imageUri={car.imageUri}
                            title={car.title}
                            subtitle={`${car.year} | ${car.hp} hp | ${car.fuelType}`}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default PopularCars;