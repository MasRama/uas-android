import React from 'react';
import { View, TextInput, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { AnimeCard } from '@/components/AnimeCard';
import { AnimeCardSkeleton } from '@/components/AnimeCardSkeleton';
import { searchAnime } from '@/api/anime';
import type { Anime } from '@/api/anime';
import Header from '@/components/Header';
import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';
import { Footer } from '@/components/Footer';

const SearchScreen: React.FC = () => {
  const [query, setQuery] = React.useState('');

  const {data: animeList, isPending, mutateAsync} = useMutation({
    mutationFn: (query: string) => searchAnime(query),
    onError: (error) => {
      console.error('Search error:', error);
    },
  })

  const handleSearch = React.useCallback(async (searchQuery: string) => {
    if (searchQuery.trim()) {
      await mutateAsync(searchQuery);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.searchInputContainer}>
        <TextInput
          style={styles.searchInput}
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={() => handleSearch(query)}
          placeholder="Search anime..."
          placeholderTextColor="#666"
        />

        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => handleSearch(query)}
        >
          <Text style={{ color: '#fff' }}>Search</Text>
        </TouchableOpacity>
      </View>

      {isPending ? (
        <FlatList
          data={[1, 2, 3]}
          renderItem={() => <AnimeCardSkeleton />}
          keyExtractor={(item) => item.toString()}
          contentContainerStyle={styles.list}
        />
      ) : (
        <FlatList
          data={animeList?.data || []}
          renderItem={({ item }) => <AnimeCard anime={item} />}
          keyExtractor={(item) => item.mal_id.toString()}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          ListFooterComponent={<View style={{ height: 80 }} />}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                {query ? 'No results found' : 'Search for your favorite anime!'}
              </Text>
            </View>
          )}
        />
      )}
      <Footer />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  searchInputContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 8,
    zIndex: 1
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    paddingHorizontal: 16,
    color: '#fff',
  },
  searchButton: {
    backgroundColor: '#6200ee',
    paddingHorizontal: 16,
    justifyContent: 'center',
    borderRadius: 8,
  },
  list: {
    padding: 8,
    flexGrow: 1
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 32,
  },
  emptyText: {
    color: '#666',
    fontSize: 16,
  },
});