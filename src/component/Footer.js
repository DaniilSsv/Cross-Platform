import React from 'react';
import { View, Text } from 'react-native';

const Footer = ({styles}) => (
    <View style={styles.footer} accessible={true}>
        <Text style={styles.footerText} accessible={true} accessibilityLabel="Kalymarym">Kalymarym</Text>
        <Text style={styles.footerCopy} accessible={true} accessibilityLabel="2024 All Rights Reserved | Terms of Use">2024 All Rights Reserved | Terms of Use</Text>
    </View>
);

export default Footer;
