import { useEffect, useState } from "react";

import { Navbar } from "../../components/Navbar";
import { productServices } from "../../services/products.services";
import { Spinner } from "../../components/Spinner";
import { ProductInfo } from "../../components/ProductInfo";
import { ProductQtdSelector } from "./components/QuantitySelector";
import { ResponsibleButton } from "../../components/ResponsibleButton";
import { Newsletter } from "../../components/Newsletter";
import { Footer } from "../../components/Footer";
import { PageRouter } from "../../routes/PageRouter";
import { routes } from "../../routes/routes";

export function ProductDetailsPage() {
  const horizontalPadding = "px-5";

  const [product, setProduct] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const productID = window.location.search.replace("?", "");

    productServices
      .getProduct(productID)
      .then(response => {
        setProduct(response);
      })
      .catch(() => {
        PageRouter.goTo(routes.notfound);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, []);

  return (
    <>
      <Navbar />
      
      <main className="mt-20 md:mt-28 lg:mt-32">
        {
          isLoading ?
            <div className="h-screen flex justify-center items-center">
              <Spinner />
            </div>
            :
            <>
              <div className={`${horizontalPadding}`}>

                <div className="mx-auto md:flex justify-center xl:justify-between xl:w-[1200px]">
                  {/* IMAGE */}
                  <div className={`h-[300px] w-full md:w-[50%]`}>
                    <img className="block h-full mx-auto" src={product.imgPath} alt="produto" />
                  </div>

                  {/* DETAILS */}
                  <div className="md:w-[50%] lg:max-w-[500px] lg:ml-4">
                    <h2 className="capitalize text-xl md:text-2xl">{`${product.name} ${product.manufacturer}`}</h2>

                    <div className="mt-4">
                      <ProductInfo product={product} />
                      <ProductQtdSelector initialValue={1} minValue={1} />
                    </div>

                    <div className="md:w-[70%] gap-2">
                      <ResponsibleButton style="border" onClick={() => PageRouter.goTo(routes.cart)}>Comprar</ResponsibleButton>
                      <ResponsibleButton
                        style="border border-black hover:border-pink-500"
                        background="bg-white hover:bg-pink-500"
                        textColor="text-black hover:text-white"
                        onClick={() => {
                          
                        }}
                      >Adicionar ao carrinho</ResponsibleButton>
                    </div>
                  </div>

                </div>

                <div className="my-10 py-5 border-b border-t md:w-[90%] mx-auto">
                  <h3 className="text-xl mb-5">Descrição</h3>
                  <p className="text-neutral-700 text-justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor tempora deleniti dolores rem illum possimus natus, saepe itaque corrupti laudantium debitis asperiores! Iste maxime facere reprehenderit ut at error temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo corrupti quia, impedit assumenda earum maiores nihil harum esse, blanditiis recusandae pariatur dolorem rem consequatur, ipsa veritatis possimus. Deleniti, saepe suscipit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor tempora deleniti dolores rem illum possimus natus, saepe itaque corrupti laudantium debitis asperiores! Iste maxime facere reprehenderit ut at error temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo corrupti quia, impedit assumenda earum maiores nihil harum esse, blanditiis recusandae pariatur dolorem rem consequatur, ipsa veritatis possimus. Deleniti, saepe suscipit.
                  </p>
                </div>
              </div>

              <Newsletter />

              <Footer />
            </>
        }

      </main >
    </>
  );
}