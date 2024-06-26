import { useEffect, useMemo, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { appColors } from "../../global/colors";
import { productServices } from "../../services/products.services";
import { Spinner } from "../../components/Spinner";
import { ProductInfo } from "../../components/ProductInfo";
import { ProductQtdSelector } from "./components/QuantitySelector";

export function ProductDetailsPage() {

  const [product, setProduct] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const productID = window.location.search.replace("?", "");

    productServices
      .getProduct(productID)
      .then(response => {
        setProduct(response);
      })
      .catch(e => {
        // window.location.search = "";
        // window.location.pathname = routes.notfound;
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, []);

  return (
    <>
      <Navbar />

      <main className="mt-20 md:mt-28 px-5">
        {
          isLoading ?
            <div className="h-screen flex justify-center items-center">
              <Spinner />
            </div>
            :
            <>
              <div className="h-[300px] w-full">
                <img className="block h-full mx-auto" src={product.imgPath} alt="produto" />
              </div>

              <h2 className="capitalize">{`${product.name} ${product.manufacturer}`}</h2>
              <p className="capitalize">Descrição</p>

              <div className="mt-4 md:m-0">
                <ProductInfo product={product} />
                <ProductQtdSelector />
              </div>
            </>
        }

      </main>
    </>
  );
}