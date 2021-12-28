import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { YELP_API_TOKEN } from "@env";

import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";
import { HeaderTabsValues, Restaurant } from "../types";

export default function Home() {
	const [restaurants, setRestaurants] = useState<Array<Restaurant>>([]);
	const [city, setCity] = useState("San Francisco");
	const [activeTab, setActiveTab] = useState(HeaderTabsValues.delivery);

	useEffect(() => {
		async function getRestaurantsFromYelp() {
			const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

			const apiOptions = {
				headers: {
					Authorization: `Bearer ${YELP_API_TOKEN}`,
				},
			};

			fetch(yelpUrl, apiOptions)
				.then((res) => res.json())
				.then((json) => {
					setRestaurants(
						json.businesses.filter((business: any) =>
							business.transactions.includes(
								activeTab.toLowerCase()
							)
						)
					);
				});
		}

		getRestaurantsFromYelp();
	}, [city, activeTab]);

	return (
		<SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
			<View style={{ backgroundColor: "white", padding: 15 }}>
				<HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
				<SearchBar />
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Categories />
				<RestaurantItems restaurants={restaurants} />
			</ScrollView>
		</SafeAreaView>
	);
}
