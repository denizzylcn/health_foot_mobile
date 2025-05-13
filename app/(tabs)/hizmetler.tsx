import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import API from '../services/api'; // ← senin dizine göre ayarla
import { useRouter } from 'expo-router';

type Hizmet = {
  id: number;
  ad: string;
  aciklama: string;
};

export default function Hizmetler() {
  const [hizmetler, setHizmetler] = useState<Hizmet[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchHizmetler = async () => {
      try {
        const response = await API.get('/Hizmetler');
        setHizmetler(response.data);
        console.log("🔥 Gelen hizmetler:", response.data);
      } catch (error) {
        console.error('🚨 Hizmet çekilemedi:', error);
      }
    };

    fetchHizmetler();
  }, []);

  const renderItem = ({ item }: { item: Hizmet }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: '/(tabs)/hizmetler/[id]',
          params: { id: item.id.toString() },
        })
      }
    >
      <Text style={styles.hizmetAdi}>{item.ad}</Text>
      <Text style={styles.aciklama}>{item.aciklama}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hizmetlerimiz</Text>
      <FlatList
        data={hizmetler}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  list: { gap: 12 },
  row: { justifyContent: 'space-between' },
  card: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    margin: 5,
    minHeight: 100,
  },
  hizmetAdi: { fontSize: 16, fontWeight: 'bold' },
  aciklama: { fontSize: 12, marginTop: 4, color: '#555' },
});
