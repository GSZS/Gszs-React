#### 记录学习React时遇到的一些错误:
---

*    Objects are not valid as a React child (found: object with keys {}). If you meant to render a collection of children, use an array instead.
```javascript
<div>{a:1}</div> ❌  渲染对象报错

<div>{1}</div> ✔
```
