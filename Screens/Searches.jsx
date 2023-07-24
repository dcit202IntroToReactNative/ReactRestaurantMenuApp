import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const Searches = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Implementation of the search functionality
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

