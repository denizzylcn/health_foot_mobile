import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, Pressable, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

const services = [
  { title: 'Medikal Bakım', icon: 'medkit-outline' },
  { title: 'Nasır Temizliği', icon: 'hand-left-outline' },
  { title: 'Tırnak Batması', icon: 'walk-outline' },
  { title: 'Tırnak Mantar Tedavisi', icon: 'leaf-outline' },
  { title: 'Topuk Çatlağı Bakımı', icon: 'water-outline' },
];

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={[styles.container, { flexGrow: 1 }]}>
      {/* Logo */}
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />

      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.subHeading}>Elazığ’ın Önde Gelen</Text>
        <Text style={styles.mainHeading}>El ve Ayak Bakım Hizmetleri</Text>
        <Text style={styles.description}>
          Sağlığınız ve estetik beklentilerinizi karşılamak için buradayız. Uzman ekibimizle, en iyi bakımı deneyimleyin.
        </Text>
      </View>

      {/* Kartlar */}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="people-circle-outline" size={24} color="#6A1B9A" />
            <Text style={styles.cardTitle}>Uzman Destek</Text>
          </View>
          <Text style={styles.cardDesc}>
            Sorunlarınız uzmanlarımız tarafından incelenerek doğru süreç bilgisi verilir.
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="happy-outline" size={24} color="#6A1B9A" />
            <Text style={styles.cardTitle}>Güleryüzlü Hizmet</Text>
          </View>
          <Text style={styles.cardDesc}>
            Kontrol süreçlerinizde, güler yüzlü ve konforlu hizmetimizin rahatlığını yaşarsınız.
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="chatbubbles-outline" size={24} color="#6A1B9A" />
            <Text style={styles.cardTitle}>Bakım Sonrası Danışmanlık</Text>
          </View>
          <Text style={styles.cardDesc}>
            Uzmanlarımız tüm sürecinizi takip eder ve bakım sonrası tüm sorularınızı yanıtlar.
          </Text>
        </View>
      </View>

      {/* Hakkımızda */}
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>Hakkımızda</Text>
        <Text style={styles.aboutText}>
          Elazığ Ayak Bakım Merkezi olarak, deneyimli ekibimizle ayak ve el bakımında güvenilir hizmetler sunuyoruz.
          Müşteri memnuniyetini esas alıyor, modern tekniklerle sağlıklı ve estetik çözümler sağlıyoruz.
        </Text>
      </View>

      {/* Yatay Kaydırmalı Başlıca Hizmetler */}
      <View style={styles.servicesContainer}>
        <Text style={styles.sectionTitle}>Başlıca Hizmetlerimiz</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {services.map((item, index) => {
            const scale = useRef(new Animated.Value(1)).current;

            return (
              <Pressable
                key={index}
                onPressIn={() =>
                  Animated.spring(scale, { toValue: 1.05, useNativeDriver: true }).start()
                }
                onPressOut={() =>
                  Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start()
                }
                style={styles.serviceCardWrapper}
              >
                <Animated.View style={[styles.serviceCard, { transform: [{ scale }] }]}>
                  <Ionicons name={item.icon as any} size={28} color="#fff" />
                  <Text style={styles.serviceTitle}>{item.title}</Text>
                </Animated.View>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingBottom: 30,
    paddingTop: 40,
    minHeight: '100%',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginTop: 40,
  },
  banner: {
    backgroundColor: '#6A1B9A',
    width: windowWidth * 0.9,
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
  },
  subHeading: {
    color: '#E1BEE7',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  mainHeading: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  description: {
    color: '#EDE7F6',
    fontSize: 14,
    textAlign: 'center',
  },
  cardContainer: {
    width: windowWidth * 0.9,
    marginTop: 20,
    gap: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#4B0082',
    marginLeft: 8,
  },
  cardDesc: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  aboutContainer: {
    backgroundColor: '#6A1B9A',
    width: windowWidth * 0.9,
    borderRadius: 15,
    padding: 20,
    marginTop: 25,
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  aboutText: {
    color: '#EDE7F6',
    fontSize: 14,
    lineHeight: 20,
  },
  servicesContainer: {
    width: windowWidth,
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#4B0082',
    marginBottom: 15,
    marginLeft: 20,
  },
  serviceCardWrapper: {
    paddingHorizontal: 8,
  },
  serviceCard: {
    backgroundColor: '#6A1B9A',
    borderRadius: 12,
    padding: 20,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  serviceTitle: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
