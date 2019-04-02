import React ,{ComPonent} from 'react'
import ReactDOM from 'react-dom'
// import getRouter from 'router/router'
import {AppContainer} from 'react-hot-loader'
// import store from 'demo/demo03/store'
import {Provider} from 'react-redux'
import Movie from 'demo/demo03/movie.js'

//初始化
// renderWithHotReload(getRouter())

/*热更新*/
// if (module.hot) {

//     // redux模块热替换
//     // module.hot.accept("./redux/reducers/userInfo.js", () => {
//     //     const nextCombineReducers = require("./redux/reducers/userInfo.js").default;
//     //     store.replaceReducer(nextCombineReducers);
//     // });
//     // module.hot.accept('./router/router', () => {
//     //     const getRouter = require('./router/router').default;
//     //     renderWithHotReload(getRouter());
//     // });
// }

function renderWithHotReload(RootElement) {
    ReactDOM.render(
        <AppContainer>
            {/* <Provider store={store}>
                {RootElement}
            </Provider> */}
            <Movie/>
        </AppContainer>,
        document.getElementById('app')
    )
}

renderWithHotReload()