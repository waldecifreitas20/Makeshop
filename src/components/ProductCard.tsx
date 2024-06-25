import { appColors } from "../global/colors";
import { routes } from "../routes/routes";

interface ProductCardProps {
	product: Product;
	badge?: {
		text: string,
		colors: string,
	};
}

export function ProductCard(props: ProductCardProps) {
	const darkTheme = {
		background: "bg-zinc-950",
		text: "text-white",
	}

	const lightTheme = {
		background: "bg-white",
		text: "text-black",
	}

	function getTheme(isVip: boolean) {
		return isVip ? darkTheme : lightTheme;
	}

	return <>
		<a href={routes.productDetails} className={`
			${getTheme(props.product.isVip).background} 
			${appColors.borders.container} 
			relative block border 
			px-4 py-5 rounded-xl 
			w-64
			md:w-full
			h-fit

			md:hover:shadow-lg
			md:hover:border-pink-300
			md:hover:shadow-pink-300
			md:transition-all
			md:duration-300
			`
		}>
			{/* badge */}
			{
				props.badge ?
					<span className={`
						absolute top-4 right-0 
						${props.badge.colors} 
				
						text-sm capitalize 
						py-1 px-5`
					}>{props.badge.text}</span>
					: <></>
			}

			<img className="block w-full md:w-32 mx-auto mb-4" src={props.product.imgPath} alt="" />

			{/* Product info block */}
			<div className=" text-left capitalize flex flex-col justify-between  h-[120px] md:h-[130px]">
				<div>
					<h3 className={`${getTheme(props.product.isVip).text} text-xl font-medium`}>{props.product.manufacturer}</h3>
					<p className={`${getTheme(props.product.isVip).text} text-sm capitalize`}>{props.product.desc}</p>
				</div>

				<div className="mt-4 md:m-0">
					{/* Old price */}
					<p className={`text-sm ${appColors.texts.dimmed} text-line-through`}>{(() => {
						let oldPrice: number = props.product.price * 1.25;
						return <>{`R$ ${oldPrice.toFixed(2)}`}</>;
					})()}</p>

					{/* Current Price */}
					<p className={`
                    ${props.product.isVip ? "text-yellow-500" : getTheme(props.product.isVip).text} text-lg font-bold`
					}>{`R$ ${props.product.price.toFixed(2)}`}</p>

					{/* With credit card */}
					<p className={`${getTheme(props.product.isVip).text} text-sm`}>{`ou 10x de R$ ${(props.product.price / 10).toFixed(2)}`}</p>
				</div>
			</div>
		</a>
	</>
}