import React from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';

const RentalInfoSection = ({ styles }) => (
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
            <TextInput placeholder="Start Date" style={styles.dateInput} />
            <TextInput placeholder="End Date" style={styles.dateInput} />
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
        <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmText}>Confirm Rental</Text>
        </TouchableOpacity>
    </View>
);

export default RentalInfoSection;