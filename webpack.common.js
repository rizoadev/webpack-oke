const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const dirApp = path.join(__dirname, "src/pages");

/**
 * Webpack Configuration
 */
module.exports = (env) => {
  return {
    entry: {
      main: "./src/js/index.js",
      vendor: "./src/js/vendor.js",
    },
    output: {
      filename: "js/[name].min.js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.join(dirApp, "index.pug"),
        minify: true,
        inject: true,
      }),
    ],
    module: {
      rules: [
        // PUG
        {
          test: /\.pug$/,
          use: ["html-loader", "pug-html-loader"],
        },
        // VUE
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        // JS
        {
          test: /\.js$/,
          loader: "babel-loader",
        },
      ],
    },
  };
};
