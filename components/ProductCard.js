// ProductCard.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = ({ name, imageUri, price }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default ProductCard;