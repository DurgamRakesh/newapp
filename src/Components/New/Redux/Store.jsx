import { configureStore } from "@reduxjs/toolkit";
import myReducer from './Slice'

export const store = configureStore({
    reducer:{
        CounterKey: myReducer
    }
})