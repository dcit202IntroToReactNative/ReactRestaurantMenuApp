import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://via.placeholder.com/150' }}
        />
        <Text style={styles.name}>Portbell Shack</Text>
        <Text style={styles.bio}>The best you've ever tasted</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.sectionContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi.
        </Text>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <Text style={styles.sectionContent}>
          Email: john.doe@example.com{'\n'}
          Phone: +1 123-456-7890{'\n'}
          Address: 123 Main St, Anytown USA
        </Text>
      </View>
    </View>
  );
};

