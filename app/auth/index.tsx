import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { router, Link } from 'expo-router';

export default function AuthIndex() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoş Geldiniz</Text>

      {/* E-posta ve Şifre */}
      <TextInput
        style={styles.input}
        placeholder="E-posta"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        secureTextEntry
      />

      {/* Giriş Yap */}
      <Link href="/(tabs)" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
      </Link>

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
