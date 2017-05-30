var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

const PATHS = {
    index: path.join(__dirname, 'app', 'index.html'),
    images: path.join(__dirname, 'app', 'img'),
    celldata: path.join(__dirname, 'app', 'phones')
};

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                exclude: PATHS.index,
                loader: "ng-cache-loader", options: {}
            },
            { test: /\.css/, loader: ExtractTextPlugin.extract("css-loader") },
            { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader?name=fonts/[name].[ext]' }

        ],
        loaders: [
        ]
    },

    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        new HtmlWebpackPlugin({ 'template': './app/index.html' }),
        new ExtractTextPlugin("bundle.css"),
        new CopyWebpackPlugin([
            {
                from: PATHS.celldata,
                to: 'phones'
            },
            {
                from: PATHS.images,
                to: 'img'
            }], {
                ignore: [
                    '*.gitkeep'
                ]
            })
    ]
};