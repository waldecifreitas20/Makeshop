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

    const PRODUCTS_CARDS = [
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
                text: "Exclusivo",
                colors: "bg-yellow-500",
            }}
            isDark={true}
            isVIP={true}
            name="fenty beauty"
            description="gloss labial fenty gloss bomb universal lip luminizer"
            price={89.97}
            imgURL="../public/images/product2.png"
        />,
        <ProductCard
            badge={{
                text: "lançamento",
                colors: "bg-pink-300 text-black",
            }}
            name="Carolina Herrera"
            description="refil balm labial carolina herrena good girl mini kiss the mini tint superstar"
            price={109.07}
            imgURL="../public/images/product3.png"
        />,
    ];

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
                <PillCarousel items={SHORTCUTS_OPTIONS} />
            </section>

            <section className="mt-4">
                <CarouselOneByOne
                    slidingDelay={5000}
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
                <h2 className="uppercase text-2xl ml-4 mb-4">para você</h2>

                <CarouselOneByOne
                    slidingDelay={5000}
                    height={450}
                    buttonsStyle="size-5"
                    items={PRODUCTS_CARDS}
                />
            </section>

            <section className="mt-12 px-2">
                <h2 className="uppercase text-2xl ml-4 mb-4">Lançamentos do mês</h2>

                <CarouselOneByOne
                    slidingDelay={5000}
                    height={450}
                    initialIndex={2}
                    buttonsStyle="size-5"
                    items={PRODUCTS_CARDS}
                />
            </section>

        </>
    );
}
