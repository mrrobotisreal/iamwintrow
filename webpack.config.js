const path = require("path");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "./client/src/index.jsx"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "client/dist")
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/i,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(css)$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  devtool: "source-map"
}