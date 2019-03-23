const path = require('path')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: [
        'react-hot-loader/patch', // 热更替
        path.join(__dirname, 'src/index.js')
    ],
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
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
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'], // cacheDirectory=true开启缓存机制,加快编译速度
            include: path.join(__dirname, './src')
        }]
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin() //启动热替换       
    ],
    resolve: { // 增加别名设置
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            router: path.join(__dirname, 'src/router'),
            component: path.join(__dirname, 'src/component'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers'),
        }
    }
}