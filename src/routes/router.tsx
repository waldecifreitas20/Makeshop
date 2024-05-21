import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home/Home.page";
import { NotFoundPage } from "../pages/notfound/notfound.page";
import { routes } from "./routes";

export const router = createBrowserRouter([
  { path: routes.home, element: <HomePage /> },
  { path: routes.notfound, element: <NotFoundPage /> },
]);