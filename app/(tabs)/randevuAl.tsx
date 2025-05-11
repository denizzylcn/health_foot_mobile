import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Randevu } from '../models/randevu';  // çünkü (tabs) klasöründen çıkıp models'e 1 seviye yukarı
import { RandevuService } from '../services/randevuService'; // doğruysa böyle kalmalı





export default function RandevuAl() {
  const [tarih, setTarih] = useState('');
  const [saat, setSaat] = useState('');
  const [aciklama, setAciklama] = useState('');

  const randevuOlustur = async () => {
    const veri: Randevu = {
      kullaniciId: 1, // örnek kullanıcı, gerçek ID'yi sonra dinamik yaparız
      tarih,
      saat,
      aciklama
    };

    try {
      await RandevuService.randevuAl(veri);
      Alert.alert('🎉 Başarılı', 'Randevu oluşturuldu!');
      setTarih('');
      setSaat('');
      setAciklama('');
    } catch (error) {
      console.error(error);
      Alert.alert('❌ Hata', 'Randevu oluşturulamadı!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tarih:</Text>
      <TextInput style={styles.input} value={tarih} onChangeText={setTarih} placeholder="YYYY-AA-GG" />

      <Text style={styles.label}>Saat:</Text>
      <TextInput style={styles.input} value={saat} onChangeText={setSaat} placeholder="10:30" />

      <Text style={styles.label}>Açıklama:</Text>
      <TextInput style={styles.input} value={aciklama} onChangeText={setAciklama} placeholder="Açıklama" />

      <Button title="Randevu Al" onPress={randevuOlustur} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 5,
  },
});

