import React ,{ComPonent} from 'react'
import ReactDOM from 'react-dom'
import Grouter from './router'
import {AppContainer} from 'react-hot-loader'
// import store from 'demo/demo03/store'
import {Provider} from 'react-redux'
// import Gadmin from 'components/admin'

//初始化
renderWithHotReload(new Grouter().render())

/*热更新*/
if (module.hot) {

    // // redux模块热替换
    // module.hot.accept("./redux/reducers/userInfo.js", () => {
    //     const nextCombineReducers = require("./redux/reducers/userInfo.js").default;
    //     store.replaceReducer(nextCombineReducers);
    // });
    module.hot.accept('./router', () => {
        const Grouter = require('./router').default;
        renderWithHotReload(Grouter());
    });
}

function renderWithHotReload(RootElement) {
    ReactDOM.render(
        <AppContainer>
            {/* <Provider store={store}>
                {RootElement}
            </Provider> */}
            <Grouter/>
        </AppContainer>,
        document.getElementById('app')
    )
}

renderWithHotReload()