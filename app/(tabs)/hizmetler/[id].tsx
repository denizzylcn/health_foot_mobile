import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function HizmetDetay() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Hizmet Detay Sayfası</Text>
      <Text>ID: {id}</Text>
    </View>
  );
}
