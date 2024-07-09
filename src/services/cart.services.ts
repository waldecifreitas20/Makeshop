import { storageServices } from "./storage.services"

const CART_ITEMS = "cart"

function getItems(): Array<CartItem> {
  try {
    return storageServices.getItem(CART_ITEMS) as Array<any>;
  } catch (error) {
    return [];
  }
}

function addItem(product: Product, qtd: number) {
  let cart: Array<any> = [];

  const item: CartItem = {
    id: product.id,
    product,
    qtd,
  }

  try {
    cart = getItems();
  } catch (err: any) { }

  if (hasItem(item.product.id)) {
    updateQuantity(item.id, qtd);
    return;
  }

  storageServices.setItem(CART_ITEMS, [...cart, item]);
}

function hasItem(productId: string) {
  const cart = getItems();

  for (const item of cart) {
    if (item.product.id === productId) {
      return true;
    }
  }

  return false;
}

function removeItem(itemId: string) {

  const cart = getItems();
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];

    if (item.id === itemId) {
      cart.splice(i, 1);
      break
    }
  }

  storageServices.setItem(CART_ITEMS, cart);
}

function clearCart() {
  storageServices.setItem(CART_ITEMS, []);
}

function updateQuantity(itemId: string, qtd: number) {
  const cart = getItems();
  for (let i = 0; i < cart.length; i++) {
    
    if (cart[i].id === itemId) {
      cart[i].qtd = qtd;
      break;
    }
  }
  storageServices.setItem(CART_ITEMS, cart);
}

function getTotalCost() {
  let totalCost = 0;
  for (const item of getItems()) {
    const itemCost = item.product.price * item.qtd;
    totalCost += itemCost;
  }

  return totalCost.toFixed(2).replace('.', ',');
}

export const cartServices = {
  addItem,
  removeItem,
  getItems,
  clearCart,
  updateQuantity,
  getTotalCost
}