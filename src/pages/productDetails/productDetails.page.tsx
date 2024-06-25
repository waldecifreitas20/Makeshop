import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { appColors } from "../../global/colors";
import { productServices } from "../../services/products.services";
import { Spinner } from "../../components/Spinner";

export function ProductDetailsPage() {

  const [product, setProduct] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const productID = window.location.search.replace("?", "");
    console.log(productID);

    productServices
      .getProduct(productID)
      .then(response => {
        console.log(response);
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

      <main className="mt-20 md:mt-28 ">
        {
          isLoading ?
            <div className="h-screen flex justify-center items-center">
              <Spinner />
            </div>
            :
            <div>
              <img src={product.imgPath} alt="produto" />

              <h2 className="capitalize">{`${product.name} ${product.manufacturer}`}</h2>
              <p className="capitalize">Descrição</p>

              <div className="mt-4 md:m-0">
                {/* Old price */}
                <p className={`text-sm${appColors.texts.dimmed} text-line-through`}>{(() => {
                  let oldPrice: number = Number.parseFloat(product.price) * 1.25;
                  return <>{`R$ ${oldPrice.toFixed(2)}`}</>;
                })()}</p>

                {/* Current Price */}
                <p className={`text-lg font-bold`
                }>{`R$ ${Number.parseFloat(product.price).toFixed(2)}`}</p>

                {/* With credit card */}
                <p className={`text-sm`}>{`ou 10x de R$ ${(Number.parseFloat(product.price) / 10).toFixed(2)}`}</p>
              </div>

            </div>
        }

      </main>
    </>
  );
}