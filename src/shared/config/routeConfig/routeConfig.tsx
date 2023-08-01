import { RouteProps } from "react-router-dom";
import AboutAsync from "pages/About/About.async";
import MainAsync from "pages/Main/Main.async";
import { NotFound } from "pages/NotFound";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  NOT_FOUND = "not-found",
}

export const RoutPaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: RouteProps[] = [
  {
    path: RoutPaths.main,
    element: <MainAsync />,
  },
  {
    path: RoutPaths.about,
    element: <AboutAsync />,
  },
  {
    path: RoutPaths["not-found"],
    element: <NotFound />,
  },
];
