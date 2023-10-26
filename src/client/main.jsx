import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "../client/pages/login";
import "./index.css";
import {Link, Outlet, redirect, RootRoute, Route, Router, RouterProvider, useNavigate} from "@tanstack/react-router";
import {account} from "@/lib/database";
import {Button} from "@/components/ui/button";

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
  id: 'authenticated',
  beforeLoad: async () => {
    async function isAuthenticated() {
      try {
        const res = await account.getSession('current');
        console.log(res)
        return res
      } catch (err) {
        console.log(err)
      }
    }

    if (!await isAuthenticated()) {
      throw redirect({
        to: '/login',
        search: {
          // Use the current location to power a redirect after login
          // (Do not use `router.state.resolvedLocation` as it can
          // potentially lag behind the actual current location)
          redirect: router.state.location.href,
        },
      })
    }
  },
  component: () => {
    async function handleSignOut() {
      try {
        const res = await account.deleteSession('current');
        await router.navigate({ to: '/login' })
      } catch (err) {
        console.log(err)
      }
    }

    return (
      <>
        <div className="p-2 flex gap-2">
          <Link to="/app/" className="[&.active]:font-bold">
            Home
          </Link>{' '}
          <Link to="/app/about" className="[&.active]:font-bold">
            About
          </Link>
          <Button onClick={handleSignOut}>
            Log out
          </Button>
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
