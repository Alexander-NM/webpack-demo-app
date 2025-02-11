const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const common = require("./webpack.common.js")
const { merge } = require("webpack-merge")

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "imgs/[name].[hash].[ext]",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
})
