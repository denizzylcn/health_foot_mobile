import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const hizmetler = [
  { id: 1, title: 'Medikal Ayak Bakımı', image: require('../../../assets/images/medikal.png') },
  { id: 2, title: 'Nasır Temizliği', image: require('../../../assets/images/nasir.png') },
  { id: 3, title: 'Tırnak Batması', image: require('../../../assets/images/tirnak-batmasi.png') },
  { id: 4, title: 'Tırnak Mantar Tedavisi', image: require('../../../assets/images/mantar.png') },
  { id: 5, title: 'Topuk Çatlağı Bakımı', image: require('../../../assets/images/topuk.png') },
];

function Feature({ icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <View style={styles.feature}>
      <Ionicons name={icon} size={32} color="#0077b6" />
      <View style={styles.featureText}>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureDescription}>{description}</Text>
      </View>
    </View>
  );
}

export default function Anasayfa() {
  return (
    <ScrollView style={styles.container}>
      {/* Logo ve Başlık */}
      <View style={styles.header}>
        <Image source={require('../../../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.welcome}>Elazığ’ın Önde Gelen</Text>
        <Text style={styles.title}>El ve Ayak Bakım Hizmetleri</Text>
        <Text style={styles.subtitle}>
          Sağlığınızı ve estetik beklentilerinizi karşılamak için buradayız. Uzman ekibimizle, en iyi bakım deneyimini yaşayın.
        </Text>
      </View>

      {/* Hizmet Avantajları */}
      <View style={styles.features}>
        <Feature icon="person" title="Uzman Destek" description="Sorunlarınız uzmanlarımızca değerlendirilir ve süreç doğru şekilde planlanır." />
        <Feature icon="happy" title="Güler Yüz" description="Size daima güler yüzle ve anlayışla yaklaşan bir ekip sizleri bekliyor." />
        <Feature icon="leaf" title="Doğal Ürünler" description="Cilt sağlığınız için en kaliteli ve doğal ürünleri kullanıyoruz." />
      </View>

      {/* Hizmetler */}
      <View style={styles.servicesSection}>
        <Text style={styles.servicesTitle}>Başlıca Hizmetlerimiz</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {hizmetler.map((item) => (
            <View key={item.id} style={styles.serviceCard}>
              <Image source={item.image} style={styles.serviceImage} />
              <Text style={styles.serviceTitle}>{item.title}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Müşteri Yorumları */}
      <View style={styles.testimonialsSection}>
        <Text style={styles.testimonialsTitle}>Müşteri Yorumları</Text>

        <View style={styles.testimonial}>
          <Text style={styles.testimonialText}>
            “İlk defa bu kadar profesyonel ve hijyenik bir bakım hizmeti aldım. Ayaklarımdaki rahatlamayı anlatamam!”
          </Text>
          <Text style={styles.testimonialAuthor}>– Ayşe K.</Text>
        </View>

        <View style={styles.testimonial}>
          <Text style={styles.testimonialText}>
            “Uzman kadrosu ve güler yüzlü personeliyle gerçekten kendinizi özel hissediyorsunuz.”
          </Text>
          <Text style={styles.testimonialAuthor}>– Elif D.</Text>
        </View>

        <View style={styles.testimonial}>
          <Text style={styles.testimonialText}>
            “Her randevumdan memnun ayrıldım. Kesinlikle tavsiye ediyorum.”
          </Text>
          <Text style={styles.testimonialAuthor}>– Merve T.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  welcome: {
    fontSize: 18,
    fontWeight: '400',
    color: '#333',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0077b6',
    textAlign: 'center',
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 5,
  },
  features: {
    marginTop: 20,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  featureText: {
    marginLeft: 10,
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0077b6',
  },
  featureDescription: {
    fontSize: 14,
    color: '#444',
  },
  servicesSection: {
    marginTop: 30,
  },
  servicesTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0077b6',
    marginBottom: 10,
  },
  serviceCard: {
    width: 140,
    marginRight: 15,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  serviceImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  serviceTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  testimonialsSection: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
  },
  testimonialsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0077b6',
    marginBottom: 15,
    textAlign: 'center',
  },
  testimonial: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  testimonialText: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#444',
  },
  testimonialAuthor: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0077b6',
    textAlign: 'right',
    marginTop: 5,
  },
});
