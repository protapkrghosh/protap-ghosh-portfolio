import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main";
import NotFound from "../Pages/NotFound/NotFound";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
   },
   {
      path: "*",
      element: <NotFound></NotFound>
   }
]);
