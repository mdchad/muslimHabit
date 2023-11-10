import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import Login from "./pages/login";
import "./index.css";
import { RootRoute, Router, RouterProvider } from "@tanstack/react-router";
import {dashboardRootRoute} from "@/routes/dashboardRoute";
import {rootIndexroutes} from "@/routes/rootRoute";
import {QueryClient} from "@tanstack/react-query";

export const rootRoute = new RootRoute()

const queryClient = new QueryClient()

const routeTree = rootRoute.addChildren([...rootIndexroutes, dashboardRootRoute])

export const router = new Router({ routeTree, context: {
    queryClient,
  } })

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
