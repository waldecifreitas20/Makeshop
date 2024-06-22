import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { UserContextProvider } from "./providers/user.provider";


export function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}