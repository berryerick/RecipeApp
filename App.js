import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Recipe from './assets/components/Recipe';

export default function App() {
  return (
    <View style={styles.container}>
      <Recipe></Recipe>
      <Recipe></Recipe>
      <Recipe></Recipe>
      <Recipe></Recipe>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
