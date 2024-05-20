import { ReactElement } from "react";
import { getProducts, parseToProduct } from "../../services/products";
import { ProductCard } from "../../components/ProductCard";
import { getSubArray } from "../../utils/utils";

/* Internal Process */
const productCardsData = (() => {

  const products: {
    all: Array<object>,
    onlyVips: Array<ReactElement<typeof ProductCard>>,
    anyClient: Array<ReactElement<typeof ProductCard>>,
  } = {
    all: getProducts(),
    onlyVips: [],
    anyClient: [],
  }

  for (const product of products.all) {
    const parsedProduct = parseToProduct(product);

    if (parsedProduct.isVip) {
      products.onlyVips.push(
        <ProductCard
          product={parsedProduct}
          badge={{
            colors: "bg-yellow-400 text-black",
            text: "Exclusivo"
          }}
        />
      );
    } else {
      products.anyClient.push(<ProductCard
        product={parseToProduct(product)}
        badge={
          parsedProduct.isFreeShipping ?
            {
              colors: 'bg-lime-500',
              text: 'frete gratis'
            } :
            { colors: '', text: '' }
        }
      />);
    }
  }

  return {
    vips: products.onlyVips,
    anyClient: products.anyClient
  };
})();


/* EXPORTS */
class ProductCardType {
  static VIP = "vip";
  static ANY_CLIENT = "any";
}


function getProductCards(
  productCardType: ProductCardType,
  fromIndex: number,
  newArrayLength: number,
) {
  switch (productCardType) {
    case ProductCardType.VIP:
      return getSubArray(productCardsData.vips, fromIndex, newArrayLength);
    case ProductCardType.ANY_CLIENT:
      return getSubArray(productCardsData.anyClient, fromIndex, newArrayLength);
    default:
      throw "Invalid product card type sent!";
  }
}

function copyToClipboard(value: string, callback: VoidFunction): void {
  window.navigator.clipboard.writeText(value)
    .then(callback);
}

function getBestBrands() {
  return [
    {
      "logoUrl": "./images/brand-absolute-ny.png",
      "name": "lancôme",
      "color": "bg-lime-500"
    },
    {
      "logoUrl": "./images/brand-lancome.png",
      "name": "absolute new york",
      "color": "bg-pink-500"
    },
    {
      "logoUrl": "./images/brand-sisley.png",
      "name": "sisley",
      "color": "bg-yellow-500"
    },
    {
      "logoUrl": "./images/brand-oceane.png",
      "name": "océane",
      "color": "bg-sky-500"
    },
    {
      "logoUrl": "./images/brand-payot.png",
      "name": "payot",
      "color": "bg-violet-500"
    },
    {
      "logoUrl": "./images/brand-roche-posay.png",
      "name": "la roche-posay",
      "color": "bg-red-500"
    }
  ]
}

export {
  copyToClipboard,
  getBestBrands,
  getProductCards,
  ProductCardType
}