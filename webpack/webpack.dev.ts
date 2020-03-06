import path from "path";
import webpack from "webpack";
import merge from "webpack-merge";
import common from "./webpack.common";
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const config: webpack.Configuration = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "../dist",
        host: "localhost",
        stats:'errors-warnings'
    },
    plugins: [
        new ErrorOverlayPlugin()
    ],
});

export default config;
