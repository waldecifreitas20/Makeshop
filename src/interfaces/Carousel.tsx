interface Carousel {
    readonly nextItem: CallableFunction;
    readonly previousItem: CallableFunction;
}

interface CarouselProps {
    items: Array<any>;
    delay: number;
    height: number;
    autoSlide: boolean;
    buttonsStyle: string
}