import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { getAnimeDetails, type Anime } from '@/api/anime';
import { Footer } from '@/components/Footer';
import { Ionicons } from '@expo/vector-icons';

export default function DetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { data: anime, isLoading } = useQuery<Anime>({
    queryKey: ['anime', id],
    queryFn: () => getAnimeDetails(Number(id)),
  });

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6200ee" />
      </View>
    );
  }

  if (!anime) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Anime not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <ScrollView style={styles.scrollView}>
        <Image
          source={{ uri: anime.images.jpg.large_image_url }}
          style={styles.image}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{anime.title}</Text>
          
          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Score</Text>
              <Text style={styles.statValue}>{anime.score || 'N/A'}</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Year</Text>
              <Text style={styles.statValue}>{anime.year || 'N/A'}</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Status</Text>
              <Text style={styles.statValue}>{anime.status}</Text>
            </View>
          </View>

          <Text style={styles.synopsisLabel}>Synopsis</Text>
          <Text style={styles.synopsis}>{anime.synopsis}</Text>
        </View>
      </ScrollView>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollView: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  errorText: {
    color: '#fff',
    fontSize: 16,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 8,
  },
  image: {
    width: '100%',
    height: 300,
  },
  contentContainer: {
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    paddingBottom: 100,
    backgroundColor: '#1a1a1a',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
    backgroundColor: '#222',
    padding: 16,
    borderRadius: 12,
  },
  stat: {
    alignItems: 'center',
  },
  statLabel: {
    color: '#666',
    fontSize: 14,
    marginBottom: 4,
  },
  statValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  synopsisLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  synopsis: {
    color: '#ccc',
    fontSize: 16,
    lineHeight: 24,
  },
});