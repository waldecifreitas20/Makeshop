import { createContext, PropsWithChildren, useState } from "react";
import { cartServices } from "../services/cart.services";

export const CartContext = createContext({
  totalCost: 0,
  cartItems: [] as Array<CartItem>,
  updateTotalCost: () => { },
  clearCart: () => { },
  removeItem: (productId: string) => { },
  updateItemQtd: (itemId: string, qtd: number) => { },
  addItem: (product: Product, qtd: number) => { }
});

export function CartProvider(props: PropsWithChildren) {
  const [cartItems, setItems] = useState<Array<CartItem>>(cartServices.getItems());
  const [totalCost, setTotalCost] = useState(cartServices.getTotalCost());

  function updateTotalCost() {
    setTotalCost(cartServices.getTotalCost());
  }

  function clearCart() {
    cartServices.clearCart();
    updateState();
  }

  function addItem(product: Product, qtd: number) {
    cartServices.addItem(product, qtd);
    updateState();
  }

  function removeItem(productId: string) {
    cartServices.removeItem(productId);
    updateState();
  }

  function updateItemQtd(itemId: string, qtd: number) {
    cartServices.updateQuantity(itemId, qtd);
    updateState();
  }

  function updateState() {
    setTotalCost(cartServices.getTotalCost());
    setItems(cartServices.getItems());
  }


  return (
    <CartContext.Provider value={{
      totalCost,
      cartItems,
      updateTotalCost,
      clearCart,
      removeItem,
      updateItemQtd,
      addItem,
    }}>
      {props.children}
    </CartContext.Provider>

  );
}