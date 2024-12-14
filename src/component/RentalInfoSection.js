// RentalInfoSection Component
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

const RentalInfoSection = ({ styles, car, onConfirmRental }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [isStartPickerVisible, setStartPickerVisible] = useState(false);
    const [isEndPickerVisible, setEndPickerVisible] = useState(false);

    const [email, setEmail] = useState('');

    const handleConfirm = () => {
        if (!startDate || !endDate || !email) {
            alert('Please fill in all fields before confirming.');
            return;
        }

        // Format dates to "YYYY-MM-DD"
        const formattedStartDate = startDate.toISOString().split('T')[0]; // "2024-12-13"
        const formattedEndDate = endDate.toISOString().split('T')[0]; // "2024-12-14"

        const rentalData = {
            carId: car.carId,
            rentalPrice: 100, // Replace with dynamic price if needed
            startDate: formattedStartDate, // Format dates properly
            endDate: formattedEndDate,
            deposit: 500, // Replace with dynamic deposit if needed
            pickupLocation: 'Kortrijk, Belgium',
            email: email,
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
                <Text style={styles.label}>Start Date:</Text>
                <TouchableOpacity onPress={() => setStartPickerVisible(true)}>
                    <Text style={styles.dateInput}>
                        {startDate ? startDate.toDateString() : 'Select Start Date'}
                    </Text>
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={isStartPickerVisible}
                    mode="date"
                    onConfirm={(date) => {
                        setStartDate(date);
                        setStartPickerVisible(false);
                    }}
                    onCancel={() => setStartPickerVisible(false)}
                />
            </View>

            <View style={styles.rentalRow}>
                <Text style={styles.label}>End Date:</Text>
                <TouchableOpacity onPress={() => setEndPickerVisible(true)}>
                    <Text style={styles.dateInput}>
                        {endDate ? endDate.toDateString() : 'Select End Date'}
                    </Text>
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={isEndPickerVisible}
                    mode="date"
                    onConfirm={(date) => {
                        setEndDate(date);
                        setEndPickerVisible(false);
                    }}
                    onCancel={() => setEndPickerVisible(false)}
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

            {/* User Email */}
            <View style={styles.rentalRow}>
                <Text style={styles.label}>Your Email:</Text>
                <TextInput
                    placeholder="Enter your email"
                    style={styles.dateInput}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType='email-address'
                />
            </View>

            {/* Confirm Button */}
            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                <Text style={styles.confirmText}>Confirm Rental</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RentalInfoSection;
