import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'; // For iOS/Android
import DatePicker from 'react-datepicker'; // For Web
import "react-datepicker/dist/react-datepicker.css"; // CSS import for styling

import { useCurrency } from '../context/CurrencyContext';

const RentalInfoSection = ({ styles, car, onConfirmRental }) => {
    const [email, setEmail] = useState('');
    const [startDate, setStartDate] = useState(new Date()); // Default to today's date
    const [endDate, setEndDate] = useState(new Date()); // Default to today's date
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);

    const { currency } = useCurrency();

    const handleConfirm = () => {
        if (!startDate || !endDate || !email) {
            alert('Please fill in all fields before confirming.');
            return;
        }

        const today = new Date();

        const formattedStartDate = startDate.toISOString().split('T')[0]; // "2024-12-21"
        const formattedEndDate = endDate.toISOString().split('T')[0];

        if (formattedStartDate < today || formattedEndDate < today) {
            alert('Invalid Date', 'Dates must be in the present or future.');
            return;
        }

        const rentalData = {
            carId: car.carId,
            rentalPrice: 100, 
            startDate: startDate,
            endDate: endDate,
            deposit: 500,
            pickupLocation: `${car.dealerAddress} ${car.dealerCity} ${car.dealerPostcode}`,
            email: email,
        };

        onConfirmRental(rentalData);
    };

    // Handle Date change for Start and End Date Pickers (Mobile)
    const onStartDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || startDate;
        setShowStartDatePicker(false);
        setStartDate(currentDate);
    };

    const onEndDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || endDate;
        setShowEndDatePicker(false);
        setEndDate(currentDate);
    };

    return (
        <View style={styles.rentalSection}>
            <Text style={styles.rentalTitle} accessibilityRole="Header">Rent this Car</Text>

            {/* Rental Price */}
            <View style={styles.rentalRow}>
                <Text style={styles.label}>Rental Price:</Text>
                <Text style={styles.price} accessibilityLabel={`Rental Price is ${currency} 500 per day`}>{currency} 500/day</Text>
            </View>

            {/* Date Selection */}
            <View style={styles.rentalRow}>
                <Text style={styles.label}>Start Date:</Text>
                {Platform.OS === 'web' ? (
                    <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Select Start Date"
                    />
                ) : (
                    <TouchableOpacity 
                        style={styles.dateInputTouchable} 
                        onPress={() => setShowStartDatePicker(true)}
                        accessibilityRole="button"
                        accessibilityLabel="Select Start Date"
                    >
                        <Text style={styles.dateInputText}>
                            {startDate.toISOString().split('T')[0]}
                        </Text>
                    </TouchableOpacity>
                )}
                {showStartDatePicker && Platform.OS !== 'web' && (
                    <DateTimePicker
                        value={startDate}
                        mode="date"
                        display="default"
                        onChange={onStartDateChange}
                    />
                )}
            </View>

            <View style={styles.rentalRow}>
                <Text style={styles.label}>End Date:</Text>
                {Platform.OS === 'web' ? (
                    <DatePicker
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Select End Date"
                    />
                ) : (
                    <TouchableOpacity 
                        style={styles.dateInputTouchable} 
                        onPress={() => setShowEndDatePicker(true)}
                        accessibilityRole="button"
                        accessibilityLabel="Select End Date"
                    >
                        <Text style={styles.dateInputText}>
                            {endDate.toISOString().split('T')[0]}
                        </Text>
                    </TouchableOpacity>
                )}
                {showEndDatePicker && Platform.OS !== 'web' && (
                    <DateTimePicker
                        value={endDate}
                        mode="date"
                        display="default"
                        onChange={onEndDateChange}
                    />
                )}
            </View>

            {/* Location */}
            <View style={styles.rentalRow}>
                <Text style={styles.label}>Pickup Location:</Text>
                <Text style={styles.location} accessibilityLabel={`Location: ${car.dealerAddress} ${car.dealerCity}`}>
                    {car.dealerAddress} {car.dealerCity}
                </Text>
            </View>

            {/* Deposit */}
            <View style={styles.rentalRow}>
                <Text style={styles.label}>Deposit:</Text>
                <Text style={styles.deposit} accessibilityLabel={`Deposit: ${currency} 1000`}>{currency} 1000</Text>
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
                    accessibilityLabel="Email address"
                    accessibilityHint="Enter your email address for rental confirmation"
                />
            </View>

            {/* Confirm Button */}
            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm} accessibilityRole="button" accessibilityLabel="Confirm Rental" accessibilityHint="Press to confirm your rental booking">
                <Text style={styles.confirmText}>Confirm Rental</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RentalInfoSection;
