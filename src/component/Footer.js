import React from 'react';
import { View, Text } from 'react-native';

const Footer = ({styles}) => (
    <View style={styles.footer} accessibilityLabel='Footer'>
        <Text style={styles.footerText} accessibilityLabel="Kalymarym">Kalymarym</Text>
        <Text style={styles.footerCopy} accessibilityLabel="2024 All Rights Reserved | Terms of Use">2024 All Rights Reserved | Terms of Use</Text>
    </View>
);

export default Footer;
