interface ProductCardProps {
    name: string;
    description: string;
    price: number;
    imgURL: string;
    badge: {
        text: string,
        colors: string,
    };
}

export function ProductCard(props: ProductCardProps) {
    return <>
        <a href="" className="bg-white relative block border px-4 py-5 rounded-lg w-72">
            <span className={`absolute top-4 right-0 ${props.badge.colors} text-white text-sm capitalize py-1 px-5`}>{props.badge.text}</span>
            <img className="block w-full mx-auto mb-4" src={props.imgURL} alt="" />

            <div className="text-left capitalize">
                <h3 className="text-xl font-medium">{props.name}</h3>
                <p className="text-sm capitalize">{props.description}</p>

                <div className="mt-3">
                    <p className="text-sm text-gray-500 text-line-through">{(() => {
                        let oldPrice: number = props.price * 1.25;
                        return <>{`R$ ${oldPrice.toFixed(2)}`}</>;
                    })()}</p>
                    <p className="text-lg font-bold">{`R$ ${props.price.toFixed(2)}`}</p>
                    <p className="text-sm">{`ou 10x de R$ ${(props.price / 10).toFixed(2)}`}</p>
                </div>
            </div>
        </a>
    </>
}