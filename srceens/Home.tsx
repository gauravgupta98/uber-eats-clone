import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";

export default function Home() {
	return (
		<SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
			<View style={{ backgroundColor: "white", padding: 15 }}>
				<HeaderTabs />
				<SearchBar />
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Categories />
				<RestaurantItems />
			</ScrollView>
		</SafeAreaView>
	);
}
