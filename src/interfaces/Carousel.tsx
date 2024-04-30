interface Carousel {
    readonly nextItem: CallableFunction;
    readonly previousItem: CallableFunction;
}

interface CarouselProps {
    items: Array<any>;
    slidingDelay?: number;
    height?: string;
    autoSlide?: boolean;
    buttonsStyle?: string;
    initialIndex? : number;
}