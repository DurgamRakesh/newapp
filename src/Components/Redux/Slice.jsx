import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        inc:(state,actions) => {
            state.value = state.value+actions.payload
        },
        dec:(state) => {
            state.value = state.value-1
        }
    }
})
export const {inc,dec} = Slice.actions;
export default Slice.reducer