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
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    },
    devtool: 'source-map',
    plugins: [new HtmlWebpackPlugin({
            template: './base.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'main.[hash].css'
        })
    ],
  };