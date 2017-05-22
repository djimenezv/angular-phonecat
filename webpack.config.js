 var ExtractTextPlugin = require("extract-text-webpack-plugin");
 
 module.exports = {
     entry: './app/index.js',
     output: {
         filename: './app/bundle.js'
     },
    module: {
        loaders: [
                    { test: /\.css/, loader: ExtractTextPlugin.extract("css-loader") },
                    { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader?name=public/fonts/[name].[ext]' }
                 ]
    },
    
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        new ExtractTextPlugin("./app/bundle.css")
    ]
 };