import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
   },
]);
