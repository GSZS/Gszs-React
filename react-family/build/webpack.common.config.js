// webpack 公共配置
const path = require('path')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: [
            path.join(__dirname, '../src/index.js')
        ],
        verdor: ['react','react-redux','react-dom','react-router-dom','redux'] // 提取公共代码
    },
    output: {
        path: path.join(__dirname, '../dist/'),
        filename: 'js/[name].[hash].js',   // 处理缓存
        chunkFilename: 'js/[name].[chunkhash].js', // 区分加载的js
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true'], // cacheDirectory=true开启缓存机制,加快编译速度
                include: path.join(__dirname, '../src/')
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192 // <=8K的图片可以直接插入<img/>中
                    }
                }
            },
            // SVG配置
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {loader: 'babel-loader'},
                    {
                        loader: '@svgr/webpack',
                        options: {
                            babel: false,
                            icon: true,
                        },
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../src/index.html')
        }),
        new Webpack.LoaderOptionsPlugin({
        optimzation: {
            splitChunks: {
                name: 'vendor'
            }  
          },
        })
    ],
    resolve: { // 增加别名设置
        alias: {
            pages: path.join(__dirname, '../src/pages'),
            component: path.join(__dirname, '../src/component'),
            actions: path.join(__dirname, '../src/redux/actions'),
            reducers: path.join(__dirname, '../src/redux/reducers'),
            demo: path.join(__dirname, '../src/demo'),
            components: path.join(__dirname, '../src/components')
        }
    }
}