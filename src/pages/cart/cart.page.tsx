import { Navbar } from "../../components/Navbar";
import { CarItemCard } from "./components/CartItemCard";
import { ResponsibleButton } from "../../components/ResponsibleButton";
import { useContext } from "react";
import { PageRouter } from "../../routes/PageRouter";
import { routes } from "../../routes/routes";
import { CartContext } from "../../providers/cart.provider";

const clearCartButtonStyle = `
  rounded-full
  hover:bg-red-500 
  text-red-500 text-sm
  hover:text-white 
  px-2 py-1
  transition-all duration-200
`;

export function CartPage() {

  const cartProvider = useContext(CartContext);
  
  function getProductsCard() {
    return cartProvider.cartItems.map((cartItem, i) => {
      return (
        <CarItemCard
          key={i}
          item={cartItem}
          onDelete={() => cartProvider.removeItem(cartItem.id)}
          onQuantityChange={(qtd: number) => cartProvider.updateItemQtd(cartItem.id, qtd)}
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
            onClick={() => cartProvider.clearCart()}
          >
            Esvaziar carrinho
          </button>
        </div>

        <div className="lg:px-5 mt-5">
          {
            cartProvider.cartItems.length === 0 ? (
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
          <p>Qtd. Items: {cartProvider.cartItems.length} </p>
          <p>Total de Produtos: R$ {cartProvider.totalCost}</p>

          <ResponsibleButton
            style={`border border-white ${cartProvider.cartItems.length === 0 ? 'opacity-30' : ''}`}
            disabled={cartProvider.cartItems.length === 0}
            background={`bg-black ${cartProvider.cartItems.length === 0 ? "" : "hover:bg-pink-500"}`}
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