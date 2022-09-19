let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let vueLoaderPlugin = require('vue-loader/lib/plugin');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    path: resolve("./dist"),
    filename: "[hash:8].js",
  },
  resolve: {
    extensions: [".js", ".css", ".vue"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
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
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: [
          "style-loader", 
          "css-loader"
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: "url-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("./index.html"),
      filePath: resolve("dist/index.html"),
    }),
    new vueLoaderPlugin()
  ],
  devServer: {
    static: {
      directory: resolve("dist"),
    },
    port: 8000,
    hot: true,
    compress: true,
  },
};
