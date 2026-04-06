import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  FlatList,
} from 'react-native';

import { Product } from '../types/Product';


export default function ProductFormScreen() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [products, setProducts] = useState<Product[]>([]);

  function handleSave() {
    if (!name || !price) {
      Alert.alert('Erro', 'Nome e preço são obrigatórios');
      return;
    }
    const newProduct: Product = {
      id: Date.now().toString(),
      name,
      price,
      description,
    };

    setProducts((prev) => [...prev, newProduct]);

    Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');

    setName('');
    setPrice('');
    setDescription('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Pedidos</Text>

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

      <Text style={styles.subtitle}>Produtos Cadastrados:</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <view style={styles.card}>
                <Text style={styles.name}>{item.name}</Text>
                <Text>R$ {item.price}</Text>
                <Text>{item.description}</Text>
            </view>
        )}
      />

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
    subtitle: {
        fontSize: 18,
        marginVertical: 15,
        fontWeight: 'bold',
    },
    card: {
        borderWidth: 1,
        borderColor: '#add',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
