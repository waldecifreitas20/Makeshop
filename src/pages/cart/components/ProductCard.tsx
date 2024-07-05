import { ProductInfo } from "../../../components/ProductInfo";
import { Tile } from "../../../components/Tile";
import { ProductQtdSelector } from "../../productDetails/components/QuantitySelector";

interface ProductCard {
  product: Product;
  onDelete: CallableFunction;
}

const btnRemoveStyle = `
  rounded-full
  border border-red-500
  hover:bg-red-500 
  text-red-500 text-sm
  hover:text-white 
  px-2 py-1
  transition-all duration-200
`;


export function ProductCard(props: ProductCard) {

  const ProductImage = (
    <div className="w-[30%] h-full flex flex-col justify-between">
      <img src={props.product.imgPath} className="block h-full mx-auto mb-1" alt={`${props.product.name}`} />
      <button className={btnRemoveStyle} onClick={() => props.onDelete()}>Remover</button>
    </div>
  );

  return (
    <>
      <div className="border bg-white shadow-sm rounded-lg p-3">
        <Tile leading={ProductImage}>
          <div className="ml-2">
            <h3 className="font-medium">{`${props.product.name} ${props.product.manufacturer}`}</h3>

            <div className="mt-4">
              <ProductInfo product={props.product} />
              <ProductQtdSelector initialValue={1} minValue={1} />
            </div>
          </div>
        </Tile>
      </div>
    </>
  );
}