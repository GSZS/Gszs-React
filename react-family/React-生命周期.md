#### :seedling: 生命周期 : 
---

#### 写在前面,每一个React组件在加载时都有一个对应的生命周期函数,下面介绍

*     componentWillMount()
    ```javascript
    // 会在组件render()执行之前执行一次,并且其永远都只执行一次
      
    componentWillMount(){
        ...//在这里的代码永远都只执行一次
    }
    ```
---

*     componentDidMount()
    ```javascript
    /* 这个方法会在组件加载完毕后立即执行,这时已经生成了对应的DOM结构
       如果你想和其他JavaScript框架一起使用，可以在这个方法中执行setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。
    */
    componentDidMount(){
        setInterval(() => {
            //
        },1000)
    }
    ```
---

*     componentWillReceiveProps()
    ```javascript
    /* 在组件接收到一个新的prop时被执行。这个方法在初始化render时不会被调用。
    */
    componentWillReceiveProps(){
        //
    }
    ```
---

*     shouldComponentUpdate()
    ```javascript
    /*
    这个方法在首次render()时不会触发,之后当props或者state发生改变时触发,返回一个Boolean,如果shouldComponentUpdate返回false, render()则会在下一个state change之前被完全跳过。(另外componentWillUpdate和 componentDidUpdate也不会被执行).
    如果组件有上百个可以考虑使用此生命函数进行优化
    */
    shouldComponentUpdate(nextprops, nextstate){
        return nextprops.id === this.props.id ? '' : ''
        //可以在这进行判断某些组件是否需要更新
    }
    ```
---

*     componentWillUpdate()
    ```javascript
    /*
    这个方法在首次render()时不会执行,之后当props或者state状态发生变化时会触发
    */
    componentWillUpdate(){
        //用在组件更新前
    }
    ```
---

*     componentDidUpdate()
    ```javascript
    /*
    这个方法在首次render()时不会执行,之后在每次render()执行后将触发,可以用来清楚提示信息
    */
    componentDidUpdate(){
        ...
    }
    ```
---

*     componentWillUnmount()
    ```javascript
    /*这个方法在卸载组件时执行,可以用来清除计时器,或者是清除由componentDidMount()创建的DOM元素
    */
    ```