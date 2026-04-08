import React, { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
}

export default function ProductFormScreen() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [products, setProducts] = useState<Product[]>([]);

  function handleSave() {
    if (!name || !price) {
      Alert.alert("Erro", "Nome e preço são obrigatórios");
      return;
    }

    const newProduct: Product = {
      id: Date.now().toString(),
      name,
      price,
      description,
    };

    setProducts((prev) => [...prev, newProduct]);

    setName("");
    setPrice("");
    setDescription("");
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

      <Text style={styles.subtitle}>Lista de Produtos</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>R$ {item.price}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 15,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  name: {
    fontWeight: "bold",
  },
});
