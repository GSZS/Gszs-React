const path = require('path')
const Webpack = require('webpack')
const WebpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common.config.js')

const devConfig = {
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    entry: {
        app: [
            'react-hot-loader/patch', // 热更替
            path.join(__dirname, '../src/index.js')            
        ],
    },
    output: {
        filename: '[name].[hash].js',   // 处理缓存

    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
        ]
    },
    devServer: { // 热更
        contentBase: path.join(__dirname, '../dist/'),
        hot: true,
        historyApiFallback: true,
        compress: true,
        clientLogLevel: 'warning',
        //   host: '0.0.0.0' //服务器外部能访问
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(), //启动热替换
    ]
}

module.exports = WebpackMerge({
    customizeArray(a, b, key){
        // entry.app不合并,替换掉
        if(key === 'entry.app'){
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig)