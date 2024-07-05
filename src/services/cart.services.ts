import { storageServices } from "./storage.services"

const PRODUCTS_LIST = "products"

function getProducts() {
  try {
    return storageServices.getItem(PRODUCTS_LIST);
  } catch (error) {
    return [];
  }
}

function addProduct(product: Product) {
  let productsList: Array<any> = [];
  try {
    productsList = storageServices.getItem(PRODUCTS_LIST);
  } catch (err: any) { }

  storageServices.setItem(PRODUCTS_LIST, [...productsList, product]);
}

function removeProduct(productId: string) {

  const products = storageServices.getItem(PRODUCTS_LIST) as Array<any>;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    if (product.id === productId) {
      products.splice(i, 1);
      break
    }
  }

  storageServices.setItem(PRODUCTS_LIST, products);
}

function clearCart() {
  storageServices.setItem(PRODUCTS_LIST, []);
}


export const cartServices = {
  addProduct,
  removeProduct,
  clearCart,
  getProducts,
}