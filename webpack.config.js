let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[hash:8].js",
  },
  resolve: {
    extensions: [".js", ".css", ".vue"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"],
            plugins: [
              "transform-runtime",
              "babel-plugin-syntax-dynamic-import",
            ],
          },
        },
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.(css|sass|less)$/,
        exclude: /node_modules/,
        loader: ["vue-style-loader", "style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: "url-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
      filePath: path.resolve(__dirname, "dist/index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 8000,
    hot: true,
    compress: true,
  },
};
