import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home/Home.page";
import { NotFoundPage } from "../pages/notfound/notfound.page";

export const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '*', element: <NotFoundPage /> },
]);