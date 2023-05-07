import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const Botao = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={estilo.botao} onPress={onPress}>
      <Text style={estilo.titulo}>{title}</Text>
    </TouchableOpacity>
  );
};

const estilo = StyleSheet.create({
  botao: {
    flex: 1,
    width: 20,
    height:50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0.5,
  },
  titulo: {
    fontSize: 24,
    color: 'black',
  },
});

export default Botao;