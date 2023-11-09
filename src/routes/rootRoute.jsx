import {Route} from "@tanstack/react-router";
import App from "@/app/app";
import Login from "@/app/pages/login";
import {rootRoute} from "@/app/main";

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

export const rootIndexroutes = [indexRoute, loginRoute]