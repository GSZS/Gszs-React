const path = require('path') 
const Webpack = require('webpack')
const UglifyJSPlugin  = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const commonConfig = require('./webpack.common.config.js')
const WebpackMerge = require('webpack-merge')


const proConfig = {
    mode: "production", // 生产模式
    devtool: "cheap-module-source-map",
    output: {
        publicPath: '/' // 输出到指定的目的地
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({ // 抽离css
                    fallback: 'style-loader',
                    use: ['css-loader','less-loader']
                }),
            },
        ]
    },
    plugins: [
        new UglifyJSPlugin(), // 文件压缩
        new Webpack.DefinePlugin({ // 指定环境,用于针对特定的环境进行一些优化
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new Webpack.HashedModuleIdsPlugin(), // 使vendor.xxx.js缓存在本地
        new CleanWebpackPlugin(), // 用于在构建之前删除构建文件夹
        new ExtractTextWebpackPlugin({
            filename: 'style.css',
            allChunks: true,
        })
    ]
}

module.exports = WebpackMerge(commonConfig, proConfig)

