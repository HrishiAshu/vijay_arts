//step 1  npm install @reduxjs/toolkit react-redux


//step 2 configure store

import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        //your slices here
        user: userReducer
    }
})

export default AppStore