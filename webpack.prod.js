const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path")
const common = require("./webpack.common.js")
const { merge } = require("webpack-merge")

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[hash].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'imgs/[name].[hash][ext]' 
    },
    plugins: [new CleanWebpackPlugin()],

})