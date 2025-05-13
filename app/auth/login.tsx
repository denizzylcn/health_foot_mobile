import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router'; // 🔄 router yerine useRouter
import { login } from '@/services/authService'; // ✅ Yol dışarıdaysa böyle olmalı

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // ✅ useRouter kullanımı düzeltildi

  const handleLogin = async () => {
    try {
      const user = await login({ email, password });
      if (user) {
        const token = await user.getIdToken();
        console.log('Giriş başarılı, token:', token);

        Alert.alert('Giriş başarılı!', '🎉 Hoş geldiniz!');
        router.replace('/(tabs)/anasayfa'); // 🌟 Doğrudan yönlendirme route'a
      }
    } catch (error: any) {
      console.log('Giriş hatası:', error);
      Alert.alert('Hata', error.message || 'Giriş yapılamadı.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş Yap</Text>
      <TextInput
        placeholder="E-posta"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Şifre"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Giriş Yap" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen; // ✅ Eksik olursa "missing default export" hatası verir

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
  },
});
