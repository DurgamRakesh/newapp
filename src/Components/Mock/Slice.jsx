import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state,actions) => {
            state.value = state.value + 1;
        },
        decrement:(state,actions) => {
            state.value = state.value - 1;

        }
    }
})
export const {increment,decrement} = Slice.actions;
export default Slice.reducer