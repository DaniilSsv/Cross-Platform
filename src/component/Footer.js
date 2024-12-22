import React from 'react';
import { View, Text } from 'react-native';

const Footer = ({styles}) => (
    <View style={styles.footer} accessibilityLabel='Footer'>
        <Text style={styles.footerText} accessibilityLabel="Kalymarym">Kalymarym</Text>
    </View>
);

export default Footer;
