
import { useContext } from "react";
import { CarItemCard } from "./CartItemCard";
import { CartContext } from "../../../providers/cart.provider";

export function CartItemCardsList() {
  const cartProvider = useContext(CartContext);

  return (
    <div className="xl:w-[80%] mx-auto">
      {cartProvider.cartItems.map((cartItem, i) => {
        return (
          <CarItemCard
            key={i}
            item={cartItem}
            onDelete={() => cartProvider.removeItem(cartItem.id)}
            onQuantityChange={(qtd: number) => cartProvider.updateItemQtd(cartItem.id, qtd)}
          />
        );
      })}
    </div>
  );

}