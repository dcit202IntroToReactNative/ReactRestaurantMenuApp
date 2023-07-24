import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../Components/Header";
import Search from "../Components/Search";
import Category from "../Components/Category";
import Banner from "../Components/Banner";
import Fooditems from "../Components/Fooditems";

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{}}>
      <SafeAreaView style={{ paddingHorizontal: 25, paddingTop: 60, gap: 20 }}>
        <Header />
        <Search />
        <Category />
        <Banner />
        <Fooditems />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
