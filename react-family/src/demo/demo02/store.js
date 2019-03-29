// demo2 - store.js

import {createStore} from 'redux'
import DateReducer from './reducer'
import {devToolsEnhancer} from 'redux-devtools-extension/logOnlyInProduction'

const store = createStore(DateReducer, devToolsEnhancer())
export default store