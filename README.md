/**
 * @ 作者: Gszs
 * @ 创建时间: 2019-03-23 23:43:32
 * @ 修改人: Gszs
 * @ 最新修改时间: 2019-05-19 21:52:08
 * @ 文件解释: 记录React生态的学历过程
 */

# Gszs-React

#### :cactus: 仓库项目介绍

#### 从零开始配置一个React全家桶(博客) , 基于Webpack4.29

*   简述:

    *   [创建文件夹](#创建文件夹)

    *   [创建package.json基础配置](#创建packagejson基础配置)

    *   [依赖安装webpack webpack-cli](#依赖安装webpack-webpack-cli)

    *   [创建webpack.dev.config.js](#创建webpackdevconfigjs并进行基础设置如下配置)
    
    *   [创建src目录](#创建src目录并再里面创建indexjs)
    
    *   [终端进行打包测试](#终端进行打包测试)
    
    *   [配置.babelrc](#安装babel一系列转换工具并配置babelrc) ❗❗❗
    
    *   [安装react react-dom](#安装react-react-dom)
    
    *   [打包测试](#然后修改indexjs中进行打包测试)
    
    *   [创建一个存放视图组件文件夹](#创建一个存放视图组件文件夹)
    
    *   [react-router](#react-router) ❗❗❗

    *   [热更新](#热更新安装webpack-dev-server)
    
    *   [热更替](#热更替由于热更新会导致状态丢失所以需要使用热更替进行状态保存)
    
    *   [优化路径](#优化路径)
    
    *   [Redux](#增加Redux)
    
    *   [编译css, less](#编译css-less)
    
    *   [编译图片](#编译图片)
    
    *   [Ant Design of React](#使用Ant-Design-of-React组件库) ❗❗❗
    
    *   [Redux DevTools](#使用Redux-DevTools调试工具)
    
    *   [按需加载](#按需加载) ❗❗❗
    
    *   [缓存](#缓存)
    
    *   [提取公共代码](#提取公共代码)
    
    *   [生产环境构建](#生产环境构建)

    *   [文件压缩](#文件压缩)

    *   [指定环境](#指定环境)

    *   [优化缓存机制](#优化缓存机制)
    
    *   [抽离CSS](#抽离CSS)

    *   [使用axios和middleware优化API请求(中间件)](#使用axios和middleware优化API请求中间件) ❗❗❗

    *   [优化目录结构](#优化目录结构) ❗❗❗

    *   [模拟Ajax数据](#模拟Ajax数据) ❗❗❗

    *   [CSS Modules](#使用css-modules)

    *   [结束代表刚开始](#后续)

    *   [2019/05/19补充](#2019/05/19)

---

*   #### :heavy_exclamation_mark: 本文的一些符号:
    *   // ++ 代表有增加的部分

    *   // -- 代表有减少的部分
---

*   ### 创建文件夹
    
        mkdir Gszs-React && cd Gszs-React

*   #### 创建package.json基础配置

        npm init(或者npm init -y)
    ```javascript
    /*修改*/
    "scripts": {
        "build": "webpack --config webpack.dev.config.js" //方便测试
    },
    ```

*   #### 依赖安装webpack webpack-cli

        yarn -D add webpack webpack-clic //这里使用yarn安装,其速度非常快


*   #### 创建webpack.dev.config.js并进行基础设置(如下配置)

        touch webpack.dev.config.js
        vim webpack.dev.config.js
    ```javascript
    
    const path = require('path')

    module.exports = {
        entry : path.join(__dirname, 'src/index.js'),
        mode: "development",
        output : {
            path : path.join(__dirname, './dist'),
            filename: 'bundle.js'
        },
    }
    ```
*   #### 创建src目录,并再里面创建index.js

        mkdir src && cd src && vim index.js

*   #### 终端进行打包测试

        yarn build

*   #### 安装babel一系列转换工具,并配置.babelrc

        yarn -D add @babel/core
        yarn -D add @babel/preset-env
        yarn -D add @babel/preset-react
        yarn -D add babel-loader
    
    ```javascript
    //在.babelrc中进行如下设置
    {
        "presets": [
            "@babel/preset-env",
            "@babel/preset-react"
        ],
        "plugins": []
    }
    ```

*   #### 安装react react-dom

        yarn -D add react react-dom

*   #### 然后修改index.js中进行打包测试
    ```javascript
    import React ,{ComPonent} from 'react'
    import ReactDOM from 'react-dom'

    ReactDOM.render(
        <h3>Hello world</h3>,
        document.querySelector('#app')
    )
    ```

*   #### 创建一个存放视图组件文件夹
    
        mkdir view && cd view && mkdir layout && vim HeaderMenua
    ```javascript
    // 在HeaderMenu.js里添加如下内容
    import React ,{Component} from 'react'

    export default class HeaderMenu extends Component{
        render(){
            return(
                <div>
                    <h3>HeaderMenu</h3>
                </div>
            )
        }
    }

    //然后在index.js中将这个组件倒入,终端yarn build打包测试
    ```

*   #### react-router
    
        yarn -D add react-router-dom
        新建router文件夹和组件 -> mkdir router && touch router/router.js
    ```javascript
    // 创建基本的router.js, 包含两个home 跟 pagel
    
    // Home.js
    import React, {Component} from 'react'
    export default class Home extends Component{
        render(){
            return(
                <div>
                    <h3>Home</h3>
                </div>
            )
        }
    }

    // Page.js
    import React, {Component} from 'react'
    export default class Page extends Component{
        render(){
            return(
                <div>
                    <h3>Page</h3>
                </div>
            )
        }
    }

    // 在router.js中导入这两个路由组件
    import React from 'react'
    import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
    import Home from '../pages/Home'
    import Page1 from '../pages/Page'

    const getRouter = () => (
        <Router>
            <div>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/page1'>Page1</Link></li>
                </ul>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/page1' component={Page1}/>
                </Switch>
            </div>
        </Router>
    )

    export default getRouter

    /* 修改index.js导入router*/

    ```

*   #### 热更新(安装webpack-dev-server)

        yarn global add webpack-dev-server
    ```javascript
    //修改 package.json
    "scripts": {
        "build": "webpack --config webpack.dev.config.js",
        "dev": "webpack-dev-server --config webpack.dev.config.js" //增加一个dev
    },

    // 修改webpack.dev.config.js,增加如下这段
    devServer: {    // 热更
      contentBase : path.join(__dirname, './dist'),
      hot: true
    },

    // 终端yarn dev进行测试,访问8080
    ```

*   #### 热更替(由于热更新会导致状态丢失,所以需要使用热更替进行状态保存)

        yarn -D add react-hot-loader
    ```javascript
    // 修改.babelrc增加如下
    {
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    "plugins": [
            "react-hot-loader/babel"
        ]
    }

    // 在webpack.dev.config.js中的entry修改为如下
    entry : [
        'react-hot-loader/patch', // 热更替
        path.join(__dirname, 'src/index.js')
    ],
    
    //修改src/index.js
    import React ,{ComPonent} from 'react'
    import ReactDOM from 'react-dom'
    import getRouter from './router/router'
    import {AppContainer} from 'react-hot-loader'

    //初始化
    renderWithHotReload(getRouter())

    /*热更新*/
    if (module.hot) {
        module.hot.accept('./router/router', () => {
            const getRouter = require('./router/router').default;
            renderWithHotReload(getRouter());
        });
    }

    function renderWithHotReload(RootElement) {
        ReactDOM.render(
            <AppContainer>
                {RootElement}
            </AppContainer>,
            document.getElementById('app')
        )
    }
    ```
---

*   #### 优化路径
    ```javascript
    // webpack.dev.config.js中增加如下
    resolve: { // 增加别名设置
        alias: {
            pages : path.join(__dirname, 'src/pages'),
            router: path.join(__dirname, 'src/router'),
            component: path.join(__dirname, 'src/component')
        }
    }
    ```
---

*   #### 增加Redux

    *   yarn -D add redux redux-react redux-thunk (异步操作中间件)

    ```javascript
    /*
        cd src && mkdir redux

        在redux下创建如下目录:

        |---actions
        |   |
        |   |--userInfo.js
        |
        |---reduces
        |   |
        |   |--userInfo.js
        |   |--index.js (合并Reducers的时候用的到)
        |
        |---store
        |   |
        |   |--store.js
        |
        |

        在pages目录下增加一个测试Redux的组件, --> pages/userInfo/userInfo.js
    */

    // 修改index.js代码:
    function renderWithHotReload(RootElement) {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                {RootElement}
            </Provider>
        </AppContainer>,
        document.getElementById('app')
        )
    }
    ```
---

*   #### 编译css, less
    *   yarn -D add less less-loader style-loader css-loader
    ```javascript
    // 在webpack.dev.config.js加载器中module中的rules中添加如下配置
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
    }
    ```
---

*   #### 编译图片
    *   yarn -D add url-loader file-loader
    ```javascript
    // 在webpack.dev.config.js加载器中module中的rules中添加如下配置
    {
        test: /\.(jpg|png|gif)$/,
        use: [{
            loader: 'url-loader',
            options: {
                limit: 8192 // <=8K的图片可以直接插入<img/>中
            }
        }]
    }
    ```
---

*     使用Ant Design of React组件库
    *   yarn -D add antd

    *   yarn -D add babel-plugin-import
    ```javascript
    // 注意一个地方,如果要使用Antd.css,需要在css转换器规则下增加一行
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
        include: path.join(__dirname, 'node_modules/antd') // 导入antd
    }

    // 使用按需加载,则不用再显式导入
    "plugins": [
        "react-hot-loader/babel",
        ["import", {
            "libraryName": "antd",
            "libraryDirectory": "es",
            "style": "css" // `style: true` 会加载 less 文件
          }]
    ]
    ```
---

*     使用Redux DevTools调试工具
    *   yarn -D add redux-devtools-extension
    ```javascript
    // '/store/store.js中修改'

    import {composeWithDevTools} from 'redux-devtools-extension'
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware )))
    ```
---

*   #### 按需加载
    *   yarn -D add @babel/plugin-proposal-decorators
    
    *   yarn -D add @babel/plugin-proposal-class-properties
    ```javascript
    // 在.babelrc中新增
    [
        "@babel/plugin-proposal-decorators",
        {"legacy": true}
    ],
    [
        "@babel/plugin-proposal-class-properties",
        {"loose": true}     
    ]

    // 在router下创建bundle.js
    import React, {Component} from 'react'

    class Bundle extends Component {
        state = {
            // short for "module" but that's a keyword in js, so "mod"
            mod: null
        };

        componentWillMount() {
            this.load(this.props)
        }

        componentWillReceiveProps(nextProps) {
            if (nextProps.load !== this.props.load) {
                this.load(nextProps)
            }
        }

        load(props) {
            this.setState({
                mod: null
            });
            props.load((mod) => {
                this.setState({
                    // handle both es imports and cjs
                    mod: mod.default ? mod.default : mod
                })
            })
        }

        render() {
            return this.props.children(this.state.mod)
        }
    }

    export default Bundle;

    // 修改路由
    import React from 'react';
    import Bundle from './bundle'
    import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

    import Home from 'bundle-loader?lazy&name=home!pages/Home'
    import Page1 from 'bundle-loader?lazy&name=page1!pages/Page'
    import UserInfo from 'bundle-loader?lazy&name=userinfo!pages/userInfo/userInfo'
    import A_date from 'bundle-loader?lazy&name=a_date!pages/Antd/demo01'

    const Loading = function () {
        return <div>Loading...</div>
    };

    const createComponent = (component) => (props) => (
        <Bundle load={component}>
            {
                (Component) => Component ? <Component {...props} /> : <Loading/>
            }
        </Bundle>
    );

    const getRouter = () => (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/page1">Page1</Link></li>
                    <li><Link to="/userinfo">UserInfo</Link></li>
                    <li><Link to='/Antd'>Antd</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/" component={createComponent(Home)}/>
                    <Route path="/page1" component={createComponent(Page1)}/>
                    <Route path="/userinfo" component={createComponent(UserInfo)}/>
                    <Route path="/Antd" component={createComponent(A_date)} />
                </Switch>
            </div>
        </Router>
    );

    export default getRouter;
    ```
---

*   #### 缓存
    ```javascript
    /* 假如用户第一次访问页面后,采用缓存机制,缓存了旧的home.js , 那如果当更新了home.js后.则会导致用户出现加载
       错误,解决如下。修改webpack.dev.config.js
    */

    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[hash].js',   // 处理缓存
        chunkFilename: '[name].[chunkhash].js' // 区分加载的js
    },

    /* 配合HtmlWebpackPlugin模块
        yarn -D add html-webpack-plugin

        // 修改webpack.dev.config.js中的plugins配置
    */
    plugins: [
        new Webpack.HotModuleReplacementPlugin(), //启动热替换
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, './src/index.html')
        })
    ],

    ```
---

*   #### 提取公共代码
    ```javascript
    // 修改如下两处地方
    entry: {
        app: [
            'react-hot-loader/patch', // 热更替
            path.join(__dirname, 'src/index.js')
        ],
        //++ verdor: ['react','react-redux','react-dom','react-router-dom','redux'] // 提取公共代码
    },
    
    // ++ new Webpack.LoaderOptionsPlugin({
    // ++    optimzation: {
    // ++        splitChunks: {
    // ++            name: 'vendor'
    // ++        }  
    // ++    },
    // ++ })
    ```
---

*   #### 生产环境构建
    *   vim webpack.config.js
    ```javascript
    /* 增加如下内容(大体上与开发模式相同) :
       1: 去除热更提
       2: 模式修改为生产模式
    */
    const path = require('path')
    const Webpack = require('webpack')
    const HtmlWebpackPlugin = require('html-webpack-plugin')

    module.exports = {
        mode: "production", // 开发模式
        entry: {
            app: [
                path.join(__dirname, 'src/index.js')
            ],
            verdor: ['react','react-redux','react-dom','react-router-dom','redux'] // 提取公共代码
        },
        output: {
            path: path.join(__dirname, './dist'),
            filename: '[name].[chunkhash].js',   // 处理缓存
            chunkFilename: '[name].[chunkhash].js' // 区分加载的js
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
    ```
---
*   #### 文件压缩
    *   yarn -D add uglifyjs-webpack-plugin
    ```javascript
    //修改webpack.config.js

    // ++ const UglifyJSPlugin  = require('uglifyjs-webpack-plugin')
    // ++ new UglifyJSPlugin()
    ```
---

*   #### 指定环境
    ```javascript
    plugins: [
        // ++ new Webpack.DefinePlugin({ // 指定环境,用于针对特定的环境进行一些优化
        // ++     'process.env': {
        // ++         'NODE_ENV': JSON.stringify('production')
        // ++     }
        // ++  })
    ]
    ```
---

*   #### 优化缓存机制
    *   yarn -D add clean-webpack-plugin

    ```javascript
    plugins: [
        // ++ new webpack.HashedModuleIdsPlugin() // 使vendor.xxx.js缓存在本地
        // ++ new clean-webpack-plugin() // 用于在构建之前清除构建文件夹
    ]
    ```
---

*   #### 抽离CSS
    *   yarn -D add extract-text-webpack-plugin
    ```javascript

    rules: [
        {
            test: /\.css$/,
        // --    use: ['style-loader', 'css-loader', 'less-loader'],
        // ++    use: ExtractTextWebpackPlugin.extract({
        // ++               fallback: 'style-loader',
        // ++               use: ['css-loader','less-loader']
        // ++         })
            include: path.join(__dirname, '/node_modules/antd') // 处理Antd.css
        },
    ]

    plugins : [
        // ++ new ExtractTextWebpackPlugin({
        // ++       filename: 'style.css'
        // ++       allchunks: true 
        // ++   })
    ]
    ```
---

*   #### 使用axios和middleware优化API请求(中间件)
    *   yarn -D add axios
    *   cd src/middleware && mkdir middleware && cd middleware && vim promiseMiddleware.js
    ```javascript
    /* promiseMiddleware.js(源码) */
    // 请求中间件
    import axios from 'axios'

    export default store => next => action => {
        const {dispatch, getState} = store;
        
        // 如果是函数直接运行跳过
        if(typeof action === 'function'){
            action(dispatch, getState)
            return;
        }

        // 解析action
        console.log('action->',action);
        const {
            promise,
            types,
            afterSuccess,
            ...rest
        } = action;

        if(!action.promise){
            return next(action);
        }

        // 解析types
        const [
            REQUEST,
            SUCCESS,
            FALID
        ] = types;

        // 请求流程
        next({
            ...rest,
            type: REQUEST
        });
        const onSuccess = result => {
            next({
                ...rest,
                result,
                type: SUCCESS
            })
            console.log(result);
            if(afterSuccess){
                afterSuccess(dispatch, getState, result)
            }
        }
        const onReject = error => {
            next({
                ...rest,
                error,
                type: FALID
            })
        }

        return promise(axios).then(onSuccess,onReject).catch(error => {
            console.log(`捕获错误: ${error}`);
            onReject(error)
        })
    }

    /* store.js */

    // ++   import promiseMiddleware from '../middleware/promiseMiddleware'
    // ++   const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)))

    /* actions/userInfo.js */
    
    // const getUserInfoRequest = () => {
    // --    return {
    // --        type: GET_USER_INFO_REQUEST,
    // --    }
    // -- }

    // -- const getUserInfoSuccess = (userInfo) => {
    // --    return {
    // --        type: GET_USER_INFO_SUCCESS,
    // --        payload: userInfo,
    // --    }
    // -- }

    // -- const getUserInfoFaild = () => {
    // --     return {
    // --         type: GET_USER_INFO_FAILD,
    // --     }
    // -- }

    // -- export const getUserInfo = () => {
    // --     return (dispatch) => {
    // --         // 开始请求前
    // --         dispatch(getUserInfoRequest())

    // --         return fetch('http://localhost:8080/api/user.json')
    // --         .then(response => response.json())
    // --        .then(json => {
    // --             // 获取数据
    // --             dispatch(getUserInfoSuccess(json))
    // --         }).catch(() => {
    // --             // 捕获错误
    // --             dispatch(getUserInfoFaild())
    // --         })
    // --     }
    // -- }

    // ++    export function getUserInfo(){
    // ++     return{
    // ++         types: [GET_USER_INFO_REQUEST,GET_USER_INFO_SUCCESS,GET_USER_INFO_FAILD],
    // ++         promise: axios => axios.get('http://localhost:8080/api/user.json')
    // ++     }
    // ++ }

    /* reducers/userInfo.js */
    case GET_USER_INFO_SUCCESS:
         return {
             ...state,
             isLoading: false,
    //  ++       userInfo: action.payload,
             errMessage: ''
        }
    ```
---

*   #### 合并提取Webpack公共配置
    *   yarn -D add webpack-merge
    *   vim webpack.common.js
    ```javascript
    /* 假如在webpack.dev.config.js中修改了css加载器,那么在webpack.config.js中也需要同理修改.
       所以把这两个webpack中相同的配置提取出来.
    */
    ```
---

*   #### 优化目录结构
    *   💫<b>待定(省略)</b>
---

*   #### Redux模块热替换
    ```javascript
    /*index.js*/
    // ++ redux模块热替换
    // ++ module.hot.accept("./redux/reducers/userInfo.js", () => {
    // ++     const nextCombineReducers = require("./redux/reducers/userInfo.js").default;
    // ++     store.replaceReducer(nextCombineReducers);
    // ++ });
    ```
---

*   #### 模拟Ajax数据
    *   yarn -D add mockjs
    *   http://jsonplaceholder.typicode.com/(这个网站也能模拟请求JSON数据)
---

*   #### 使用CSS Modules
    *   💫<b>待定(省略)</b>
---

*   #### 后续
    *   :seedling: 基本骨架就是这样。文件目录没有做统一,因为大家的习惯可能不一样。后续会补充如下部分:

    *   Antd

    *   React Native

    *   配合Express
---

*   #### 2019/05/19:

    *   优化Babelrc配置

    *   补充Ant Design of React

    *   补充react-router

    *   补充使用axios和middleware优化API请求(中间件)
    
    *   补充优化目录结构

    *   模拟Ajax数据

        ```javascript
        /** 补充Ant Design of React
         *  1：表格
         *  2: 表单组件
         *  3: 上传
         */

        // 表格 : 
        // 一般后台上传后会进入上传管理表格,那么可以抽出一个表单管理基础组件跟表单管理高级组件的公共组件机制
        // 基础组件没有删除,没有编辑,很纯粹的基础表格组件例如打印日志
        // 高级组件拥有基础组件里没有的功能
        // 如下代码分别高级公共表格组件 , 基础公共表格组件
        
        /**
         * @description: 高级表格公共组件
         * @param: 需要从父组件获取表个头配置,接口地址,一个用于修改,删除的对象
         */
        import React,{useState, useEffect} from 'react';
        import {Table, Input, Button, Popconfirm, Form, message} from 'antd';
        import { async } from 'rxjs/internal/scheduler/async';

        const FormItem = Form.Item;

        // 创建Context实例
        const EditableContext = React.createContext();

        // 创建生产者
        const EditableRow = ({form, index, ...props}) => (
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        )

        const EditableFormRow = Form.create()(EditableRow);

        // EditableCell
        const EditableCell = (props) => {

            const getInput = () => {
            return <Input />;
            };

                const {
                    editing,
                    dataIndex,
                    title,
                    inputType,
                    record,
                    index,
                    ...restProps
                } = props;
                
                return (
                    <EditableContext.Consumer>
                        {(form) => {
                            const { getFieldDecorator } = form;
                            return (
                                <td {...restProps}>
                                    {editing ? (
                                        <FormItem style={{ margin: 0 }}>
                                            {getFieldDecorator(dataIndex, {
                                                rules: [{
                                                    required: true,
                                                    message: `Please Input ${title}!`,
                                                }],
                                                initialValue: record[dataIndex],
                                            })(getInput())}
                                        </FormItem>
                                    ) : restProps.children}
                                </td>
                            );
                        }}
                    </EditableContext.Consumer>
                );
        }

        // EditableTable
        const EditableTable = (props) => {
            
            // 接口地址
            const [
            GET_ALL_DATA,
            DELETE_ALL_DATA,
            UPDATE_ALL_DATA
            ] = props.interfaceUrl



            // 设置初始值
            const [page, setPage] = useState({}),
                [data, setData] = useState(null),
                [filterdata, setFilterdata] = useState(null),
                [editingKey, setEditingKey] = useState('');
            
            // 分页有关
            const [pageNum, setPageNum] = useState(null),
                [pageSize, setPageSize] = useState(null),
                [sortedInfo, setSortedInfo] = useState(null);
            
            // 填充表格数据
            useEffect(() => { 
            getData()
            },[])

            const getData = async () => {
            await GET_ALL_DATA().then((res) => {
                if(res && res.status === 200 ){
                    setPage({
                        total: res.data.length,
                        pageNum: 1
                    });
                    setData(res.data);
                }else{
                    message.error(res.message);
                    setPage({
                        total: 1,
                        pageNum: 1
                    });
                    setData([]);
                }
            })
            }

            // 改变页码
            const changePage = (current) => {
                setPageNum(current)
            }

            // 每页显示多少条
            const changePageSize = (pageSize, current) => {
                setPageSize(pageSize)
            }

            // 删除操作
            const HandleDelete = (key) => {
                    DELETE_ALL_DATA(key).then( (res , err) => {
                            if(res.status === 200){
                    message.success(`编号${key}已经删除成功`);
                    setData([...data].filter(item => item.key !== key));
                    setEditingKey('')
                    // props.clearDeleteKey()
                            }else{
                                    message.error('删除捕获错误:', err);
                            }
                    })
            }

            // 从父组件获取要删除的key,触发handleDelete
            const deleteKeyFromFather = props.deleteKeyArr;
            if( deleteKeyFromFather instanceof Array && deleteKeyFromFather.length > 0){
            React.memo(HandleDelete(deleteKeyFromFather))
            }

            // 排序操作
            const handleChange = (sorter) => {
                setSortedInfo(sorter)
            }

            // 操作触发器
            const isEditing = record => record.key === editingKey;         

            // Edit设置
            const edit = (key) => setEditingKey(key);

            // 保存修改
            const save = (form, key) => {
                    form.validateFields((error, row) => {
                        if (error) {
                            return;
                        }
                        const newData = [...data];
                        const index = newData.findIndex(item => key === item.key);
                        if (index > -1) {
                            const item = newData[index];
                            newData.splice(index, 1, {
                                ...item,
                                ...row,
                            });
                            const requestData = {
                                ...item,
                                ...row
                };
                
                /**
                * @description 传输给后端接口
                * @param {wheelNo, paramType} 处理几个上传到后端的特殊字段
                **/ 
                const _portParam = props._portParam;
                const _requestData = {};
                
                for(let i in _portParam){
                    _requestData[i] = requestData[i];
                    if(i === 'wheelNo'){
                    _requestData[i] = Number(requestData[i])
                    }
                    if(i === 'paramType'){
                    _requestData[i] = 4
                    }
                
                }
                            UPDATE_ALL_DATA(_requestData).then((res, err) => {
                    console.log('status=>>',res)
                                if(res.status === 200){
                                    message.success('修改成功')
                                }else{
                                    message.error(res.message)
                                }
                            })
                            setData(newData);
                            setEditingKey('')
                        } else {
                            newData.push(row);
                            setData(newData);
                            setEditingKey('')
                        }
                    });
            }
            

        // 行选择
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
            const selectRowKeysArr = Array.from(selectedRowKeys);
            // 激活删除按钮
            selectedRows.length !== 0 ? props.callFn(false, selectRowKeysArr) : props.callFn(true)
            },
            getCheckboxProps: record => ({
            disabled: record.name === 'Disabled User',
            name: record.name
            })
        }
                
            // 取消修改
            const cancel = () => setEditingKey('');
        
        const totals = page.total;
        
        // 表格分页属性
        const paginationProps = {
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: () => `共${totals}条`,
            pageSize: pageSize,
            current: pageNum,
            total: page.total,
            onShowSizeChange: (current,pageSize) => changePageSize(pageSize,current),
            onChange: (current) => changePage(current),
        };

        // 覆盖默认的table元素
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };

        // columns表格头(动态导入)
        const columns = props.columns.map((col) => {
            if (!col.editable) {
            return col;
            }
            return {
            ...col,
            onCell: record => ({
                record,
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record)
            }),
            };
        })

        // 单独处理操作的render(因为硬处理太困难)
        const dealOperateFn = () => {
            const columnList = props.columns;
            columnList.forEach((item) => {
            if(item.title === '操作'){
                item.render = (text, record) => {
                const editable = isEditing(record);
                return (
                    <div>
                    {editable ? (
                        <span>
                        <EditableContext.Consumer>
                            {form => (
                            <Button
                                onClick={() => save(form, record.key)}
                            >
                                保存修改
                            </Button>
                            )}
                        </EditableContext.Consumer>
                        <Popconfirm
                            title="确认取消修改吗?"
                            onConfirm={() => cancel(record.key)}
                        >
                            <Button style = {{ margin: '5px 0px' }}> 取消修改 </Button>
                        </Popconfirm>
                        <Popconfirm title="确定要删除吗?" onConfirm={() => HandleDelete(record.key)}>
                            <a href="javascript:;">
                                <Button type="danger" className="deleteButton">删除</Button>
                            </a>
                        </Popconfirm>
                        </span>
                    ) : (
                        <a disabled={editingKey !== ''} onClick={() => edit(record.key)}>
                        <Button type="primary"> 设置 </Button>
                        </a>
                    )}
                    </div>
                )
                }
            }
            })
        }
        dealOperateFn();

            // 渲染
            return(
            <EditableContext.Provider value={props.form}>
                <Table
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={data}
                    columns={columns}
                    pagination = {paginationProps}
                    onChange = {handleChange}
                    rowSelection = {rowSelection}
                />
            </EditableContext.Provider>
            )
        }

        export default EditableTable

        // 基础公共组件


        ```
