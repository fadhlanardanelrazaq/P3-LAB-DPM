import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Samba', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbPobFi3ii3IFpKqcapQUL_nB1kBuxftY6CQ&s', category: 'BAJU', price: 'Rp 500.000' },
  { id: 2, name: 'Phantom', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWhZ1M70aOOQwJT0a_4nIUNaPanR-5nKkJkw&s', category: 'BAJU', price: 'Rp 300.000' },
  { id: 3, name: 'Skinny', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm4uPLlHzc1yAEq3sMmY3PBXmyjwHuzF1myQ&s', category: 'CELANA', price: 'Rp 1.000.000' },
  { id: 4, name: 'Cargo', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezAMKB77tFhijMt6OXklIaeGQmfO0OaGOyQ&s', category: 'CELANA', price: 'Rp 400.000' },
  { id: 5, name: 'Hannah Martin', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcJ9fES8SS6JhGAkugx4tNDRfxhGOgLcwHrA&s', category: 'JAM TANGAN', price: 'Rp 2.000.000' },
  { id: 6, name: 'Expedition', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ipua_erRMKBE-G3erqeRrzBsOs_CJ-svTg&s', category: 'JAM TANGAN', price: 'Rp 8.000.000' },
  { id: 7, name: 'Adidas', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2cuParxJTy-ia6IUMTbHgPIz4c88vk9wwg&s', category: 'SWEATER', price: 'Rp 5.000.000' },
  { id: 8, name: 'Nike', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0gFP5GeW7zS8UYRJSvq2eYXaMasyjCQfSXw&s', category: 'SWEATER', price: 'Rp 5.000.000' },
  { id: 9, name: 'Varcity', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGt3JzNSHWVkfIO9uBnKxfRfVD9HJxv5how&s', category: 'JAKET', price: 'Rp 500.000' },
  { id: 10, name: 'Gucci', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEHWg8FmTiLctLsNXzS2T59NaDSZQPXdnsBQ&s', category: 'JAKET', price: 'Rp 50.000.000' },
];

const HomeScreen = () => {
  const [category, setCategory] = useState('ALL');

  const filteredProducts = category === 'ALL'
    ? products
    : products.filter(product => product.category.toLowerCase() === category.toLowerCase());

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bedelau Second</Text>
      <View style={styles.nav}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.navContent}
        >
          {['ALL', 'JAKET', 'BAJU', 'CELANA', 'JAM TANGAN', 'SWEATER'].map(cat => (
            <TouchableOpacity 
              key={cat} 
              style={[styles.button, category === cat && styles.activeButton]}
              onPress={() => setCategory(cat)}
            >
              <Text style={[styles.buttonText, category === cat && styles.activeButtonText]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ScrollView contentContainerStyle={styles.productList}>
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            name={product.name} 
            imageUri={product.imageUri} 
            price={product.price} 
          />
        ))}
      </ScrollView>
      <Text style={styles.footer}># Beli jangan tak beli</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  header: {
    marginTop: 70,
    fontSize: 28,
    textAlign: 'center',
    marginVertical: 15,
    color: '#ffffff',
    fontWeight: '600',
    paddingVertical: 15,
    backgroundColor: '#4e54c8',
  },
  nav: {
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  navContent: {
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    backgroundColor: '#e1e1e1',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  activeButton: {
    backgroundColor: '#4e54c8',
  },
  buttonText: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
  },
  activeButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  productList: {
    paddingHorizontal: 10,
  },
  footer: {
    paddingVertical: 15,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e1e1e1',
    backgroundColor: '#f9f9f9',
  },
});

export default HomeScreen;
