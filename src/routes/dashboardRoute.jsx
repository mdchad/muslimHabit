import {Outlet, redirect, Route} from "@tanstack/react-router";
import {account, databases} from "@/lib/database";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Sidebar} from "@/components/sidebar";
import Home from "@/app/pages/home";
import React from "react";
import {rootRoute, router} from "@/app/main";
import Template from "@/app/pages/template";
import Learn from "@/app/pages/learn";
import {HabitSheet} from "@/components/habit-sheet";

const queryClient = new QueryClient()

const dashboardRootRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/app',
  id: 'authenticated',
  beforeLoad: async (data) => {
  //   async function isAuthenticated() {
  //     try {
  //       const res = await account.getSession('current');
  //       return res
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //
  //   if (!await isAuthenticated()) {
  //     throw redirect({
  //       to: '/login',
  //       search: {
  //         // Use the current location to power a redirect after login
  //         // (Do not use `router.state.resolvedLocation` as it can
  //         // potentially lag behind the actual current location)
  //         redirect: router.state.location.href,
  //       },
  //     })
  //   }
  },
  component: () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="md:block h-screen bg-yellow-400">
          <div className="grid h-full lg:grid-cols-5">
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
  beforeLoad: () => {
    return { queryOptions: { queryKey: ['habits'], queryFn: async () => {
          return await databases.listDocuments(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            import.meta.env.VITE_APPWRITE_COLLECTION_ID
          )}
    } }
  },
  loader: async ({ context: { queryClient, queryOptions } }) => {
    await queryClient.ensureQueryData(queryOptions)
  },
  component: ({ useRouteContext }) => {
    return (
      <Home useRouteContext={useRouteContext}/>
    )
  }
})

export const templateRoute = new Route({
  getParentRoute: () => dashboardRootRoute,
  path: 'template',
  component: () => {
    return (
      <Template />
    )
  }
})

export const learningRoute = new Route({
  getParentRoute: () => dashboardRootRoute,
  path: 'learn',
  component: () => {
    return (
      <Learn />
    )
  }
})

export const HabitSheetRoute = new Route({
  getParentRoute: () => homeRoute,
  path: '$id',
  beforeLoad: ({ params }) => {
    console.log(params)
    return { queryOptions: { queryKey: ['habit', params.id], queryFn: async () => {
          return await databases.getDocument(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            import.meta.env.VITE_APPWRITE_COLLECTION_ID,
            params.id
          )}
      } }
  },
  loader: async ({ context: { queryClient, queryOptions } }) => {
    await queryClient.ensureQueryData(queryOptions)
  },
  component: ({ useRouteContext}) => {
    return (
      <HabitSheet useRouteContext={useRouteContext}/>
    )
  }
})

dashboardRootRoute.addChildren([homeRoute, templateRoute, learningRoute, HabitSheetRoute])

export { dashboardRootRoute }