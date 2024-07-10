import { ProductInfo } from "../../../components/ProductInfo";
import { Tile } from "../../../components/Tile";
import { ProductQtdSelector } from "../../../components/ProductQtdSelector";

import { routes } from "../../../routes/routes";

interface CarItemCard {
  item: CartItem;
  onDelete: CallableFunction;
  onQuantityChange: CallableFunction;
}

export function CarItemCard(props: CarItemCard) {

  const ProductImage = (
    <div className="w-[40%] h-full flex flex-col justify-between md:w-fit">
      <img
        src={props.item.product.imgPath}
        className="block h-full mx-auto mb-1"
        alt={`${props.item.product.name}`}
      />
    </div>
  );

  return (
    <>
      <div className="
      border 
      rounded-lg 
      shadow-md 
      p-3 
      block 
      mb-5 
      mx-auto
      h-[180px] 
      
      px-5 
      ">
        <Tile leading={ProductImage}>
          <div className="ml-2 w-full">

            <div className="flex justify-between">
              <Tile gap={0}>
                <a href={`${routes.productDetails}?${props.item.product.id.trim()}`}>
                  <h3 className=" capitalize font-medium hover:underline hover:text-pink-400 md:text-xl">
                    {`${props.item.product.name}`}
                  </h3>
                </a>
                <p className="capitalize text-xs md:text-sm text-zinc-500 font-medium">
                  {props.item.product.manufacturer}
                </p>
              </Tile>

              <button className="
              flex
              gap-3
              items-center 
              h-fit 
              grow
              py-1 px-2  
              text-zinc-400
              hover:text-red-500
              text-xs 

              md:text-sm 
              "
                onClick={() => props.onDelete()}>Remover <i className="fa-solid fa-trash"></i></button>

            </div>

            {/* PRODUCT INFO */}
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