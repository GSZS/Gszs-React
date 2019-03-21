#### 记录Redux一些疑难点:
---

*   API:

    *   [mapStateToProps](#palm_treemapStateToProps)

    *   [mapDispatchToProps](#palm_treemapDispatchToProps)

    *   [Action](#palm_treeAction)

---

*   ## :palm_treemap:mapStateToProps
    ```javascript
    /*[mapStateToProps(state, [ownProps]): stateProps] 

    mapStateToProps是connect()中的第一个参数,如果定义该参数,那么其会监听Redux store的变化,
    只要Redux store发生变化就会调用该参数,然后将Store中的state映射至组件的props.

    ownProps代表传入组件的Props,如果定义了该参数,当组件接收到新的Props时,mapStateToProps会被重新调用

    */

    const mapStateToProps = state => ({
        todos : state.xxx // xxx是来自Reducer中所定义的值
    })
    ```

*   ## :palm_treemap:mapDispatchToProps
    ```javascript
    /* [mapDispatchToProps(dispatch, [ownProps]): dispatchProps] 

    mapDispatchToProps是将需要更改state的行为(action)派发给reducers
    */

    const mapDispatchToProps = dispatch => ({
        todos: id => dispatch(xxx())
    })

    ```

*   ## :palm_treemap:connect()
    ```javascript
    /* connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
    
    将Redux与React连接在一起,返回一个新的(不会改变原来的组件类)与Redux store连接的组件类
    
    */
    ```

*   ## :palm_treemap:Action
    ```javascript
    /*
        1 - 解释为什么Action的类型都是常量,type都是字符串,或者至少可序列化
        2 - 解释是否存在Action跟Reducer之间的一对一的映射
        
        1 - 答:
            *   使用常量可以避免使用import导入action时避免大小写错误等低级问题
            *   序列化是因性能问题
        2 - 答:
            *   不存在,如果存在的话,那么在处理多个Reducer对一个Action的问题会非常棘手


     */ 
    ```
*   ##  :palm_treemap: dispatch()
    ```javascript
    /*
        dispatch用于将action行为作用于Reducers
    */
    ```

---
![Redux-逻辑图](./Redux.png)