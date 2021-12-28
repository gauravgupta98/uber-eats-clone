import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import {
	HeaderButtonProps,
	HeaderTabsProps,
	HeaderTabsValues,
} from "../../types";

export default function HeaderTabs({
	activeTab,
	setActiveTab,
}: HeaderTabsProps) {
	return (
		<View style={{ alignSelf: "center", flexDirection: "row" }}>
			<HeaderButton
				buttonText={HeaderTabsValues.delivery}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
			<HeaderButton
				buttonText={HeaderTabsValues.pickup}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
		</View>
	);
}

function HeaderButton({
	buttonText,
	activeTab,
	setActiveTab,
}: HeaderButtonProps) {
	return (
		<TouchableOpacity
			style={{
				backgroundColor: buttonText === activeTab ? "black" : "white",
				paddingVertical: 6,
				paddingHorizontal: 16,
				borderRadius: 30,
			}}
			onPress={() => setActiveTab(buttonText)}
		>
			<Text
				style={{
					color: buttonText === activeTab ? "white" : "black",
					fontSize: 15,
					fontWeight: "900",
				}}
			>
				{buttonText}
			</Text>
		</TouchableOpacity>
	);
}
