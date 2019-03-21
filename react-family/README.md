#### 从零开始配置一个React全家桶(博客) , 基于Webpack4.29
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

