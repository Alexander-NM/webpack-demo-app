const path = require("path")
const { sources } = require("webpack")

module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js",
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    sources: true,
                },
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                type: "asset/resource",
            },
        ],
    },
}
