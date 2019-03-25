const path = require('path')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: [
            'react-hot-loader/patch', // 热更替
            path.join(__dirname, 'src/index.js')
        ],
        verdor: ['react','react-redux','react-dom','react-router-dom','redux'] // 提取公共代码
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[hash].js',   // 处理缓存
        chunkFilename: '[name].[chunkhash].js' // 区分加载的js
    },
    mode: "development",
    devServer: { // 热更
        contentBase: path.join(__dirname, './dist'),
        hot: true,
        historyApiFallback: true,
        compress: true,
        clientLogLevel: 'warning',
        //   host: '0.0.0.0' //服务器外部能访问
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true'], // cacheDirectory=true开启缓存机制,加快编译速度
                include: path.join(__dirname, './src')
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
                include: path.join(__dirname, '/node_modules/antd') // 处理Antd.css
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192 // <=8K的图片可以直接插入<img/>中
                    }
                }
            }
        ]
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(), //启动热替换
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, './src/index.html')
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
            pages: path.join(__dirname, 'src/pages'),
            router: path.join(__dirname, 'src/router'),
            component: path.join(__dirname, 'src/component'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers'),
        }
    },
    devtool: 'inline-source-map'
}