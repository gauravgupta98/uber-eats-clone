import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
	RestaurantImageProps,
	RestaurantInfoProps,
	RestaurantItemsProps,
} from "../../types";

export default function RestaurantItems({ restaurants }: RestaurantItemsProps) {
	return (
		<>
			{restaurants.map((restaurant, index) => (
				<TouchableOpacity
					key={index}
					activeOpacity={1}
					style={{ marginBottom: 15 }}
				>
					<View
						style={{
							marginTop: 10,
							padding: 15,
							backgroundColor: "white",
						}}
					>
						<RestaurantImage image={restaurant.image_url} />
						<RestaurantInfo
							name={restaurant.name}
							rating={restaurant.rating}
						/>
					</View>
				</TouchableOpacity>
			))}
		</>
	);
}

function RestaurantImage({ image }: RestaurantImageProps) {
	return (
		<>
			<Image
				source={{
					uri: image,
				}}
				style={{ width: "100%", height: 180 }}
			/>
			<TouchableOpacity
				style={{ position: "absolute", right: 20, top: 20 }}
			>
				<MaterialCommunityIcons
					name="heart-outline"
					size={25}
					color="#fff"
				/>
			</TouchableOpacity>
		</>
	);
}

function RestaurantInfo({ name, rating }: RestaurantInfoProps) {
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				marginTop: 10,
			}}
		>
			<View>
				<Text style={{ fontSize: 15, fontWeight: "bold" }}>{name}</Text>
				<Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
			</View>
			<View
				style={{
					backgroundColor: "#eee",
					height: 30,
					width: 30,
					alignItems: "center",
					justifyContent: "center",
					borderRadius: 15,
				}}
			>
				<Text>{rating}</Text>
			</View>
		</View>
	);
}
