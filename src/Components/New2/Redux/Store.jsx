import { configureStore } from "@reduxjs/toolkit";
import myReducer from './Silce'

export const store = configureStore({
    reducer:{
        myKey:myReducer
    }
})