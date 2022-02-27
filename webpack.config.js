const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.[hash].bundle.js'
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            { 
                test: /\.css$/i, 
                use: [MiniCssExtractPlugin.loader, 'css-loader'], 
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
            template: './base.html'
        }),
        new MiniCssExtractPlugin()
    ],
  };