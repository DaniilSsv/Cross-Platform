import React from "react";
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({styles, searchQuery, setSearchQuery}) => {
    return (
    <View style={styles.searchContainer}>
        <TextInput 
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder={"What are you looking for?"}
        placeholderTextColor={styles.searchBarInput}
        style={styles.searchInput} 
        accessible={true} accessibilityLabel="searchBar" accessibilityRole="search"/>
        <Icon name="search" style={styles.searchIcon} accessibilityLabel="search icon" />
    </View>
);
};

export default SearchBar;
