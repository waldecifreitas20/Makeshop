import { storageServices } from "./storage.services"

const CART_ITEMS = "cart"

function getItems(): Array<CartItem> {
  try {
    return storageServices.getItem(CART_ITEMS);
  } catch (error) {
    return [];
  }
}

function addItem(item: CartItem) {
  let cart: Array<any> = [];
  try {
    cart = storageServices.getItem(CART_ITEMS);
  } catch (err: any) { }

  storageServices.setItem(CART_ITEMS, [...cart, item]);
}

function removeItem(itemId: string) {

  const cart = storageServices.getItem(CART_ITEMS) as Array<any>;
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
  const cart = storageServices.getItem(CART_ITEMS) as Array<any>;
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