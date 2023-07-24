import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colorful } from "../Utils/Colors";

const Category = () => {
  const [selected, setselected] = useState(0);
  const cats = [
    { name: "All", image: require("../assets/all.jpg") },
    { name: "Burger", image: require("../assets/burger.jpg") },
    { name: "Pizza", image: require("../assets/pizza.jpg") },
    { name: "Desserts", image: require("../assets/dessert.jpg") },
    { name: "Drinks", image: require("../assets/drink.jpg") },
    { name: "Fruits", image: require("../assets/fruits.jpg") },
    { name: "Vegetables", image: require("../assets/vegetables.jpg") },
    { name: "Beverages", image: require("../assets/beverages.jpg") },
  ];
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={cats}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => {
            setselected(index);
          }}
          activeOpacity={0.9}
          style={{ marginRight: 10 }}
        >
          <View
            style={{
              width: 70,
              height: 80,
              backgroundColor: selected === index ? colorful.primary : "#E3E3E3",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
            }}
          >
            <Image
              style={{ width: 60, height: 60, borderRadius: 30 }}
              source={item.image}
            />
          </View>

          <Text
            style={{
              marginTop: 5,
              textAlign: "center",
              color: selected == index ? colorful.primary : "grey",
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Category;
