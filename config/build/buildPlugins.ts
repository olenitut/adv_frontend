import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { IBuildOptions } from "./types/config";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export const buildPlugins = ({
  paths,
  isDev,
}: IBuildOptions): webpack.WebpackPluginInstance[] => {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: isDev,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ];
};
