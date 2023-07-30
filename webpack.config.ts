import webpack from "webpack";
import path from "path";

import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { IBuildEnv, IBuildPath } from "./config/build/types/config";

const paths: IBuildPath = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const config = ({ port, mode }: IBuildEnv): webpack.Configuration => {
  const currentMode = mode || "development";
  return buildWebpackConfig({
    mode: currentMode,
    paths,
    isDev: currentMode == "development",
    port: port || 3000,
  });
};

export default (env: IBuildEnv) => config(env);
