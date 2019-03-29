// store.js

import {createStore} from 'redux'
import CounterReducer from './reducer'
import {devToolsEnhancer} from 'redux-devtools-extension/logOnlyInProduction'

const store = createStore(CounterReducer,devToolsEnhancer())
export default store