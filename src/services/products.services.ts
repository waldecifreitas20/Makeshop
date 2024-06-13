import { firebase } from "../firebase";
import { products } from "../mocks/products.json";

async function getProducts() {
  /* try {
    return await firebase.getDocuments("products")
  } catch (error: any) {
    console.log(error);
    throw Error(`Unable to fetch products. Details: ${error}`);
  } */

  return products;
}






function parseToProduct(obj: any): Product {
  return {
    name: obj.name,
    desc: obj.desc,
    price: Number.parseFloat(obj.price),
    manufacturer: obj.manufacturer,
    category: obj.category,
    isVip: obj.isVip === "true",
    isFreeShipping: obj.isFreeShipping === "true",
    imgPath: obj.imgPath,
  }
}

export const productServices = {
  parseToProduct,
  getProducts
}