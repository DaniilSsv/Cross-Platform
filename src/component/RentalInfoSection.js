// RentalInfoSection Component
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const RentalInfoSection = ({ styles, car, onConfirmRental }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleConfirm = () => {
        const rentalData = {
            carId: car.carId,
            rentalPrice: 100, // Replace with dynamic price if needed
            startDate,
            endDate,
            deposit: 500, // Replace with dynamic deposit if needed
            pickupLocation: 'Kortrijk, Belgium',
            email: 'user@example.com', // Replace with user's email dynamically
        };
        onConfirmRental(rentalData);
    };

    return (
        <View style={styles.rentalSection}>
            <Text style={styles.rentalTitle}>Rent this Car</Text>

            {/* Rental Price */}
            <View style={styles.rentalRow}>
                <Text style={styles.label}>Rental Price:</Text>
                <Text style={styles.price}>€100/day</Text>
            </View>

            {/* Date Selection */}
            <View style={styles.rentalRow}>
                <Text style={styles.label}>Select Rental Dates:</Text>
                <TextInput
                    placeholder="Start Date"
                    style={styles.dateInput}
                    value={startDate}
                    onChangeText={setStartDate}
                />
                <TextInput
                    placeholder="End Date"
                    style={styles.dateInput}
                    value={endDate}
                    onChangeText={setEndDate}
                />
            </View>

            {/* Location */}
            <View style={styles.rentalRow}>
                <Text style={styles.label}>Pickup Location:</Text>
                <Text style={styles.location}>Kortrijk, Belgium</Text>
            </View>

            {/* Deposit */}
            <View style={styles.rentalRow}>
                <Text style={styles.label}>Deposit:</Text>
                <Text style={styles.deposit}>€500</Text>
            </View>

            {/* Confirm Button */}
            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                <Text style={styles.confirmText}>Confirm Rental</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RentalInfoSection;
