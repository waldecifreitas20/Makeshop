import { useContext } from "react";
import { CartContext } from "../../../providers/cart.provider";

export function CartBadge() {
  const cart = useContext(CartContext);

  return (
    <div className="relative">
      <i className="fa-solid fa-cart-shopping fa-xl"></i>
      <span className="
              absolute 
              -top-2 -right-2
              size-4 
              bg-pink-400 
              rounded-full 
              text-xs 
              text-center 
              text-white"
      >
        {cart.cartItems.length}
      </span>
    </div>
  );
}