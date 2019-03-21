#### React-router学习总结

*   章节叙述 : 

    *   [快速开始](#palm_tree快速开始) :

    *   [主要API](#palm_tree主要API) :

---

*   ## :palm_tree:快速开始:

    ```javascript
    // 基础路由设置(Basic Route)
    import React from 'react'
    import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

    function Index(){
        return <h2>Index</h2>
    }

    function Home(){
        return <h2>Home</h2>
    }

    function User(){
        return <h2>User</h2>    
    }

    function AppRouter(){
        return(
            <Router>
                <div>
                    <ul>
                        <li><Link to='/'>Index</Link></li>
                        <li><Link to='/Home'>Home</Link></li>
                        <li><Link to='/User'>User</Link></li>
                    </ul>

                    <Route path='/' exact component={Index} />
                    <Route path='/home/' component={Home} />
                    <Route path='/user/' component={User} />
                </div>
            </Router>
        )
    }

    export default AppRouter;

    // 嵌套路由(Nested Route)
    function Index(){
        return <h2>Index</h2>
    }

    function Home(){
        return <h2>Home</h2>
    }

    function User(){
        return <h2>User</h2>    
    }

    function Header(){
        return(
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Index'>Index</Link></li>
                <li><Link to='/User'>User</Link></li>
            </ul>
        )
    }


    function AppRouter(){
        return(
            <Router>
                <div>
                
                    <Header/>

                    <Route path='/' exact component={Home} />
                    <Route path='/Index/' component={Index} />
                    <Route path='/user/' component={User} />
                </div>
            </Router>
        )
    }

    export default AppRouter;

    ```
---

*   ## :palm_tree:主要API:

    *   < Switch > :
        *   children: Node
        ```javascript
        /*
        <Switch>的独特之处是独它仅仅渲染一个路由

        */

        // 下面的代码只会渲染About组件
        import { Switch, Route } from 'react-router'
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/:user" component={User}/>
        <Route component={NoMatch}/>
        </Switch>
        ```
    *   history对象 : 

        *  history堆栈对象是React-router中重要的一个外部依赖包

           其主要作用是: 管理Session对象,及导航对象.拥有一系列属性及方法
        *  length - 打印history堆栈中的数量
        *  action - 指的是当前的动作（action），例如 PUSH，REPLACE 以及 POP 。
        *  push() - 向当前堆栈中加入一个新的条目
        *  pop() - 使用push(),replace()并不会触发pop行为。只有在使用浏览器的前进,后退按钮时才会触发
        *  replace() - 替换当前堆栈中的条目
        *  go(n) | goBack() | block()组织跳转 | goForward()
        *  location对象
            *  pathname -（ string 类型）URL路径。

            *  search -（ string 类型）URL中的查询字符串（query string）
            *  hash -（ string 类型）URL的 hash 分段。
            *  state -（ string 类型）是指 location 中的状态

        ```javascript
        // history 对象是可变的，因此我们建议从 <Route> 的 prop里来获取 location ，而不是从 history.location 直接获取。这样做可以保证 React 在生命周期中的钩子函数正常执
        lass Comp extends React.Component {
        componentWillReceiveProps(nextProps) {
            // locationChanged 变量为 true
            const locationChanged = nextProps.location !== this.props.location

            // 不正确，locationChanged 变量会 *永远* 为 false ，因为 history 是可变的（mutable）。
            const locationChanged = nextProps.history.location !== this.props.history.location
        }
        }

        <Route component={Comp}/>
        ```
    *   location对象(是指你当前的位置)
        ```javascript
        // 结构如下所示
        {
            key: 'ac3df4', // 在使用 hashHistory 时，没有 key
            pathname: '/somewhere'
            search: '?some=search-string',
            hash: '#howdy',
            state: {
                [userDefined]: true
            }
        }
        ```
        *  你使用以下几种方式来获取 location 对象：

            *  在 Route component 中，以 this.props.location 的方式获取

            *  在 Route render 中，以 ({ location }) => () 的方式获取
            *  在 Route children 中，以 ({ location }) => () 的方式获取
            *  在 withRouter 中，以 this.props.location 的方式获取
        *  可以用来判断当前页面位置是否已经发生改变
        ```javascript
        componentWillReceiveProps(nextprops){
            if(nextprops.props !== this.props.location){
                //页面已经发生改变
            }
        }
        ```
        *  简化路由跳转,在UI多的情况下效果显著
        ```javascript
        const locationtTo = {
            pathname : '/books',
            state: { fromDashboard: true }
        }

        <Link to={locationTo} />
        <Redirect to={locationTo} />
        history.push(locationTo)
        history.replace(locationTo)
        ```
    *   match对象
        *   match 对象包含了 <Route path> 如何与URL匹配的信息。match 对象包含以下属性：

        *   params （ object 类型）即路径参数，通过解析URL中动态的部分获得的键值对
        *   path （ string 类型）用来做匹配的路径格式。在需要嵌套 <Route> 的时候用到。
        *   url （ string 类型）URL匹配的部分，在需要嵌套 <Link> 的时候会用到。
        *   isExact 整个URL都需要匹配
        ---
        *  你使用以下几种方式来获取 match 对象：

            *  在 Route component 中，以 this.props.location 的方式获取

            *  在 Route render 中，以 ({ location }) => () 的方式获取
            *  在 Route children 中，以 ({ location }) => () 的方式获取
            *  在 withRouter 中，以 this.props.location 的方式获取
    *   < Route >
        *   Route渲染方法
            *   使用Route有三种渲染方法 :

            *   < Route component>
            *   < Route render>
            *   < Route children>
        
        *   Route props :
            *   这三种渲染方法都会获得相同的三个属性

            *   match
            *   location
            *   history

        *   component :
            ```javascript
            // 只有地址在匹配的时候,才会渲染指定的组件
            <Route path='/about/id' component={About}>

            const About = ({match}) => (
                return(
                    <h3>Hello {match.params.id}</h3>
                )
            )
            ```
        *   render: funca
            ```javascript
            // 这种方式对于内联渲染和包装组件切不引起意料之外的重新挂在非常方便
            <Route path='/about' render={() => <div><h3>About</h3></div>} />

            // 另一种方式: 包装合成
            const Gszs = ({component: Component, ...rest}) => (
                <Route {...rest} render={props => (
                    <Fadein>
                        <Component {...props} />
                    </Fadein>
                )} />
            )

            <Gszs path='/about' component={Something} />

            //警告: <Route component>的优先级要比<Route render>高，所以不要在同一个 <Route>中同时使用这两个属性。
            ```
        *   children: func
            ```javascript
            // 有时候你想不管地址是否匹配都渲染一些内容,那么这种情况用children是合适的
            <ul>
            <ListItemLink to="/somewhere"/>
            <ListItemLink to="/somewhere-else"/>
            </ul>

            const ListItemLink = ({ to, ...rest }) => (
            <Route path={to} children={({ match }) => (
                <li className={match ? 'active' : ''}>
                <Link to={to} {...rest}/>
                </li>
            )}/>
            )
            //警告: <Route component>和<Route render> 的优先级都比<Route children> 高，所以在同一个<Route>中不要同时使用一个以上的属性.
            ```
        *   exact: bool
            ```javascript
            //当值为true时,这要求与location.pathname完全匹配
            
            //下main这段代码如果不加exact会见Home组件的内容也渲染出来
            <Route path='/' component={Home} />
            <Route path='/about' component={About} />
            
            ```
        *   strict: bool
            ```javascript
            //当值为true时,则要求路径有斜线时,匹配者也必须有斜线
            ```
    *   Prompt
        *   当用户离开当前页的时候做出提示. 当你的应用处在特定状态, 此状态不希望用户离开时(例如填写表格到一半), 你应该使用<Prompt>
        
        *   message: string
            ```javascript
            // 当用户导航离开时提示用户一些信息
            <Prompt message="你确定要离开吗?" />
            ```

        *   message: func
            ```javascript
            // 会与用户前往下一个地址(location)
            <Prompt message=(location => (
               '你确定要前往'+location.pathname+'吗?'
            )/>
            ```
        *   whien: bool
            ```javascript
            /* 你可以选择性的渲染,而不是警戒性渲染
            •  当when={true}时禁止导航
            •  当when={false}时允许导航
            */
            <Prompt when={Ooa} message="你确定要离开吗?" />
            ```
        *   Redirect :
            ```javascript
            // 渲染Redirect的时候将会重定向到一个新的地址
            import { Route, Redirect } from 'react-router'

            <Route exact path="/" render={() => (
            loggedIn ? (
                <Redirect to="/dashboard"/>
            ) : (
                <PublicHomePage/>
            )
            )}/>
            ```
            *   to : string
                ```javascript
                // 重定向到至目标url
                <Redirect to='/about/' />
                ```
            *   to : object (location对象)
                ```javascript
                <Redirect to={
                    pathname: '/about/',
                    search: '?ooa=11',
                    state: { referrer: currentlocation }
                }>
                ```
            *   push : bool
                ```javascript
                // 当bool为true时将会把地址添加到历史地址记录中(默认true)
                <Redirect push to='/about/' />
                ```
            *   from : string
                ```javascript
                // 将from中的地址重定向至to中指定的.这在Switch对象中可以当作一个匹配路径
                <Switch>
                    <Redirect from='/books/about' to='books/author' />
                    <Route path='/books/about' component={About} />
                </Switch>
                
                ```
        *   < NavLink >

            *   NavLink是Link的升级版,会在与路径匹配时,添加一些样式属性

            *   activeStyle : string
                ```javascript
                <NavLink to="/faq" activeClassName="selected">FAQs</NavLink>   
                ```

            *   activeStyle : object
                ```javascript
                <NavLink
                to="/faq"
                activeStyle={{
                    fontWeight: 'bold',
                    color: 'red'
                }}
                >FAQs</NavLink>    
                ```

            *   exact: bool
                *   当值为 true 时, 只有当地址完全匹配 class 和 style 才会应用

            *   strict : bool
                *   strict=true 启动更严格的验证模式,会验证url最后的斜线

            *   isActive : bool
                ```javascript
                // 添加用于确定链接是否活动的额外逻辑的功能。
                const oddEvent = (match, location) => {
                if (!match) {
                    return false
                }
                const eventID = parseInt(match.params.eventID)
                return !isNaN(eventID) && eventID % 2 === 1
                }

                <NavLink
                to="/events/123"
                isActive={oddEvent}
                >Event 123</NavLink>
                ```