const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: "./app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "js"), path.resolve(__dirname, "vendor")],
        enforce: "pre",
        use: [
          {
            loader: "babel-loader?sourceMap",
            options: {
              presets: ["env"]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader?sourceMap", "sass-loader?sourceMap&outputStyle=expanded"]
        })
      },
      {
        test: /\.css$/,
        exclude: /(bower_components|node_modules)/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader?sourceMap"]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].[hash].css"),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    })
  ],
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 8080,
    hot: true,
    inline: true,
    historyApiFallback: true
  },
  resolve: {
    extensions: [' ', '.css', '.scss', '.less', '.js', '.json'],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  }
};
