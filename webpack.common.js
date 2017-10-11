const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractCSS = new ExtractTextPlugin('stylesheets/style.[hash].css')
const extractSCSS = new ExtractTextPlugin('stylesheets/style.[hash].css')

module.exports = {
    entry: {
        app: './src/index.js',
        vendor: [
            'react', 'react-router', 'react-dom', 'react-redux',
            'react-router-dom', 'react-router-redux', 'redux-saga',
            'redux', 'reselect',
        ]
    },
    output: {
        filename: 'js/[name].[chunkhash].js',
        path: path.join(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'template',
            template: './src/index.html',
            inject: false,
            chunks: ['vendor', 'app', 'manifest'],
        }),
        extractCSS,
        extractSCSS,
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: extractCSS.extract([ 'css-loader', 'postcss-loader' ]),
            }, {
                test: /\.scss$/,
                use: extractSCSS.extract({
                        use: [{
                            loader: "css-loader"
                        }, {
                            loader: "sass-loader"
                        }],
                        fallback: "style-loader"
                    }),
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader?limit=819200',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/',
                    },
                }],
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    }
}
