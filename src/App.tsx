import { useState } from "react";
import { CarouselOneByOne } from "./components/CarouselOneByOne";
import { Navbar } from "./components/Navbar";
import { ProductCard } from "./components/ProductCard";
import { PillCarousel } from "./components/PillCarousel";
import { Section } from "./components/Section";
import { PillButton } from "./components/PillButton";
import { Footer } from "./components/Footer";
import { isSmallDevice, onResizeScreen } from "./utils/utils";
import { Pill } from "./components/Pill";
import { Grid } from "./components/Grid";


export function App() {
    const PILL_STYLE = `
    transition-all
    duration-300
    sm:w-[100px]
    my-3

    md:w-[120px] 
    md:hover:border-pink-200 
    md:text-md 
    md:h-[30px]
    md:shadow-sm 
    md:hover:shadow-lg 
    md:hover:shadow-pink-200 
    
    lg:rounded-md 
    lg:text-lg 
    lg:text-zinc-600  
    lg:w-[200px] 
    lg:mx-4
    lg:hover:text-pink-500
   
    `
    let [buttonCopyIcon, setButtonCopyIcon] = useState(<i className="fa-regular fa-copy fa-lg"></i>);

    let [isBigBanner, setIsBigBanner] = useState(!isSmallDevice());

    onResizeScreen(() => {
        setIsBigBanner(!isSmallDevice());
    });

    const BANNERS = [
        <span className="relative block mx-auto h-full w-full">
            <img className="block w-full h-full mx-auto" src={`./assets/images/banner1-${isBigBanner ? "big" : "small"}.png`} alt="" />

            <div className="w-full absolute bottom-2 lg:bottom-6 flex z-20 justify-center md:justify-end">
                <div className="w-2/4 sm:w-[40%] lg:w-[30%] flex justify-center md:mr-[15%] lg:mr-[20%]">''
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
                            
                            md:text-xl
                            lg:text-2xl
                         
                    "/>
                    <button className="bg-white hover:bg-gray-200 text-pink-600 border rounded-r-md p-2 text-sm w-1/4" onClick={() => copyToClipboard("MAKE15OFF")}>
                        {buttonCopyIcon}
                    </button>
                </div>
            </div>
        </span>,

        <img className="block w-full h-full mx-auto" src={`./assets/images/banner2-${isBigBanner ? "big" : "small"}.png`} alt="" />

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
            imgURL="./assets/images/product1.png"
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
            imgURL="./assets/images/product2.png"
        />,
        <ProductCard
            badge={{
                text: "lançamento",
                colors: "bg-pink-300 text-black",
            }}
            name="Carolina Herrera"
            description="refil balm labial carolina herrena good girl mini kiss the mini tint superstar"
            price={109.07}
            imgURL="./assets/images/product3.png"
        />,
        <ProductCard
            badge={{
                text: "lançamento",
                colors: "bg-pink-300 text-black",
            }}
            name="Carolina Herrera"
            description="refil balm labial carolina herrena good girl mini kiss the mini tint superstar"
            price={109.07}
            imgURL="./assets/images/product4.png"
        />,
        <ProductCard
            badge={{
                text: "lançamento",
                colors: "bg-pink-300 text-black",
            }}
            name="Carolina Herrera"
            description="refil balm labial carolina herrena good girl mini kiss the mini tint superstar"
            price={109.07}
            imgURL="./assets/images/product5.png"
        />,
        <ProductCard
            badge={{
                text: "lançamento",
                colors: "bg-pink-300 text-black",
            }}
            name="Carolina Herrera"
            description="refil balm labial carolina herrena good girl mini kiss the mini tint superstar"
            price={109.07}
            imgURL="./assets/images/product6.png"
        />,
    ];

    const BEST_BRANDS = [
        { name: "absolute new york", color: "bg-pink-500" },
        { name: "lancôme", color: "bg-lime-500" },
        { name: "sisley", color: "bg-sky-500" },
        { name: "océane", color: "bg-slate-500" },
        { name: "payot", color: "bg-violet-500" },
        { name: "la roche-posay", color: "bg-yellow-500" },
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

            {/* Shortcuts links */}
            <section className="mx-auto mt-20 lg:mt-28">
                <PillCarousel>
                    <Pill style={PILL_STYLE} text="Maquiagem" />
                    <Pill style={PILL_STYLE} text="Perfumes" />
                    <Pill style={PILL_STYLE} text="Cabelos" />
                    <Pill style={PILL_STYLE} text="Promoçao" />
                    <Pill style={PILL_STYLE} text="Frete grátis" />
                </PillCarousel>
            </section>

            {/* Carousel of banners */}
            <Section
                key={"section-1"}
                child={
                    <CarouselOneByOne
                        autoSlide={true}
                        slidingDelay={3000}
                        height="
                            h-[225px] 
                            sm:h-[250px]
                            md:h-[300px]
                            lg:h-[400px]
                        "
                        buttonsStyle="
                    bg-black 
                    bg-opacity-20 
                    hover:bg-opacity-60
                    text-white  
                    size-12
                    "
                        items={BANNERS}
                    />
                }
            />


            {/* For you section */}
            <Section
                key={"section-2"}
                title="para você"
                style="px-5 mt-10"
                child={
                    isSmallDevice() ?
                        <CarouselOneByOne
                            slidingDelay={5000}
                            height="h-[450px]"
                            buttonsStyle="size-5"
                            items={PRODUCTS_CARDS}
                        />
                        :
                        <>
                            <Grid columns={2}>
                                {PRODUCTS_CARDS}
                            </Grid>
                        </>
                }
            />

            {/* just launched section*/}
            <Section
                key={"section-3"}
                title="Lançamentos do mês"
                style="px-5 mt-10"
                child={
                    <CarouselOneByOne
                        slidingDelay={5000}
                        height="h-[450px]"
                        initialIndex={2}
                        buttonsStyle="size-5"
                        items={PRODUCTS_CARDS}
                    />
                }
            />

            {/* best brands section */}
            <Section
                key={"section-4"}
                title="Melhores Marcas"
                style="px-5 mt-16"
                child={
                    <>
                        <div className="grid grid-cols-2 gap-2 text-center">
                            {BEST_BRANDS.map((brand, i) => {
                                return <>
                                    <a href=""
                                        className={`
                                ${brand.color} 
                                bg-opacity-40 
                                hover:bg-opacity-70 
                                transition-all
                                duration-300
                                capitalize 
                                h-[100px] 
                                rounded-lg 
                                flex justify-center items-center 
                                                       
                                `}>
                                        {brand.name}
                                    </a>
                                </>
                            })}
                        </div>
                    </>
                }
            />

            {/* only vip section */}
            < Section
                key={"section-5"}
                title="Só para vips"
                style="px-5 mt-14"
                child={
                    <CarouselOneByOne
                        slidingDelay={5000}
                        height="h-[450px]"
                        initialIndex={1}
                        buttonsStyle="size-5"
                        items={PRODUCTS_CARDS}
                    />}
            />

            {/* Newsletter */}
            <Section
                key={"newsletter"}
                title="Fique por dentro das novidades"
                description="Cadastre seu email e fique por dentro de promoções elançamentos em primeira mão"
                style="
                bg-gradient-to-br from-zinc-950 to-zinc-700 
                text-zinc-200 text-opacity-95 text-sm
                py-6 px-5
                mt-8
                "
                child={<>
                    <input
                        type="email"
                        placeholder="Digite seu email"
                        className="w-full rounded-full px-5 py-2 mt-4 mb-3 text-black text-lg"
                    />

                    <PillButton
                        text="Cadastrar"
                        style="
                        bg-zinc-600
                        text-lg
                        text-center 
                        w-48 
                        ml-auto
                        hover:bg-zinc-800
                        "
                    />
                </>}
            />

            <Footer />
        </>
    );
}
