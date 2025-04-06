import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { login } from '../../services/authService';



import { useState } from 'react';

export default function AuthIndex() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  
    const handleLogin = async () => {
      try {
        const response = await login({ email, password });
        console.log('API Giriş başarılı:', response);
        router.replace('/(tabs)');
      } catch (error: any) {
        console.error('API Giriş hatası:', error);
        Alert.alert("Hata", `Giriş başarısız: ${error.message}`);
      }
    };
    
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoş Geldiniz</Text>

      {/* E-posta ve Şifre */}
      <TextInput
        style={styles.input}
        placeholder="E-posta"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Giriş Yap */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>

      {/* Kayıt Ol */}
      <Link href="/auth/register" asChild>
        <TouchableOpacity style={[styles.button, styles.signupButton]}>
          <Text style={styles.signupText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 30,
    color: '#4B0082',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#6A1B9A',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  signupButton: {
    backgroundColor: '#EDE7F6',
  },
  signupText: {
    color: '#6A1B9A',
    textAlign: 'center',
    fontWeight: '700',
  },
});

