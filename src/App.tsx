import { useState } from "react";
import { CarouselOneByOne } from "./components/CarouselOneByOne";
import { Navbar } from "./components/Navbar";
import { ProductCard } from "./components/ProductCard";
import { PillCarousel } from "./components/PillCarousel";


export function App() {
    const SHORTCUTS_OPTIONS = [
        <a className="border border-gray-200 bg-white rounded-full mx-1 px-3 py-1 text-sm text-nowrap" href="">Maquiagem</a>,
        <a className="border border-gray-200 bg-white rounded-full mx-1 px-3 py-1 text-sm text-nowrap" href="">Perfumes</a>,
        <a className="border border-gray-200 bg-white rounded-full mx-1 px-3 py-1 text-sm text-nowrap" href="">Cabelos</a>,
        <a className="border border-gray-200 bg-white rounded-full mx-1 px-3 py-1 text-sm text-nowrap" href="">Promoçao</a>,
        <a className="border border-gray-200 bg-white rounded-full mx-1 px-3 py-1 text-sm text-nowrap" href="">Frete Grátis</a>,
    ];
    let [buttonCopyIcon, setButtonCopyIcon] = useState(<i className="fa-regular fa-copy fa-lg"></i>);

    const BANNERS = [
        <span className="relative bg-green-500 block mx-auto h-full w-full">
            <img className="block w-full h-full mx-auto" src="../public/images/banner1.png" alt="" />

            <div className="w-full flex justify-center">
                <div className="absolute bottom-2 w-2/4 flex self-center justify-center">
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
                    "/>
                    <button className="bg-white hover:bg-gray-200 text-pink-600 border rounded-r-md p-2 text-sm w-1/4" onClick={() => copyToClipboard("MAKE15OFF")}>
                        {buttonCopyIcon}
                    </button>
                </div>
            </div>
        </span>,
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

            <section className="mx-auto my-4">
                <PillCarousel
                    autoSlide={false}
                    buttonsStyle=""
                    delay={700}
                    height={0}
                    items={SHORTCUTS_OPTIONS} />
            </section>

            <section className="mt-4">
                <CarouselOneByOne
                    autoSlide={false}
                    delay={5000}
                    height={250}
                    buttonsStyle="
                    bg-black 
                    bg-opacity-20 
                    hover:bg-opacity-60
                    text-white  
                    size-12
                    "
                    items={BANNERS}
                />
            </section>

            <section className="mt-12 px-2">
                <h2 className="uppercase text-2xl ml-4">para você</h2>
                <CarouselOneByOne
                    autoSlide={false}
                    delay={5000}
                    height={450}
                    buttonsStyle="size-5"
                    items={[
                        <ProductCard
                            name="Lancôme"
                            badge={{
                                text: "Frete Grátis",
                                colors: "bg-lime-500",
                            }}
                            description="Kit de olhos lancôme monsieur big set"
                            price={199.97}
                            imgURL="../public/images/product1.png"
                        />,
                        <ProductCard
                            badge={{
                                text: "Frete Grátis",
                                colors: "bg-lime-500",
                            }}
                            name="Lancôme"
                            description="Kit de olhos lancôme monsieur big set"
                            price={199.97}
                            imgURL="../public/images/product2.png"
                        />,

                    ]}
                />
            </section>
        </>
    );
}
