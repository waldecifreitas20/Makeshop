import { Navbar } from "../../components/Navbar";
import { CarItemCard } from "./components/CartItemCard";
import { ResponsibleButton } from "../../components/ResponsibleButton";
import { cartServices } from "../../services/cart.services";
import { useState } from "react";
import { PageRouter } from "../../routes/PageRouter";
import { routes } from "../../routes/routes";

const clearCartButtonStyle = `
  rounded-full
  hover:bg-red-500 
  text-red-500 text-sm
  hover:text-white 
  px-2 py-1
  transition-all duration-200
`;

export function CartPage() {
  const [cartItems, setItems] = useState<Array<CartItem>>(cartServices.getItems);


  function clearCart() {
    cartServices.clearCart();
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
    setItems(cartServices.getItems());
  }


  function getProductsCard() {
    return cartItems.map((cartItem, i) => {
      return (
        <CarItemCard
          key={i}
          item={cartItem}
          onDelete={() => removeItem(cartItem.id)}
          onQuantityChange={(qtd: number)=> updateItemQtd(cartItem.id, qtd)}
        />
      );
    });
  }


  return (
    <>
      <Navbar />

      <main className="px-4">

        <div className="flex justify-between">
          <h2 className="text-2xl">Meu carrinho</h2>
          <button
            className={clearCartButtonStyle}
            onClick={() => clearCart()}
          >Esvaziar carrinho</button>
        </div>

        <div className="lg:px-5 mt-5 size-full">
          {
            cartItems.length === 0 ? (
              <div className="
                flex flex-col
                items-center
                justify-center
              
                h-full w-full max-w-[450px]
                mt-40 mx-auto
              ">
                <p className="text-neutral-500 text-center text-2xl mb-10">
                  Você ainda não adicionou nenhum produto
                </p>

                <ResponsibleButton
                  style="max-w-[300px]"
                  onClick={() => PageRouter.goTo(routes.home)}
                >
                  Voltar às compras
                </ResponsibleButton>
              </div>
            ) :
              getProductsCard()
          }

        </div>

      </main>
    </>
  );
}