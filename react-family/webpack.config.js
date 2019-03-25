const path = require('path') 
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin  = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = {
    mode: "production", // 开发模式
    devtool: 'cheap-module-source-map', // 会降低打包速度,调试时开启
    entry: {
        app: [
            path.join(__dirname, 'src/index.js')
        ],
        verdor: ['react','react-redux','react-dom','react-router-dom','redux'] // 提取公共代码 :TODO: 需要去webpack官网了解提取公共代码具体步骤
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[chunkhash].js',   // 处理缓存
        chunkFilename: '[name].[chunkhash].js', // 区分加载的js
        publicPath: '/' // 输出到指定的目的地
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
                use: ExtractTextWebpackPlugin.extract({ // 抽离css
                    fallback: 'style-loader',
                    use: ['css-loader','less-loader']
                }),
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
        }),
        new UglifyJSPlugin(), // 文件压缩
        new Webpack.DefinePlugin({ // 指定环境,用于针对特定的环境进行一些优化
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new Webpack.HashedModuleIdsPlugin(), // 使vendor.xxx.js缓存在本地
        new CleanWebpackPlugin(), // 用于在构建之前删除构建文件夹 :TODO:CleanWebpackPlugin()
        new ExtractTextWebpackPlugin({  // :TODO: ExtractTextWebpackPlugin()
            filename: 'style.css',
            allChunks: true,
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

