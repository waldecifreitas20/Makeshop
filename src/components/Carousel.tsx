import { useRef, useState } from "react";

interface CarouselProps {
    items: Array<any>;
    itemsCount: number;
    itemWidth: number;
}



export function Carousel(props: CarouselProps) {
    let active = useRef(0);


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
        const slider = document.getElementById("slider") ?? new HTMLElement();
        slider.style.left = `-${props.itemWidth * slideTo}px`;
        console.log(active.current);
    }

    return <>
        <div id="carousel">
            <button onClick={prev}>Voltar</button>

            <div id="carousel-view">
                <div id="slider" className="transition-all duration-700">
                    {props.items.map((item, i) => {
                        return <>
                            {item}
                        </>;
                    })}
                </div>
            </div>

            <button onClick={next}>Proxima</button>
        </div>
    </>;
}