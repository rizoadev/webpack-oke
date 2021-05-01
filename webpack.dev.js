const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = (env) => {
  return merge(common(env), {
    mode: "development", //process.env.NODE_DEV
    devtool: "eval",
    devServer: {
      host: "0.0.0.0",
      port: 9001,
    },
    module: {
      rules: [
        // SCSS
        {
          test: /\.scss$/,
          use: [
            // fallback to style-loader in development
            "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },
  });
};
