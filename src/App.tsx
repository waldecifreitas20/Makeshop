import { useState } from "react";
import { Carousel } from "./components/Carousel";
import { Navbar } from "./components/Navbar";


export function App() {
    const SHORTCUTS_OPTIONS = [
        <a className="border border-gray-200 bg-white rounded-full mx-1 px-3 py-1 text-sm text-nowrap" href="">Maquiagem</a>,
        <a className="border border-gray-200 bg-white rounded-full mx-1 px-3 py-1 text-sm text-nowrap" href="">Perfumes</a>,
        <a className="border border-gray-200 bg-white rounded-full mx-1 px-3 py-1 text-sm text-nowrap" href="">Cabelos</a>,
        <a className="border border-gray-200 bg-white rounded-full mx-1 px-3 py-1 text-sm text-nowrap" href="">Promoçao</a>,
        <a className="border border-gray-200 bg-white rounded-full mx-1 px-3 py-1 text-sm text-nowrap" href="">Frete Grátis</a>,
    ];
    let [buttonCopyIcon, setButtonCopyIcon] = useState(<i className="fa-regular fa-copy fa-lg"></i>);

    const PILL_CAROUSEL = <>
        <section className="flex px-4 mx-auto my-4">

            <button onClick={prev} className="w-10 bg-white text-center border rounded-full"><i className="fa-solid fa-chevron-left"></i></button>

            <div id="container" className="relative overflow-hidden w-full flex items-center mx-2">
                <div id="slider" className="flex relative md:static flex-nowrap p-0 transition-all duration-500">
                    {SHORTCUTS_OPTIONS.map((option, i) => {
                        return <>
                            <span key={Math.random() + i}>{option}</span>
                        </>;
                    })}
                </div>
            </div>

            <button onClick={next} className="w-10 bg-white text-center border rounded-full"><i className="fa-solid fa-chevron-right"></i></button>
        </section>
    </>

    const BANNERS = [
        <span className="relative bg-green-500 flex justify-center h-full w-full">
            <img className="block w-full" src="../public/images/banner1.png" alt="" />

            <div className="absolute bottom-2 w-2/4 flex justify-center">
                <input type="text"
                    value="MAKE15OFF"
                    readOnly disabled

                    className="
                    rounded-l-md
                    p-2 
                    w-full
                    cursor-pointer
                    border-y-2 border-l-2 border-dashed border-gray-100
                    text-white text-center
                    bg-white bg-opacity-20 
                    mr
            "/>
                <button className="bg-white hover:bg-gray-200 text-pink-600 border rounded-r-md p-2 text-sm w-1/4" onClick={() => copyToClipboard("MAKE15OFF")}>
                    {buttonCopyIcon}
                </button>
            </div>


        </span>,
        <img className="block h-full" src="../public/images/product1.png" alt="" />,
        <img className="block h-full" src="../public/images/product2.png" alt="" />,
    ];

    let x: number = 0;
    let slideX = 100;

    function prev() {
        const SLIDER = document.getElementById("slider") as HTMLElement;
        if (x - slideX > 0 - slideX) {

            x -= slideX;
            SLIDER.style.left = `-${x}px`;
        }
    }


    function next() {
        const CONTAINER = document.getElementById("container") as HTMLElement;
        const SLIDER = document.getElementById("slider") as HTMLElement;
        const OVERFLOW = SLIDER.offsetWidth - CONTAINER.offsetWidth;

        if (x + slideX <= OVERFLOW + slideX) {
            x += slideX;
            SLIDER.style.left = `-${x}px`;
        }
    }


    function copyToClipboard(value: string) {
        window.navigator.clipboard.writeText(value)
            .then(() => {
                setButtonCopyIcon(<i className="fa-solid fa-check text-green-500 fa-lg"></i>)
            })

    }

    return (
        <>
            <Navbar />
            {PILL_CAROUSEL}

            <section className="mt-4">
                <Carousel
                    autoSlide={false}
                    delay={5000}
                    height={250}
                    items={BANNERS}
                />
            </section>
        </>
    );
}
