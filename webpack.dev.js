const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    }),
    new BundleAnalyzerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                quietDeps: true,
              },
            },
          },
        ]
      }
    ]
  }
});
