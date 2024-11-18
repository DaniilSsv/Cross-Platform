import React from "react";
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({styles, searchQuery, setSearchQuery}) => {
    return (
    <View style={styles.searchContainer}>
        <TextInput value={searchQuery} onChangeText={setSearchQuery} placeholder={"What are you looking for?"} placeholderTextColor={styles.searchBarInput} style={styles.searchInput} />
        <Icon name="search" style={styles.searchIcon} />
    </View>
);
};

export default SearchBar;
