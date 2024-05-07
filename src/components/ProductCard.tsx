interface ProductCardProps {
    name: string;
    description: string;
    price: number;
    imgURL: string;
    isDark?: boolean;
    isVIP?: boolean;
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

    function getTheme(cardProps: ProductCardProps) {
        return cardProps.isDark ? darkTheme : lightTheme;
    }

    return <>
        <a href="" className={`${getTheme(props).background} relative block border px-4 py-5 rounded-lg w-64`}>
            {/* badge */}
            {
                props.badge ?
                    <span className={`
                        absolute top-4 right-0 
                        ${props.badge.colors} 
                        ${getTheme(props).text} 
                        text-sm capitalize 
                        py-1 px-5`
                    }>{props.badge.text}</span>
                    : <></>
            }

            <img className="block w-full mx-auto mb-4" src={props.imgURL} alt="" />

            {/* Product info block */}
            <div className="text-left capitalize">
                <h3 className={`${getTheme(props).text} text-xl font-medium`}>{props.name}</h3>
                <p className={`${getTheme(props).text} text-sm capitalize`}>{props.description}</p>

                <div className="mt-3">
                    {/* Old price */}
                    <p className="text-sm text-gray-500 text-line-through">{(() => {
                        let oldPrice: number = props.price * 1.25;
                        return <>{`R$ ${oldPrice.toFixed(2)}`}</>;
                    })()}</p>

                    {/* Current Price */}
                    <p className={`
                    ${props.isVIP ? "text-yellow-500" : getTheme(props).text} text-lg font-bold`
                    }>{`R$ ${props.price.toFixed(2)}`}</p>

                    {/* With credit card */}
                    <p className={`${getTheme(props).text} text-sm`}>{`ou 10x de R$ ${(props.price / 10).toFixed(2)}`}</p>
                </div>
            </div>
        </a>
    </>
}