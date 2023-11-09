import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import Login from "./pages/login";
import "./index.css";
import {Link, Outlet, redirect, RootRoute, Route, Router, RouterProvider } from "@tanstack/react-router";
import {account} from "@/lib/database";
import Home from "@/app/pages/home";
import {Sidebar} from "@/components/sidebar";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()
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
      <QueryClientProvider client={queryClient}>
        <div className="hidden md:block min-h-screen bg-yellow-400">
          <div className="grid lg:grid-cols-5">
            <Sidebar className="hidden lg:block" />
            <div className="col-span-3 lg:col-span-4">
              <div className="h-full px-4 py-6 lg:px-8">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </QueryClientProvider>
    )
  }
})

const homeRoute = new Route({
  getParentRoute: () => dashboardRootRoute,
  path: '/',
  component: () => {
    return (
      <Home />
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
