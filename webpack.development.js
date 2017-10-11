const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common.js')
const merge = require('webpack-merge')

module.exports = merge(common, {
    devtool: 'source-map',
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, 'src'),
        publicPath: '/',
        historyApiFallback: { //子页面刷新404
            rewrites: [
                { from: /^\//, to: '/index.html'}
            ]
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest'],
            filename: 'js/[name].[hash].js', // dev模式下不可以用[name].[chunkhash].js'
        }),
    ]
})
