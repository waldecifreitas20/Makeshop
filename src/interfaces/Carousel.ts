import { PropsWithChildren } from "react";

export interface Carousel {
	readonly nextItem: CallableFunction;
	readonly previousItem: CallableFunction;
}

export interface CarouselProps extends PropsWithChildren {
	items?: Array<any>;
	slidingDelay?: number;
	height?: string;
	autoSlide?: boolean;
	buttonsStyle?: string;
	initialIndex?: number;
}