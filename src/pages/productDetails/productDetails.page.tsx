import { useContext, useEffect, useRef, useState } from "react";
import { Toast } from "../../components/Toast";
/* COMPONENTS */
import { Navbar } from "../../components/Navbar";
import { productServices } from "../../services/products.services";
import { Spinner } from "../../components/Spinner";
import { ProductInfo } from "../../components/ProductInfo";
import { ResponsibleButton } from "../../components/ResponsibleButton";
import { Newsletter } from "../../components/Newsletter";
import { Footer } from "../../components/Footer";
import { ProductQtdSelector } from "../../components/ProductQtdSelector";
/* METHODS */
import { PageRouter } from "../../routes/PageRouter";
import { routes } from "../../routes/routes";
import { cartServices } from "../../services/cart.services";
import { BackHomeButton } from "../../components/BackHomeButton";
import { CartContext } from "../../providers/cart.provider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export function ProductDetailsPage() {

  const productQtd = useRef(1);

  const [product, setProduct] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  const cartProvider = useContext(CartContext);

  useEffect(() => {
    const productID = window.location.search.replace("?", "");

    productServices.getProduct(productID)
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

  function onBuyProduct() {
    cartServices.addItem(product, productQtd.current);
    PageRouter.goTo(routes.cart)
  }

  function onAddToCart() {
    cartProvider.addItem(product, productQtd.current);
    toast("Produto adicionado ao carrinho");
  }

  return (
    <>
      <Navbar />

      <main>
        {
          isLoading ?
            <div className="h-screen flex justify-center items-center">
              <Spinner />
            </div>
            :
            <>
              <div className="px-5">
                  <Toast />
              
                <div className="my-2 md:w-[90%] mx-auto">
                  <BackHomeButton />
                </div>

                {/* PRODUCT */}
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
                      <ProductQtdSelector
                        initialValue={productQtd.current}
                        minValue={1}
                        onChange={(value: number) => {
                          productQtd.current = value;
                        }} />
                    </div>

                    <div className="md:w-[70%] gap-2">
                      <ResponsibleButton style="border" onClick={() => onBuyProduct()}>Comprar</ResponsibleButton>
                      <ResponsibleButton
                        style="border border-black hover:border-pink-500"
                        background="bg-white hover:bg-pink-500"
                        textColor="text-black hover:text-white"
                        onClick={() => onAddToCart()}
                      >
                        Adicionar ao carrinho
                      </ResponsibleButton>
                    </div>
                  </div>

                </div>

                {/* DESCRIPTION */}
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