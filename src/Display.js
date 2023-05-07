import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Display = ({ value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.valor}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'white',
    padding: 0,
  },
  valor: {
    fontSize: 48,
    color: 'black',
  },
});

export default Display;