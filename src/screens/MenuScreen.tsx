import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const menuItems = [
  {
    id: "1",
    name: "Hambúrguer",
    price: "25.00",
    image:
      "https://img.freepik.com/fotos-gratis/hamburguer-de-queijo-classico-com-costeleta-de-carne-legumes-e-cebola-isolados-em-um-fundo-branco_123827-29709.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: "2",
    name: "Pizza",
    price: "40.00",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg-xUQcNALRSgEKQJ_wvxQbkHxkIcAak8B3g&s",
  },
  {
    id: "3",
    name: "Batata Frita",
    price: "15.00",
    image:
      "https://i.pinimg.com/736x/03/bc/bd/03bcbd9d6305aeab3ebc3b40c669b3b4.jpg",
  },
];

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cardápio</Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>R$ {item.price}</Text>
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
    fontWeight: "bold",
    marginBottom: 15,
  },

  card: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    alignItems: "center",
  },

  image: {
    width: 120,
    height: 120,
    marginBottom: 10,
    borderRadius: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
  },

  price: {
    color: "green",
    marginTop: 5,
  },
});
