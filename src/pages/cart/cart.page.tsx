import { Navbar } from "../../components/Navbar"
import { ProductInfo } from "../../components/ProductInfo";
import { Tile } from "../../components/Tile";
import { productServices } from "../../services/products.services";
import { ProductQtdSelector } from "../productDetails/components/QuantitySelector";

export function CartPage() {
  const btnRemoveStyle = `
    rounded-full
    border border-red-500
    hover:bg-red-500 
    text-red-500 text-sm
    hover:text-white 
    px-2 py-1
    transition-all duration-200
  `;

  const products = [
    {
      "id": "1",
      "name": "Kit de Olhos",
      "desc": "kit de olhos Big set lancome",
      "price": "199.90",
      "manufacturer": "Lancôme",
      "isFreeShipping": "true",
      "isVip": "false",
      "category": "makeup",
      "imgPath": "./images/product1.png"
    }
  ];

  function removeItem(productId: string) {
    alert("produto removido")
  }

  return (
    <>
      <Navbar />

      <main className="px-4">

        <div className="flex justify-between">
          <h2 className="text-2xl">Meu carrinho</h2>
          <button
            className={btnRemoveStyle}>Esvaziar carrinho</button>
        </div>

        <div className="lg:px-5 mt-5">
          {
            products.map((product, i) => {
              const productImg = (
                <div className="w-[30%] h-full flex flex-col justify-between">
                  <img src={product.imgPath} className="block h-full mx-auto mb-1" alt={`${product.name}`} />
                  <button className={btnRemoveStyle} onClick={() => removeItem("")}>Remover</button>
                </div>
              );
              return (
                <div key={i} className="shadow-md rounded-lg px-2 py-2">
                  <Tile leading={productImg}>
                    <div className="ml-2">
                      <h3 className="font-medium">{`${product.name} ${product.manufacturer}`}</h3>

                      <div className="mt-4">
                        <ProductInfo product={productServices.parseToProduct(product)} />
                        <ProductQtdSelector initialValue={1} minValue={1} />
                      </div>
                    </div>
                  </Tile>
                </div>
              );
            })
          }
        </div>

      </main>
    </>
  );
}