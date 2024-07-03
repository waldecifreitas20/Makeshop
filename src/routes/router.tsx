import { createBrowserRouter } from "react-router-dom";

/* PAGES */
import { HomePage } from "../pages/home/Home.page";
import { NotFoundPage } from "../pages/notfound/notfound.page";
import { routes } from "./routes";
import { LoginPage } from "../pages/login/login.page";
import { SignUpPage } from "../pages/signup/singUp.page";
import { ProductDetailsPage } from "../pages/productDetails/productDetails.page";
import { CartPage } from "../pages/cart/cart.page";

export const router = createBrowserRouter([
  { path: routes.home, element: <HomePage /> },
  { path: routes.login, element: <LoginPage /> },
  { path: routes.signUp, element: <SignUpPage /> },
  { path: routes.notfound, element: <NotFoundPage /> },
  { path: routes.cart, element: <CartPage /> },
  { path: routes.productDetails, element: <ProductDetailsPage /> },
]);