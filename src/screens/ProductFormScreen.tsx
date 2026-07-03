import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { Product } from '../types/Product';

export default function ProductFormScreen() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState('');

  function handleSave() {
    if (!name.trim() || !price.trim()) {
      setError('Preencha o nome e o preco do produto.');
      return;
    }

    const newProduct: Product = {
      id: Date.now().toString(),
      name: name.trim(),
      price: price.trim(),
      description: description.trim(),
    };

    setProducts((prev) => [...prev, newProduct]);
    setError('');

    setName('');
    setPrice('');
    setDescription('');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Cadastro de Pedidos</Text>
        <Text style={styles.description}>
          Adicione produtos ao cardapio da aula.
        </Text>

        <View style={styles.form}>
          <Text style={styles.label}>Nome do produto</Text>
          <TextInput
            placeholder="Ex: X-Burger"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />

          <Text style={styles.label}>Preco</Text>
          <TextInput
            placeholder="Ex: 18,90"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
            style={styles.input}
          />

          <Text style={styles.label}>Descricao</Text>
          <TextInput
            placeholder="Ex: Pao, carne, queijo e salada"
            value={description}
            onChangeText={setDescription}
            multiline
            style={[styles.input, styles.textArea]}
          />

          {error ? <Text style={styles.error}>{error}</Text> : null}

          <Pressable style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Cadastrar produto</Text>
          </Pressable>
        </View>

        <View style={styles.listHeader}>
          <Text style={styles.subtitle}>Produtos cadastrados</Text>
          <Text style={styles.counter}>{products.length}</Text>
        </View>

        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Nenhum produto cadastrado ainda.</Text>
          }
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>R$ {item.price}</Text>
              {item.description ? (
                <Text style={styles.cardDescription}>{item.description}</Text>
              ) : null}
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f7fb',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  description: {
    marginTop: 6,
    marginBottom: 20,
    color: '#6b7280',
  },
  form: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  counter: {
    minWidth: 32,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 16,
    backgroundColor: '#2563eb',
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  card: {
    borderWidth: 1,
    borderColor: '#dbeafe',
    backgroundColor: '#fff',
    padding: 14,
    marginBottom: 12,
    borderRadius: 8,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#111827',
  },
  price: {
    marginTop: 4,
    fontSize: 15,
    fontWeight: '700',
    color: '#16a34a',
  },
  cardDescription: {
    marginTop: 6,
    color: '#4b5563',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    padding: 12,
    marginBottom: 14,
    borderRadius: 8,
    backgroundColor: '#f9fafb',
  },
  textArea: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  error: {
    marginBottom: 12,
    color: '#b91c1c',
    fontWeight: '600',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2563eb',
    borderRadius: 8,
    paddingVertical: 14,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  emptyText: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    color: '#6b7280',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
});
