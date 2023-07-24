import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colorful } from "./../Utils/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { item } from "./../Components/Context";

const Details = ({ route }) => {
  const { myBag, setmyBag } = React.useContext(item);
  const [num, setnum] = useState(1);
  const nav = useNavigation();
  const content = route.params.data; 

  return (
    <ScrollView style={{ backgroundColor: colorful.primary }}>
      <View
        style={{
          height: 400,
          backgroundColor: colorful.primary,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 250, height: 250, borderRadius: 35.5, }}
          source={content.image} 
        />
      </View>

      <View
        style={{
          height: 500,
          borderTopLeftRadius: 60,
          backgroundColor: "white",
          paddingHorizontal: 30,
          paddingTop: 40,
          gap: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",

            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 80,
              backgroundColor: colorful.primary,
              height: 35,
              borderRadius: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <FontAwesome name="star" size={21} color="gold" />
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              4.5
            </Text>
          </View>

          <Text
            style={{
              color: colorful.primary,
              fontWeight: "bold",
              fontSize: 24,
            }}
          >
            ₵ {content.price}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",

            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "500",
              fontSize: 22,
            }}
          >
            {content.name}
          </Text>

          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <AntDesign
              onPress={() => {
                num == 4 ? setnum(4) : setnum(num + 1);
              }}
              name="pluscircle"
              size={24}
              color={colorful.primary}
            />
            <Text style={{ fontWeight: "bold", fontSize: 19, color: "black" }}>
              {num}
            </Text>
            <AntDesign
              onPress={() => {
                num == 1 ? setnum(1) : setnum(num - 1);
              }}
              name="minuscircle"
              size={24}
              color={colorful.primary}
            />
          </View>
        </View>

        <Text style={{ fontSize: 15, fontWeight: "400" }}>
          {content.description}
        </Text>

        <Text
          style={{
            color: "black",
            fontWeight: "500",
            fontSize: 20,
          }}
        >
          Add Ons
        </Text>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <View>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/welcom.png")}
            />
            <AntDesign
              style={{ position: "absolute", bottom: 0, right: 0 }}
              name="pluscircle"
              size={24}
              color="green"
            />
          </View>
          <View>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/welcom.png")}
            />
            <AntDesign
              style={{ position: "absolute", bottom: 0, right: 0 }}
              name="pluscircle"
              size={24}
              color="green"
            />
          </View>
          <View>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/welcom.png")}
            />
            <AntDesign
              style={{ position: "absolute", bottom: 0, right: 0 }}
              name="pluscircle"
              size={24}
              color="green"
            />
          </View>
        </View>

        {myBag.includes(content) ? (
          <TouchableOpacity
            onPress={() => { }}
            style={{
              backgroundColor: "red",
              height: 55,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              Added to CART
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setmyBag([...myBag, content]);
            }}
            style={{
              backgroundColor: colorful.primary,
              height: 55,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              Add to Cart
            </Text>
          </TouchableOpacity>
        )}
      </View>

    </ScrollView>
  );
};

export default Details;
