import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import type { Anime } from '@/api/anime';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface AnimeCardProps {
  anime: Anime;
}

export const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: anime.images.jpg.large_image_url }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {anime.title}
        </Text>
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
        <TouchableOpacity
          style={styles.detailButton}
          onPress={() => router.push(`/detail/${anime.mal_id}`)}
        >
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
    backgroundColor: '#1a1a1a',
    height: 220,
  },
  image: {
    width: '100%',
    height: '55%',
  },
  infoContainer: {
    padding: 12,
    height: '45%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  stat: {
    alignItems: 'center',
  },
  statLabel: {
    color: '#666',
    fontSize: 12,
  },
  statValue: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  detailButton: {
    backgroundColor: '#6200ee',
    borderRadius: 8,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
