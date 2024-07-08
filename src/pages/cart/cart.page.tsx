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
  const [cartItems, setItems] = useState<Array<CartItem>>(cartServices.getItems());
  const [totalCost, setTotalCost] = useState(cartServices.getTotalCost());

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
    setTotalCost(cartServices.getTotalCost());
    setItems(cartServices.getItems());
  }


  function getProductsCard() {
    return cartItems.map((cartItem, i) => {
      return (
        <CarItemCard
          key={i}
          item={cartItem}
          onDelete={() => removeItem(cartItem.id)}
          onQuantityChange={(qtd: number) => updateItemQtd(cartItem.id, qtd)}
        />
      );
    });
  }


  return (
    <div className="h-screen">

      <Navbar />

      <main className="px-4">

        <div className="flex justify-between">
          <h2 className="text-2xl">Meu carrinho</h2>
          <button
            className={clearCartButtonStyle}
            onClick={() => clearCart()}
          >
            Esvaziar carrinho
          </button>
        </div>

        <div className="lg:px-5 mt-5">
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
              <div className="overflow-scroll size-full h-min">
                {getProductsCard()}
              </div>
          }
        </div>
      </main>

      <footer className="w-full mt-4 text-white">

        <div className="h-[130px]"></div>
        <div className="bg-black w-full fixed bottom-0 px-5 py-3">
          <p>Qtd. Items: {cartItems.length} </p>
          <p>Total de Produtos: R$ {totalCost}</p>

          <ResponsibleButton
            style={`border border-white ${cartItems.length === 0 ? 'opacity-30' : ''}`}
            disabled={cartItems.length === 0}
            background="bg-black hover:bg-pink-500"
            onClick={() => {
              alert()
            }}
          >
            Realizar Pedido
          </ResponsibleButton>
        </div>
      </footer>
    </div>
  );
}