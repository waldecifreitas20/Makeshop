import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { cartServices } from "../services/cart.services";

export const CartContext = createContext({
  totalCost: "",
  updateTotalCost: () => { }
});

export function CartProvider(props: PropsWithChildren) {
  const [totalCost, setTotalCost] = useState(cartServices.getTotalCost());


  function updateTotalCost() {
    setTotalCost(cartServices.getTotalCost());
  }

  return (
    <>
      <CartContext.Provider value={{ totalCost, updateTotalCost }}>
        {props.children}
      </CartContext.Provider>
    </>
  );
}