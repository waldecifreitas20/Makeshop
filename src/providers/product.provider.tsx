import { PropsWithChildren, createContext, useState } from "react";
import { productServices } from "../services/products.services";

interface ProductProviderValues {
  getForAnyClient: CallableFunction;
  getForVips: CallableFunction;
  getAll: CallableFunction;
  initProductsData: CallableFunction;
}

const values: ProductProviderValues = {
  getForAnyClient() { },
  getForVips() { },
  getAll() { },
  initProductsData() { }
};

export const ProductContext = createContext(values);

export function ProductProvider(props: PropsWithChildren) {
  let allProducts: Array<any> = [];
  let vips: Array<any> = [];
  let anyClient: Array<any> = [];

  let hasInitialized = false;

  async function initProductsData(): Promise<boolean> {
    return productServices.getProducts()
      .then((productsData: Array<any>) => {
        allProducts = productsData;
        vips = [];
        anyClient = [];

        allProducts.forEach(product => {
          if (product.isVip) {
            vips.push(product);
          } else {
            anyClient.push(product);
          }
        });
        hasInitialized = true;
        return true;
      })
      .catch(err => {
        console.error(err);
        return false;
      });
  }

  function checkInitialization() {
    if (!hasInitialized) {
      throw Error("Products provider has to be initialized before get data.");
    }
  }

  function getForVips() {
    checkInitialization();
    return [...vips];
  };

  function getForAnyClient() {
    checkInitialization();
    return [...anyClient];
  };

  function getAll() {
    checkInitialization();
    return [...allProducts];
  }


  return (
    <>
      <ProductContext.Provider value={{
        getForAnyClient,
        getForVips,
        getAll,
        initProductsData
      }}>
        {props.children}
      </ProductContext.Provider>
    </>
  );
}