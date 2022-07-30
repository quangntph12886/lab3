// import {createStore} from 'redux'
// import rootReducer from './reducer'

// const store = createStore(rootReducer)
// export default store

import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './reducer'

const store = configureStore({
    reducer: {
        cart: rootReducer
    }
})

export default store