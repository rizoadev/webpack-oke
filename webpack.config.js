const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dirApp = path.join(__dirname, "");

module.exports = {
  mode: process.env.NODE_DEV,
  devtool: "eval",
  entry: "./src/index.js",
  devServer: {
    host: "0.0.0.0",
    port: 9001,
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(dirApp, "index.html"),
      minify: true,
      inject: true,
      chunks: ["index"],
    }),
  ],
};
