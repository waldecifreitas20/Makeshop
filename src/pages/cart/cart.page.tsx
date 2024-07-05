import { Navbar } from "../../components/Navbar";
import { productServices } from "../../services/products.services";
import { ProductCard } from "./components/ProductCard";
import { ResponsibleButton } from "../../components/ResponsibleButton";
import { cartServices } from "../../services/cart.services";
import { useEffect, useState } from "react";
import { PageRouter } from "../../routes/PageRouter";
import { routes } from "../../routes/routes";

const btnRemoveStyle = `
rounded-full
border border-red-500
hover:bg-red-500 
text-red-500 text-sm
hover:text-white 
px-2 py-1
transition-all duration-200
`;

export function CartPage() {
  const [products, setProducts] = useState<Array<Product>>(cartServices.getProducts);


  function addProduct(product: Product) {
    cartServices.addProduct(product);
    updateState();
  }

  function clearCart() {
    cartServices.clearCart();
    updateState();
  }

  function updateState() {
    setProducts(cartServices.getProducts());
  }

  function getProductsCard() {
    return products.map((product, i) => {
      return (
        <ProductCard
          key={i}
          product={productServices.parseToProduct(product)}
          onDelete={() => {

          }}
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
            className={btnRemoveStyle}
            onClick={() => clearCart()}
          >Esvaziar carrinho</button>
        </div>

        <div className="lg:px-5 mt-5 size-full">
          {
            products.length === 0 ? (
              <div className="
                flex flex-col
                items-center
                justify-center
              
                h-full w-full max-w-[450px]
                mt-40 mx-auto
              ">
                <p className="text-neutral-500 text-center text-2xl mb-10">Você ainda não adicionou nenhum produto</p>
                <ResponsibleButton style="max-w-[300px]" onClick={()=> PageRouter.goTo(routes.home)}>Voltar às compras</ResponsibleButton>
              </div>
            ) :
              getProductsCard()
          }

        </div>

      </main>
    </>
  );
}