import { ProductInfo } from "../../../components/ProductInfo";
import { Tile } from "../../../components/Tile";
import { ProductQtdSelector } from "../../productDetails/components/QuantitySelector";

interface CarItemCard {
  item: CartItem;
  onDelete: CallableFunction;
  onQuantityChange: CallableFunction;
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


export function CarItemCard(props: CarItemCard) {

  const ProductImage = (
    <div className="w-[30%] h-full flex flex-col justify-between">
      <img src={props.item.product.imgPath} className="block h-full mx-auto mb-1" alt={`${props.item.product.name}`} />
      <button className={btnRemoveStyle} onClick={() => props.onDelete()}>Remover</button>
    </div>
  );

  return (
    <>
      <div className="border bg-white shadow-sm rounded-lg p-3">
        <Tile leading={ProductImage}>
          <div className="ml-2">
            <h3 className="font-medium">{`${props.item.product.name} ${props.item.product.manufacturer}`}</h3>

            <div className="mt-4">
              <ProductInfo product={props.item.product} />
              <ProductQtdSelector
                initialValue={props.item.qtd}
                minValue={1}
                onChange={(value: number) => {
                  props.onQuantityChange(value);
                }} />
            </div>
          </div>
        </Tile>
      </div>
    </>
  );
}