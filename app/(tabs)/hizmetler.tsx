import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import API from '../services/api'; // ✅ artık doğru path

type Hizmet = {
  id: number;
  ad: string;
  aciklama: string;
};

export default function Hizmetler() {
    const [hizmetler, setHizmetler] = useState<Hizmet[]>([]);

  
    useEffect(() => {
      const fetchHizmetler = async () => {
        try {
          const response = await API.get('/Hizmetler');
          setHizmetler(response.data);
          console.log('🔥 Gelen Hizmetler:', response.data); // ← BURAYA
        } catch (error) {
          console.error('Hizmet çekilemedi:', error);
        }
      };
  
      fetchHizmetler();
    }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hizmetlerimiz</Text>
      <FlatList
        data={hizmetler}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.hizmetAdi}>{item.ad}</Text>
            <Text>{item.aciklama}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  card: {
    backgroundColor: '#f1f1f1',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  hizmetAdi: { fontSize: 18, fontWeight: '600' },
});
