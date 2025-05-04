
import { View, Text, StyleSheet } from 'react-native';

export default function Anasayfa() {
  return (
    <View style={styles.container}>
      <Text style={styles.baslik}>Hoş Geldiniz 👣</Text>
      {/* Buraya slider, duyuru, hizmetler vs. eklenebilir */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  baslik: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
