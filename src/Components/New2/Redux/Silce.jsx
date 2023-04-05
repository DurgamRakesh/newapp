import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        inc:(state,action) => {
            state.value = state.value + 1
        },
        dec:(state,action) => {
            state.value = state.value - 1
        },
        byamt:(state,action) => {
            state.value = state.value + action.payload
        }
    }
})
export const { inc,dec,byamt} = Slice.actions;
export default Slice.reducer;