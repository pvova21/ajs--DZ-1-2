const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCSSextractPlugin = require('mini-css-extract-plugin');
var babel = require("babel-core");
module.exports = {
    module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-env']
            },
        },
        {
            test: /\.css$/,
            use: [
                MiniCSSextractPlugin.loader,
                'css-loader'
          ] 
        }
      ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
        }),
        new MiniCSSextractPlugin()
    ]
}