interface ProductInfoProps {
  product: Product;
  isDark?: boolean;
}

export function ProductInfo(props: ProductInfoProps) {

  function getTextTheme() {
    if (!props.isDark) {
      return "text-black";
    }

    return "text-yellow-500";
  }

  return (
    <div>
      {/* Old price */}
      <p className={`text-sm text-neutral-400 text-line-through`}>{(() => {
        let oldPrice: number = props.product.price * 1.25;
        return <>{`R$ ${oldPrice.toFixed(2)}`}</>;
      })()}</p>

      {/* Current Price */}
      <p className={`${getTextTheme()} text-lg font-bold`
      }>{`R$ ${props.product.price.toFixed(2)}`}</p>

      {/* With credit card */}
      <p className={`${getTextTheme()} text-sm`}>{`ou 10x de R$ ${(props.product.price / 10).toFixed(2)}`}</p>
    </div>
  );
} 