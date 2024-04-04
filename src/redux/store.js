import { createStore,applyMiddleware } from 'redux'
import cakeReducer from './cakes/cakeReducer'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// React Redux - Store - https://www.youtube.com/watch?v=271tQskDiCg
// React Redux - Cakes and Ice Creams - https://www.youtube.com/watch?v=fY-Wq0k_9P4
// React Redux - Logger Middleware - https://www.youtube.com/watch?v=6AGdeO28UKY 
// React Redux - Redux Thunk Get Request - https://www.youtube.com/watch?v=tcCS4mGAq7Q

const store = createStore(rootReducer,applyMiddleware(logger))

export default store