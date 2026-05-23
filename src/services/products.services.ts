import { products } from "../mocks/products.json";


async function getProducts() {
  try {
    return [...products];
  } catch (error: any) {
    throw Error(`Unable to fetch products. Details: ${error.message}`);
  }
}

async function getProduct(id: string) {
  const product = products.find(product => product.id === id);

  if (!product) {
    throw "Product does not exists";
  }

  return product;
}

function parseToProduct(obj: any): Product {
  return {
    id: obj.id,
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
  getProducts,
  getProduct,
}