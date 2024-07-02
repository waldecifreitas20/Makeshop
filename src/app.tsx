import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { UserContextProvider } from "./providers/user.provider";
import { ProductProvider } from "./providers/product.provider";


export function App() {
  return (
    <UserContextProvider>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </UserContextProvider>
  );
}