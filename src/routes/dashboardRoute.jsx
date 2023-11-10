import {Outlet, redirect, Route} from "@tanstack/react-router";
import {account} from "@/lib/database";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Sidebar} from "@/components/sidebar";
import Home from "@/app/pages/home";
import React from "react";
import {rootRoute, router} from "@/app/main";
import Template from "@/app/pages/template";
import Learn from "@/app/pages/learn";

const queryClient = new QueryClient()

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
    return (
      <QueryClientProvider client={queryClient}>
        <div className="md:block min-h-screen bg-yellow-400">
          <div className="grid lg:grid-cols-5">
            <Sidebar className="lg:block" />
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

export const homeRoute = new Route({
  getParentRoute: () => dashboardRootRoute,
  path: '/',
  component: () => {
    return (
      <Home />
    )
  }
})

export const templateRoute = new Route({
  getParentRoute: () => dashboardRootRoute,
  path: '/template',
  component: () => {
    return (
      <Template />
    )
  }
})

export const learningRoute = new Route({
  getParentRoute: () => dashboardRootRoute,
  path: '/learn',
  component: () => {
    return (
      <Learn />
    )
  }
})

dashboardRootRoute.addChildren([homeRoute, templateRoute, learningRoute])

export { dashboardRootRoute }