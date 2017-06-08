var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var webpack = require('webpack');

const PATHS = {
    index: path.join(__dirname, 'app', 'index.html'),
    images: path.join(__dirname, 'app', 'img'),
    celldata: path.join(__dirname, 'app', 'phones')
};

module.exports = {
    entry: [
        './app/index.js',
        './app/ts-components/index.ts'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devtool: 'source-map', 
    resolve: {
        extensions: ['*','.ts', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
    },
    module: {
        rules: [
            { test: /\.html$/, exclude: PATHS.index, loader: "ng-cache-loader", options: { prefix:'[dir]', module:'phoneTemplates' }},
            { test: /\.css/, loader: ExtractTextPlugin.extract("css-loader") },
            { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader?name=fonts/[name].[ext]' },
            { test: /\.ts?$/, loader: 'awesome-typescript-loader' }
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
            }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery'
        }),
    ]
};