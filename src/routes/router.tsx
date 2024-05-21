import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home/Home.page";

export const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
]);