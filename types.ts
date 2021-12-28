export type HeaderButtonProps = {
	buttonText: string;
	activeTab: string;
	setActiveTab: Function;
};

export const HeaderTabsValues = {
	delivery: "Delivery",
	pickup: "Pickup",
};

export type RestaurantImageProps = {
	image: string;
};

export type RestaurantInfoProps = {
	name: string;
	rating: number;
};
