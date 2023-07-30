import { RouteProps } from "react-router-dom";
import AboutAsync from "pages/About/About.async";
import MainAsync from "pages/Main/Main.async";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const RoutPaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
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
];
