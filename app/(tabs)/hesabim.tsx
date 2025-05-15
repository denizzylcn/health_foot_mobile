import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';

export default function Hesabim() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    const loadUser = async () => {
      const storedEmail = await AsyncStorage.getItem('email');
      if (storedEmail) {
        setEmail(storedEmail);
      } else {
        router.replace('/auth/login'); // login yapılmadıysa yönlendir
      }
    };
    loadUser();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.clear();
    router.replace('/auth/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>👤 Hesap Bilgileri</Text>
      <Text style={styles.label}>📧 Email: {email}</Text>
      <Button title="Çıkış Yap" onPress={handleLogout} color="#c62828" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 16,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4a148c',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
});

