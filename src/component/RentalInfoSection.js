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
            pickupLocation: `${car.dealerAddress} ${car.dealerCity} ${car.dealerPostcode}`,
            email: email,
        };

        onConfirmRental(rentalData);
    };

    return (
        <View style={styles.rentalSection}>
            <Text style={styles.rentalTitle} accessibilityLabel="Rent this Car">Rent this Car</Text>

            {/* Rental Price */}
            <View style={styles.rentalRow}>
                <Text style={styles.label} accessibilityLabel="Label: Rental Price">Rental Price:</Text>
                <Text style={styles.price} accessibilityLabel="Rental Price: €500 per day">€500/day</Text>
            </View>

            {/* Date Selection */}
            <View style={styles.rentalRow}>
                <Text style={styles.label} accessibilityLabel="Label: Start Date">Start Date:</Text>
                <TouchableOpacity style={styles.dateInputTouchable} onPress={() => setStartPickerVisible(true)} accessibilityRole="button" accessibilityLabel="Select Start Date">
                    <Text style={styles.dateInputText}>
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
                    accessibilityLabel="Start date picker"
                />
            </View>

            <View style={styles.rentalRow}>
                <Text style={styles.label} accessibilityLabel="Label: End Date">End Date:</Text>
                <TouchableOpacity style={styles.dateInputTouchable} onPress={() => setEndPickerVisible(true)} accessibilityRole="button" accessibilityLabel="Select End Date">
                    <Text style={styles.dateInputText}>
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
                    accessibilityLabel="End date picker"
                />
            </View>

            {/* Location */}
            <View style={styles.rentalRow}>
                <Text style={styles.label} accessibilityLabel="Label: Pickup Location">Pickup Location:</Text>
                <Text style={styles.location} accessibilityLabel={`Location: ${car.dealerAddress} ${car.dealerCity}`}>{car.dealerAddress} {car.dealerCity}</Text>
            </View>

            {/* Deposit */}
            <View style={styles.rentalRow}>
                <Text style={styles.label} accessibilityLabel="Label: Deposit">Deposit:</Text>
                <Text style={styles.deposit} accessibilityLabel="Deposit: €100">€1000</Text>
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
                    accessibilityLabel="Email input"
                    accessibilityHint="Enter your email address for rental confirmation"
                />
            </View>

            {/* Confirm Button */}
            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm} accessibilityRole="button" accessibilityLabel="Confirm Rental">
                <Text style={styles.confirmText}>Confirm Rental</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RentalInfoSection;
