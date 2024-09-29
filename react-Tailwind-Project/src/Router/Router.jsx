import { createBrowserRouter } from "react-router-dom";
import Contact from "../pages/Contact";
import About from "../pages/About";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
