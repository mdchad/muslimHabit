import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "../client/pages/login";
import "./index.css";
import {Link, Outlet, RootRoute, Route, Router, RouterProvider} from "@tanstack/react-router";

const rootRoute = new RootRoute()

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
})

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login
})

const dashboardRootRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/app',
  component: () => {
    return (
      <>
        <div className="p-2 flex gap-2">
          <Link to="/app" className="[&.active]:font-bold">
            Home
          </Link>{' '}
          <Link to="/app/about" className="[&.active]:font-bold">
            About
          </Link>
        </div>
        <hr />
        <Outlet />
      </>
    )
  }
})

const homeRoute = new Route({
  getParentRoute: () => dashboardRootRoute,
  path: '/',
  component: () => {
    return (
     <div>Yoooooo</div>
    )
  }
})

const aboutRoute = new Route({
  getParentRoute: () => dashboardRootRoute,
  path: '/about',
  component: () => {
    return (
      <div>abouttt</div>
    )
  }
})


const routeTree = rootRoute.addChildren([indexRoute, loginRoute, dashboardRootRoute.addChildren([homeRoute, aboutRoute])])

const router = new Router({ routeTree })

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
