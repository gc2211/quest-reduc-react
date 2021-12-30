import {createStore , applyMiddleware} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'
import rootReducer from './rootReducer'

const store = createStore(rootReducer,applyMiddleware(logger))

export default store