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
        <Text style={styles.name}>Movenpick Restaurant</Text>
        <Text style={styles.bio}>For The Luxury Experience</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>About Us</Text>
        <Text style={styles.sectionContent}>
          We are a restaurant centered on giving you the best Experience with{"\n"}regard
          to cuisine. We want to give you an Experience that you would take with you{"\n"}
          wherever you go. Giving you dishes that taste better than home.
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 16,
  },
  body: {},
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default Profile;