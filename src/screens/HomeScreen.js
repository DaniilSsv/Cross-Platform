import React from 'react';
import { View, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { useTheme } from '../styles/theme/ContextAPI';
import getStyles from '../styles/style/styles';

// Components
import Banner from '../component/Banner'
import PopularCars from '../component/PopularCars';
import Footer from '../component/Footer';

// Main Component
const HomeScreen = () => {
    const { isDarkTheme } = useTheme();
    const styles = getStyles(isDarkTheme);
    
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar/>
            <ScrollView style={styles.container}>
                <View>
                    <Banner styles={styles}/>
                    <PopularCars styles={styles}/>
                    <Footer styles={styles} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
