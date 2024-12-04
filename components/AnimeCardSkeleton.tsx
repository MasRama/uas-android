import React from 'react';
import { View, StyleSheet } from 'react-native';

export const AnimeCardSkeleton: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image} />
      <View style={styles.infoContainer}>
        <View style={styles.titleSkeleton} />
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <View style={styles.statLabelSkeleton} />
            <View style={styles.statValueSkeleton} />
          </View>
          <View style={styles.stat}>
            <View style={styles.statLabelSkeleton} />
            <View style={styles.statValueSkeleton} />
          </View>
          <View style={styles.stat}>
            <View style={styles.statLabelSkeleton} />
            <View style={styles.statValueSkeleton} />
          </View>
        </View>
        <View style={styles.buttonSkeleton} />
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
    backgroundColor: '#222',
  },
  infoContainer: {
    padding: 12,
    height: '45%',
  },
  titleSkeleton: {
    height: 20,
    width: '80%',
    backgroundColor: '#222',
    borderRadius: 4,
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
  statLabelSkeleton: {
    width: 40,
    height: 12,
    backgroundColor: '#222',
    borderRadius: 4,
    marginBottom: 4,
  },
  statValueSkeleton: {
    width: 30,
    height: 16,
    backgroundColor: '#222',
    borderRadius: 4,
  },
  buttonSkeleton: {
    height: 35,
    backgroundColor: '#222',
    borderRadius: 8,
    marginTop: 'auto',
  },
});
