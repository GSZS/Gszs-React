import React ,{ComPonent} from 'react'
import ReactDOM from 'react-dom'
import getRouter from 'router/router'
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