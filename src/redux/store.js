import {  configureStore  }  from   "@reduxjs/toolkit"
import userSlice from "./slice"

const store = configureStore({
    reducer:{
        app:userSlice
    }
})

export default store