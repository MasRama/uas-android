import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <View style={styles.container}>
      <Text style={styles.copyright}>
        {currentYear} Fatqan Ramadhiansyah. All rights reserved.
      </Text>
      <Text style={styles.version}>Version 1.0.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  copyright: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 4,
  },
  version: {
    color: '#666',
    fontSize: 12,
  },
});
