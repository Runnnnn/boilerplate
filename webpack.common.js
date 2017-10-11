const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({title: 'template', template: './src/assets/index.html', inject: false}),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    }
                }],
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    }
}
