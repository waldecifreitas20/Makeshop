/* Components */
import { Navbar } from "../../components/Navbar/index.tsx";
import { Section } from "../../components/Section.tsx";
import { PillCarousel } from "../../components/PillCarousel.tsx";
import { Pill } from "../../components/Pill.tsx";
import { CarouselOneByOne } from "../../components/CarouselOneByOne.tsx";
import { Grid } from "../../components/Grid.tsx";
import { Footer } from "../../components/Footer.tsx";
/* Local Components */
import { Banners } from "./components/banners.tsx";
/* Utilities functions */
import { utils } from "../../utils/utils.ts";
import { Newsletter } from "../../components/Newsletter.tsx";
import { useContext, useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard.tsx";
import { Spinner } from "../../components/Spinner.tsx";
import { ProductContext } from "../../providers/product.provider.tsx";


enum ClientType {
	vip, normal, all
}

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

const BEST_BRANDS = [
	{
		"logoUrl": "./images/brand-absolute-ny.png",
		"name": "lancôme",
		"color": "bg-lime-500"
	},
	{
		"logoUrl": "./images/brand-lancome.png",
		"name": "absolute new york",
		"color": "bg-pink-500"
	},
	{
		"logoUrl": "./images/brand-sisley.png",
		"name": "sisley",
		"color": "bg-yellow-500"
	},
	{
		"logoUrl": "./images/brand-oceane.png",
		"name": "océane",
		"color": "bg-sky-500"
	},
	{
		"logoUrl": "./images/brand-payot.png",
		"name": "payot",
		"color": "bg-violet-500"
	},
	{
		"logoUrl": "./images/brand-roche-posay.png",
		"name": "la roche-posay",
		"color": "bg-red-500"
	}
]

export function HomePage() {
	const [hasProductsLoaded, setProductsLoadingState] = useState(false);
	const [vipsProducts, setVipProducts] = useState<Array<any>>([]);
	const [anyClientProducts, setAnyClientProducts] = useState<Array<any>>([]);
	
	const productsProvider = useContext(ProductContext);

	useEffect(() => {
		productsProvider.initProductsData()
			.then(() => {
				setVipProducts(productsProvider.getForVips());
				setAnyClientProducts(productsProvider.getForAnyClient());

				stopLoading();

			}).catch((err: any) => {
				console.log(err);
			});
	}, [])

	function stopLoading() {
		setProductsLoadingState(true);
	}

	function getProductsCards(clientType: ClientType) {
		let products: Array<Product> = [];

		switch (clientType) {
			case ClientType.normal:
				products = anyClientProducts;
				break;

			case ClientType.vip:
				products = vipsProducts;
				break;

			default:
				break;
		}

		return products.map((product, i) => {
			return <ProductCard
				key={i}
				product={product}
			/>
		});


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

			{/* Carousel of getBanners */}
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
						rounded-full
						"
				>
					{Banners()}
				</CarouselOneByOne>

			</Section>

			{/* For you section */}
			<Section key={"section-2"} title="para você" style="px-5 mt-10" >
				{hasProductsLoaded ?
					(utils.isSmallDevice() ?
						<CarouselOneByOne
							slidingDelay={5000}
							height="h-[450px]"
							buttonsStyle="size-5"
						>
							{getProductsCards(ClientType.normal)}
						</CarouselOneByOne>
						:
						<>
							<Grid>
								{getProductsCards(ClientType.normal)}
							</Grid>
						</>)

					: <Spinner />
				}
			</Section>

			{/* just launched section*/}
			<Section key={"section-3"} title="Lançamentos do mês" style="px-5 mt-10">
				{hasProductsLoaded ?
					(utils.isSmallDevice() ?
						<CarouselOneByOne
							slidingDelay={5000}
							height="h-[450px]"
							buttonsStyle="size-5"

						>
							{getProductsCards(ClientType.normal)}
						</CarouselOneByOne>
						:
						<>
							<Grid>
								{getProductsCards(ClientType.normal)}
							</Grid>
						</>) : <Spinner />
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
				{hasProductsLoaded ?
					(utils.isSmallDevice() ?
						<CarouselOneByOne
							slidingDelay={5000}
							height="h-[450px]"
							buttonsStyle="size-5"
						>
							{getProductsCards(ClientType.vip)}
						</CarouselOneByOne>
						:
						<>
							<Grid>
								{getProductsCards(ClientType.vip)}
							</Grid>
						</>) : <Spinner />
				}
			</Section>

			<Newsletter />

			<Footer />
		</>
	);
}
