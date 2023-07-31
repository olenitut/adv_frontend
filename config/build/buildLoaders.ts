import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { IBuildOptions } from "./types/config";

export const buildLoaders = (options: IBuildOptions): webpack.RuleSetRule[] => {
  const typescript = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  const styleLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      !options.isDev ? MiniCssExtractPlugin.loader : "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => resPath.endsWith(".module.scss"),
            localIdentName: "[local]_[hash:base64:5]",
          },
        },
      },
      "sass-loader",
    ],
  };
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2)$/i,
    use: [{ loader: "file-loader" }],
  };
  return [typescript, styleLoaders, svgLoader, fileLoader];
};
