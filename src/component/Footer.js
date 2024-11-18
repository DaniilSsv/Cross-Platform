import React from 'react';
import { View, Text } from 'react-native';

const Footer = ({styles}) => (
    <View style={styles.footer}>
        <Text style={styles.footerText}>Kalymarym</Text>
        <Text style={styles.footerCopy}>2024 All Rights Reserved | Terms of Use</Text>
    </View>
);

export default Footer;