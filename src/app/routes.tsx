import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { ProductPage } from "./components/ProductPage";
import { ForMuseumsPage } from "./components/ForMuseumsPage";
import { ForVisitorsPage } from "./components/ForVisitorsPage";
import { AboutPage } from "./components/AboutPage";
import { ContactPage } from "./components/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "product", Component: ProductPage },
      { path: "for-museums", Component: ForMuseumsPage },
      { path: "for-visitors", Component: ForVisitorsPage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: HomePage },
    ],
  },
]);
