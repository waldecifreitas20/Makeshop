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

    const BANNERS = [
        <span className="relative bg-green-500 flex justify-center">
            <img className="block" src="../public/images/banner1.png" alt="" />

            <input type="text"
                value="MAKE15OFF"
                readOnly disabled
                onClick={() => copyToClipboard("MAKE15OFF")}
                className="
                absolute 
                bottom-4 
                p-2 
                w-2/4
                cursor-pointer
                border-2 border-dashed 
                text-2xl text-white 
                bg-white bg-opacity-20 
                hover:bg-opacity-40 
            "/>


        </span>,
        <img src="../public/images/product1.png" alt="" />,
        <img src="../public/images/product2.png" alt="" />,
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
        navigator.clipboard.writeText(value);
        alert("Texto foi copiado")
    }

    return (
        <>
            <Navbar />
            {/* pill carousel */}
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
            <section className="mt-4">
                <Carousel items={BANNERS} delay={5000} />
            </section>
        </>
    );
}
