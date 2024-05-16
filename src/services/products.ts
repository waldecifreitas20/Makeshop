import { products } from "../mocks/products.json";

function getProducts() {
  return products;
}

function getProductsWhere(condition: boolean) {
  return products.filter((product) => {condition});
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

export { getProducts, parseToProduct, getProductsBy }