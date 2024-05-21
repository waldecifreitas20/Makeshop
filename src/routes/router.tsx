import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "../pages/home/Home.page";
import { NotFoundPage } from "../pages/notfound/notfound.page";
import { routes } from "./routes";
import { LoginPage } from "../pages/login/login.page";

export const router = createBrowserRouter([
  { path: routes.home, element: <HomePage /> },
  { path: routes.login, element: <LoginPage /> },
  { path: routes.notfound, element: <NotFoundPage /> },
]);