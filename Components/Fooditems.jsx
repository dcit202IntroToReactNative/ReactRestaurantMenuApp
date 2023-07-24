import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colorful } from "../Utils/Colors";

import { useNavigation } from "@react-navigation/native";

const Fooditems = () => {
  const nav = useNavigation();
  const food = [
    {
      id: 1,
      name: "Pizza",
      price: 250,
      image: require('../assets/pizza.jpg'),
      category: "dinner",
      description: "Experience authentic Italian cuisine with our 'Classic Margherita' Pizza! Freshly-baked thin crust topped with tangy tomato sauce, creamy mozzarella, and a sprinkle of aromatic basil leaves, it's a slice of pizza heaven!"  // Modify the path according to your actual file location
    },
    {
      id: 2,
      name: "Veg Pizza",
      price: 120,
      image: require('../assets/vegpizza.jpg'),
      category: "dinner",
      description: "Indulge in our 'Italian Symphony' Pizza! Bursting with fresh, vibrant flavors, artisanal cheese, and handpicked herbs, each bite is a delicious journey to the heart of Italy. Crisp, cheesy, and oh-so-tempting!",
    }, 
};

export default Fooditems;
