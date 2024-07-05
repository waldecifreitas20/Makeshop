import { storageServices } from "./storage.services"

function getProducts() {
  try {
    return storageServices.getItem("products");
  } catch (error) {
    return [];
  }
}

function addProduct(product: Product) {
  let productsList: Array<any> = [];
  try {
    productsList = storageServices.getItem("products");
  } catch (err: any) { }

  storageServices.setItem("products", [...productsList, product]);
}

function removeProduct(productId: string) {
  storageServices.setItem(productId, "");
}

function clearCart() {
  storageServices.setItem("products", []);
}


export const cartServices = {
  addProduct,
  removeProduct,
  clearCart,
  getProducts,
}