import { useContext } from "react";
import { CartContext } from "../../providers/cart.provider";

import { Navbar } from "../../components/Navbar";
import { ResponsibleButton } from "../../components/ResponsibleButton";
import { CartItemCardsList } from "./components/CartItemCardsList";
import { EmptyCartPageBody } from "./components/EmptyCart";


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

  return (
    <div className="h-screen">

      <Navbar />

      <main className="px-4 lg:px-40">

        <div className="flex justify-between">
          <h2 className="text-2xl">Meu carrinho</h2>
          <button
            className={clearCartButtonStyle}
            onClick={() => cartProvider.clearCart()}
          >
            Esvaziar carrinho
          </button>
        </div>

        {/* ITEMS */}
        <div className="lg:px-5 mt-5">
          {cartProvider.cartItems.length === 0 ?
            <EmptyCartPageBody />
            :
            <CartItemCardsList />
          }
        </div>
      </main>

      <footer className="w-full mt-4 text-white">

        <div className="h-[130px]"></div>
        <div className="
          fixed 
          bg-black 
          w-full 
          bottom-0 
          px-5 py-3
          
          md:bg-white
          md:text-black
          md:border-t-2
          md:flex
          md:px-10
          
          lg:px-40
        ">
          <div className="md:w-full grow md:text-lg">
            <p>Qtd. Items: {cartProvider.cartItems.length} </p>
            <p className="font-semibold">Total de Produtos: R$ {cartProvider.totalCost}</p>
          </div>

          <ResponsibleButton
            style={`
              border border-white 
              md:w-[450px]
             
              ${cartProvider.cartItems.length === 0 ? 'opacity-30' : ''}
              `}
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