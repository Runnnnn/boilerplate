const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractCSS = new ExtractTextPlugin('stylesheets/style.[hash].css')

module.exports = {
    entry: {
        app: './src/index.js',
        vendor: [
            'react', 'react-router', 'react-dom', 'react-redux',
            'react-router-dom', 'react-router-redux', 'redux-saga',
            'redux', 'reselect', 'babel-polyfill'
        ]
    },
    output: {
        filename: 'js/[name].[chunkhash].js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/', // important!
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'template',
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['vendor', 'app', 'manifest'],
        }),
        extractCSS,
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                include: path.join(__dirname, 'node_modules'),
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options:{
                            minimize: true //css压缩
                        }
                    }, {
                        loader: 'postcss-loader'
                    }]
                }),
            }, {
                test: /\.css$/,
                include: path.join(__dirname, 'src'),
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            modules: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    }, {
                        loader: 'postcss-loader'
                    }]
                }),
            }, {
                test: /\.scss$/,
                use: extractCSS.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            minimize: true,
                        }
                    }, {
                        loader: "sass-loader",
                    }],
                    fallback: "style-loader"
                }),
            }, {
                test: /\.(png|svg|jpg|gif|eot|ttf|woff|woff2)$/,
                use: [{
                    loader: 'file-loader?limit=819200',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/',
                    },
                }],
            }, {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    }
}
