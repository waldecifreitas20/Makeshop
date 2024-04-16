import { useRef } from "react";

interface CarouselProps {
    items: Array<any>;
    itemsCount: number;
    itemWidth: number;
}


export function Carousel(props: CarouselProps) {
    let active = useRef(0);

    const THIS_KEY = Math.random().toString();

    const carouselItems = document.getElementsByClassName("carousel-item") as HTMLCollectionOf<HTMLElement>;

    console.log(carouselItems.length);
    
    for (const item of carouselItems) {
        item.style.width = `${props.itemWidth}px`;
        console.log(1);
    }

    function next() {
        if (active.current < props.itemsCount - 1) {
            active.current += 1
        } else {
            active.current = 0
        }
        translateSlide(active.current);

    }
    function prev() {
        if (active.current > 0) {
            active.current -= 1
        } else {
            active.current = props.itemsCount - 1
        }
        translateSlide(active.current);
    }

    function translateSlide(slideTo: number) {
        const slider = document.getElementById(THIS_KEY) ?? new HTMLElement();
        slider.style.left = `-${props.itemWidth * slideTo}px`;
        console.log(active.current);
    }

    return <>
        <div className="carousel">
            <button onClick={prev}>Voltar</button>

            <div className="carousel-view">
                <ul id={THIS_KEY} className="slider transition-all duration-700">
                    {props.items.map((item, i) => {
                        return <>
                            <li key={Math.random().toString()} className="carousel-item">
                                {item}
                            </li>
                        </>;
                    })}
                </ul>
            </div>

            <button onClick={next}>Proxima</button>
        </div>
    </>;
}