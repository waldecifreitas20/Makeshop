import { useRef, useState } from "react";

interface CarouselProps {
    itemWidth: Number;
}



export function Carousel(props: CarouselProps) {
    const itemWidth = 400;
    let active = useRef(0);


    function next() {
        if (active.current < 3) {
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
            active.current = 3
        }
        translateSlide(active.current);
    }

    function translateSlide(slideTo: number) {
        const slider = document.getElementById("slider") ?? new HTMLElement();
        slider.style.left = `-${350 * slideTo}px`;
        console.log(active.current);
    }

    return <>
        <div id="carousel">
            <button onClick={prev}>Voltar</button>

            <div id="carousel-view">
                <div id="slider" className="transition-all duration-700">
                    <img className="carousel-item" src="../../public/images/banner1.png" alt="" />
                    <img className="carousel-item" src="../../public/images/product1.png" alt="" />
                    <img className="carousel-item" src="../../public/images/product2.png" alt="" />
                    <img className="carousel-item" src="../../public/images/product3.png" alt="" />
                </div>
            </div>

            <button onClick={next}>Proxima</button>
        </div>
    </>;
}