import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function ProductFormScreen() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  function handleSave() {
    if (!name || !price) {
      Alert.alert('Erro', 'Nome e preço são obrigatórios');
      return;
    }

    const product = {
      name,
      price,
      description,
    };

    console.log('Produto cadastrado:', product);

    Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');

    // Limpar formulário
    setName('');
    setPrice('');
    setDescription('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Produto</Text>

      <TextInput
        placeholder="Nome do produto"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Preço"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />

      <Button title="Cadastrar" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});