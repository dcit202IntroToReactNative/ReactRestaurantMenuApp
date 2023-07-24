import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    Image,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import React, { useState } from "react";
  import { colorful } from "../Utils/Colors";
  import { FontAwesome } from "@expo/vector-icons";
  import { AntDesign } from "@expo/vector-icons";
  import { Entypo } from "@expo/vector-icons";
  import { Item, item } from "../Components/Context";
  import { useNavigation } from "@react-navigation/native";
  
  const Cart = () => {
    const nav = useNavigation();
    let totalAmount = 0;
    const { myBag, setmyBag } = React.useContext(item);
    const [num, setnum] = useState(1);
  
    for (const i of myBag) {
      totalAmount = totalAmount + i.price;
    }
  
    return (
      <SafeAreaView
        style={{
          paddingTop: 50,
          paddingHorizontal: 25,
          gap: 20,
          backgroundColor: "white",
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "500" }}>
          {myBag.length} items in cart
        </Text>
        <View style={{ height: 300 }}>
          <FlatList
            data={myBag}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    height: 130,
  
                    borderRadius: 20,
                    marginBottom: 10,
                    flexDirection: "row",
                    gap: 5,
                    paddingHorizontal: 10,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#F0EDF8",
                      width: "35%",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 20,
                    }}
                  >
                    <Image
                      style={{ width: 90, height: 90 }}
                      source={require("../assets/welcom.png")}
                    />
                  </View>
  
                  <View
                    style={{
                      flex: 1,
                      paddingHorizontal: 15,
                      paddingVertical: 15,
                      justifyContent: "space-between",
  
                      borderRadius: 20,
                    }}
                  >
                    <View style={{ gap: 5 }}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={{ fontSize: 16, fontWeight: "500" }}>
                          {item.name}
                        </Text>
                        <AntDesign
                          onPress={() => {
                            setmyBag(
                              myBag.filter((val) => val.name != item.name)
                            );
                          }}
                          name="closecircleo"
                          size={24}
                          color="black"
                        />
                      </View>
  
                      <Text
                        style={{
                          color: "#98942C",
                          fontSize: 16,
                          fontWeight: "600",
                        }}
                      >
                        ₵ {item.price}
                      </Text>
                    </View>
  
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 10,
                        alignItems: "center",
                      }}
                    >
                      <AntDesign
                        onPress={() => {
                          num == 4 ? setnum(4) : setnum(num + 1);
                        }}
                        name="pluscircle"
                        size={20}
                        color={colorful.primary}
                      />
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 16,
                          color: "black",
                        }}
                      >
                        {num}
                      </Text>
                      <AntDesign
                        onPress={() => {
                          num == 1 ? setnum(1) : setnum(num - 1);
                        }}
                        name="minuscircle"
                        size={20}
                        color={colorful.primary}
                      />
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
  
        <Text style={{ fontSize: 22, fontWeight: "500" }}>
          Order Instructions
        </Text>
  
        <View
          style={{
            height: 90,
            borderRadius: 20,
            borderWidth: 2,
            borderColor: "black",
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
        >
          <TextInput style={{ height: 55, fontSize: 17 }} />
        </View>
  
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "500" }}>Total:</Text>
          <Text
            style={{
              color: "#98942C",
              fontSize: 17,
              fontWeight: "800",
            }}
          >
            ₵ {totalAmount}
          </Text>
        </View>
  
        <TouchableOpacity
          onPress={() => {
            nav.replace("Order");
          }}
          style={{
            backgroundColor: colorful.primary,
            height: 60,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 19, fontWeight: "700" }}>
            Checkout
          </Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          onPress={() => {
            nav.navigate("Home");
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 19,
              fontWeight: "400",
            }}
          >
            Back to Menu
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  
  export default Cart;
  