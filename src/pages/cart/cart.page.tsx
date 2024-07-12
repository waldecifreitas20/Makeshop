import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../../providers/cart.provider";

import { Navbar } from "../../components/Navbar";
import { ResponsibleButton } from "../../components/ResponsibleButton";
import { CartItemCardsList } from "./components/CartItemCardsList";
import { EmptyCartPageBody } from "./components/EmptyCart";
import { Modal } from "../../components/Modal";
import { userServices } from "../../services/user.services";
import { PageRouter } from "../../routes/PageRouter";
import { routes } from "../../routes/routes";
import { utils } from "../../utils/utils";

export function CartPage() {

  const cartProvider = useContext(CartContext);
  const isAuth = useRef(false);
  const [modal, setModal] = useState(<></>);

  useEffect(() => {
    userServices.hasAuthenticated()
      .then(result => {
        isAuth.current = result;
      });
  });


  function onOrder() {
    if (!isAuth.current) {
      return openModal();
    }
    PageRouter.goTo(routes.purchase);
  }

  function openModal() {
    setModal(
      <Modal style="w-[80%] sm:w-[300px] px-5">
        <p className="text-xl md:text-lg mb-10">É necessário efetuar o login antes de prosseguir</p>
        <ResponsibleButton
          style="border"
          onClick={() => {
            PageRouter.goTo(routes.login);
          }}>
          Ir para o Login
        </ResponsibleButton>
        <ResponsibleButton
          background="bg-transparent hover:bg-black"
          textColor="text-black hover:text-white"
          style="border border-black"
          onClick={() => closeModal()}>
          Cancelar
        </ResponsibleButton>
      </Modal>
    );
  }

  function closeModal() {
    setModal(<></>);
  }

  return (
    <div className="h-screen">

      <Navbar />

      <div>
        {modal}
      </div>

      <main className="px-4 lg:px-40">
        <div className="flex justify-between">
          <h2 className="text-2xl">Meu carrinho</h2>
          <button
            className="
            hover:bg-red-500 
            text-red-500 text-sm
            hover:text-white 
            rounded-full
            px-2 py-1
              transition-all duration-200"
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
            <p className="font-semibold">Total de Produtos: R$ {utils.toCashFormat(cartProvider.totalCost)}</p>
          </div>

          <ResponsibleButton
            style={`
              border border-white 
              md:w-[450px]
             
              ${cartProvider.cartItems.length === 0 ? 'opacity-30' : ''}
              `}
            disabled={cartProvider.cartItems.length === 0}
            background={`bg-black ${cartProvider.cartItems.length === 0 ? "" : "hover:bg-pink-500"}`}
            onClick={() => { onOrder() }}
          >
            Realizar Pedido
          </ResponsibleButton>
        </div>
      </footer>
    </div >
  );
}