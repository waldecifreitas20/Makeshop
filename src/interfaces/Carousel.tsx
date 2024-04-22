interface Carousel {
    readonly nextItem: CallableFunction;
    readonly previousItem: CallableFunction;
}

interface CarouselProps {
    items: Array<any>;
    slidingDelay: number;
    height: number;
    autoSlide: boolean;
    buttonsStyle: string
}