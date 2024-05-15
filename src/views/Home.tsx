/* built-in */
import { ReactElement, useState } from "react";
/* Components */
import { Navbar } from "../components/Navbar";
import { Section } from "../components/Section";
import { PillCarousel } from "../components/PillCarousel";
import { Pill } from "../components/Pill";
import { CarouselOneByOne } from "../components/CarouselOneByOne";
import { ProductCard } from "../components/ProductCard";
import { Grid } from "../components/Grid";
import { Footer } from "../components/Footer";
/* Utilities functions */
import { isSmallDevice, onResizeScreen } from "../utils/utils";
import { Newsletter } from "../components/Newsletter";
import { getProducts } from "../services/products.ts";


export function HomePage() {
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
		`;
	const BANNERS = function (): Array<any> {

		let [buttonCopyIcon, setButtonCopyIcon] = useState(<i className="fa-regular fa-copy fa-lg"></i>);

		let [isBigBanner, setIsBigBanner] = useState(!isSmallDevice());

		onResizeScreen(() => {
			setIsBigBanner(!isSmallDevice());
		});

		const copyToClipboard = (value: string) => {
			window.navigator.clipboard.writeText(value)
				.then(() => {
					setButtonCopyIcon(<i className="fa-solid fa-check text-green-500 fa-lg"></i>)
				});
		}

		return [
			<span className="relative block mx-auto h-full w-full">
				<img className="block w-full h-full mx-auto" src={`./images/banner1-${isBigBanner ? "big" : "small"}.png`} alt="" />

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

			<img className="block w-full h-full mx-auto" src={`./images/banner2-${isBigBanner ? "big" : "small"}.png`} alt="" />
		];
	}
	const products = getProducts().map((product, i) => {
		return <ProductCard
			name={product.name}
			description={product.desc}
			imgURL={product.imgPath}
			price={Number.parseFloat(product.price)}
			isVIP={product.isVip == "true"}
			badge={product.isFreeShipping == "true" ?
				{
					colors: 'bg-lime-500',
					text: 'frete gratis'
				} :
				{ colors: '', text: '' }
			}
		/>
	});

	const BEST_BRANDS = [
		{ logoUrl: "./images/brand-absolute-ny.png", name: "lancôme", color: "bg-lime-500" },
		{ logoUrl: "./images/brand-lancome.png", name: "absolute new york", color: "bg-pink-500" },
		{ logoUrl: "./images/brand-sisley.png", name: "sisley", color: "bg-sky-500" },
		{ logoUrl: "./images/brand-oceane.png", name: "océane", color: "bg-slate-500" },
		{ logoUrl: "./images/brand-payot.png", name: "payot", color: "bg-violet-500" },
		{ logoUrl: "./images/brand-roche-posay.png", name: "la roche-posay", color: "bg-yellow-500" },
	];

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
			<Section key={"section-1"}>
				<CarouselOneByOne
					autoSlide={true}
					slidingDelay={5000}
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
					items={BANNERS()}
				/>

			</Section>

			{/* For you section */}
			<Section key={"section-2"} title="para você" style="px-5 mt-10" >
				{isSmallDevice() ?
					<CarouselOneByOne
						slidingDelay={5000}
						height="h-[450px]"
						buttonsStyle="size-5"
						items={products}
					/>
					:
					<>
						<Grid>
							{products}
						</Grid>
					</>
				}
			</Section>

			{/* just launched section*/}
			<Section key={"section-3"} title="Lançamentos do mês" style="px-5 mt-10">
				{isSmallDevice() ?
					<CarouselOneByOne
						slidingDelay={5000}
						height="h-[450px]"
						buttonsStyle="size-5"
						items={products}
					/>
					:
					<>
						<Grid>
							{products}
						</Grid>
					</>
				}
			</Section>


			{/* best brands section */}
			<Section key={"section-4"} title="Melhores Marcas" style="px-5 mt-16">
				<Grid itemsByRow={6} style="grid grid-cols-2 gap-2 lg:grid-cols-3">
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
								text-center
								
								md:h-[120px]
								lg:h-[150px]
								`}>
								<img className="block h-[70%] lg:h-[70%] p-4" src={brand.logoUrl} alt={`logo ${brand.name}`} />

							</a>
						</>
					})}
				</Grid>
			</Section>


			{/* only vip section */}
			< Section key={"section-5"} title="Só para vips" style="px-5 mt-14">
				{isSmallDevice() ?
					<CarouselOneByOne
						slidingDelay={5000}
						height="h-[450px]"
						buttonsStyle="size-5"
						items={products}
					/>
					:
					<>
						<Grid>
							{products.map((card, _) => {
								return <>{card}</>
							})}
						</Grid>
					</>
				}
			</Section>

			<Newsletter />

			<Footer />
		</>
	);
}
