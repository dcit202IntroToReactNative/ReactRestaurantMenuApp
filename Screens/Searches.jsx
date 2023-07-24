import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const Searches = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Implement your search functionality here
    console.log(`Searching for ${searchQuery}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Searches</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        onSubmitEditing={handleSearch}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
});

export default Searches;