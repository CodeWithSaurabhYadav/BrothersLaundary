import React, { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import ReactDOM from "react-dom/client";

import Core from "./layouts/Core";
import Dashboard from "./layouts/Dashboard";

import PageNotFount404 from "./layouts/pageNotFount404";

import LoadingScreen from "./layouts/LoadingScreen";

import "./index.css";
import Auth from "./layouts/Auth";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

// lazy loading elements
const Home = Loadable(lazy(() => import("./pages/Home")));
const Locations = Loadable(lazy(() => import("./pages/Locations")));
const Services = Loadable(lazy(() => import("./pages/Services")));
const About = Loadable(lazy(() => import("./pages/About")));
const CollectionsDelivery = Loadable(lazy(() => import("./pages/CollectionsDelivery")));
const App = Loadable(lazy(() => import("./App")));

const Login = Loadable(lazy(() => import("./pages/auth/Login")));
const Register = Loadable(lazy(() => import("./pages/auth/Register")));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Core />,
    children: [
      { path: "/", element: <Home /> },
      { path: "locations", element: <Locations /> },
      { path: "locations/:postalCode", element: <Locations /> },
      { path: "services", element: <Services /> },
      { path: "about", element: <About /> },
      { path: "collections-delivery", element: <CollectionsDelivery /> },
      { path: "dashboard", element: <Dashboard />},
      { path: "404", element: <PageNotFount404 /> },
      { path: "*", element: <Navigate to="/404" replace /> },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      { path: "login", element: <Login /> },
      {  path: "register", element: <Register /> },
      { path: "404", element: <PageNotFount404 /> },
      { path: "*", element: <Navigate to="/404" replace /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
