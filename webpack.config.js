const path = require("path");
let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode,
  devtool: "source-map",
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};