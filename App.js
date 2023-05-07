import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Calculator from './src/Basica/Calculadora';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Calculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});