const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: [
                      "last 2 versions",
                      "not dead",
                      "not < 2%",
                      "not ie 11",
                    ],
                    useBuiltIns: "entry",
                    corejs: "core-js@3.21.0",
                  },
                ],
                "@babel/preset-react",
              ],
              plugins: ["react-hot-loader/babel"],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
