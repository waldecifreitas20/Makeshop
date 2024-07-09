import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { UserContextProvider } from "./providers/user.provider";
import { ProductProvider } from "./providers/product.provider";
import { CartProvider } from "./providers/cart.provider";


export function App() {
  return (
    <UserContextProvider>
      <ProductProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ProductProvider>
    </UserContextProvider>
  );
}