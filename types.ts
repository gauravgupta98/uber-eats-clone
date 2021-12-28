export type HeaderButtonProps = {
	buttonText: string;
	activeTab: string;
	setActiveTab: Function;
};

export type HeaderTabsProps = {
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

export type Restaurant = {
	name: string;
	image_url: string;
	categories: Array<string>;
	price: string;
	reviews: number;
	rating: number;
};

export type RestaurantItemsProps = {
	restaurants: Array<Restaurant>;
};
