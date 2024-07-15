import { createBrowserRouter } from "react-router-dom";

import { routes } from "./routes";
/* PAGES */
import { HomePage } from "../pages/home/Home.page";
import { CartPage } from "../pages/cart/cart.page";
import { LoginPage } from "../pages/login/login.page";
import { SignUpPage } from "../pages/signup/singUp.page";
import { NotFoundPage } from "../pages/notfound/notfound.page";
import { PurchasePage } from "../pages/purchase/purchase.page";
import { ProductDetailsPage } from "../pages/productDetails/productDetails.page";
import { PaymentPage } from "../pages/payment/payment.page";

export const router = createBrowserRouter([
  { path: routes.home, element: <HomePage /> },
  { path: routes.cart, element: <CartPage /> },
  { path: routes.login, element: <LoginPage /> },
  { path: routes.signUp, element: <SignUpPage /> },
  { path: routes.payment, element: <PaymentPage /> },
  { path: routes.notfound, element: <NotFoundPage /> },
  { path: routes.purchase, element: <PurchasePage /> },
  { path: routes.productDetails, element: <ProductDetailsPage /> },
]);