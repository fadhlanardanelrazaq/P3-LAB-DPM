import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validasi login sederhana
    if (email && password) {
      navigation.replace('Home'); // Navigasi ke halaman utama
    } else {
      alert('Silakan isi email dan password!');
    }
  };

  const handleForgotPassword = () => {
    alert('Gunakan fitur reset password untuk pemulihan akun.');
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://example.com/logo.png' }} // Ganti dengan link logo Anda
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to Bedelau Second</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Lupa password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    padding: 20,
    paddingTop: 50, 
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#3b5998',
    fontWeight: 'bold',
    marginBottom: 30, // Menambah jarak antara logo dan input
    textAlign: 'center', // Memastikan teks berada di tengah
  },
  input: {
    width: '100%',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#3b5998',
    paddingVertical: 12,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#3b5998',
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default LoginScreen;