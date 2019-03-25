#### 从零开始配置一个React全家桶(博客) , 基于Webpack4.29

*   简述:

    *   []
    *   [安装react react-dom](安装react-react-dom)

---

*   #### 创建文件夹
    
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

*   #### 安装babel一系列转换工具,并配置.balbelrc

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

*   创建一个存放视图组件文件夹
    
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

*   react-router
    
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

*   热更新(安装webpack-dev-server)

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

*   热更替(由于热更新会导致状态丢失,所以需要使用热更替进行状态保存)

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

*     优化路径
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

*     增加Redux

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

*     编译css, less
    *   yarn -D add less less-loader style-loader css-loader
    ```javascript
    // 在webpack.dev.config.js加载器中module中的rules中添加如下配置
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
    }
    ```
---

*     编译图片
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

*     按需加载
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

*     缓存
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

*     提取公共代码
    ```javascript
    // 修改如下两处地方
    entry: {
        app: [
            'react-hot-loader/patch', // 热更替
            path.join(__dirname, 'src/index.js')
        ],
        verdor: ['react','react-redux','react-dom','react-router-dom','redux'] // 提取公共代码
    },
    
    new Webpack.LoaderOptionsPlugin({
        optimzation: {
            splitChunks: {
                name: 'vendor'
            }  
        },
    })
    ```
---

*     生产环境构建
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
