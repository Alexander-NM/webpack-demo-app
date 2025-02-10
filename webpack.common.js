const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const { sources } = require('webpack');

module.exports = {
    entry: "./src/index.js",
    plugins: [new HtmlWebpackPlugin({
      template: "./src/template.html",
    })],
    module: {
        rules: [
          {
            test: /\.scss$/i,
            use: [
              "style-loader", 
              "css-loader",
              "sass-loader"
            ],
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
            options: {
              sources: true  
            }
          },
          {
            test: /\.(svg|png|jpg|gif)$/,
            type: 'asset/resource'
          }
        ],
    },
}