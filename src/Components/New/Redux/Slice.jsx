import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        Increment:(state,actions) =>{
            state.value = state.value + 1;
        },
        Decrement:(state,actions) =>{
            state.value = state.value - 1;
        },
        IncBy:(state,actions) => {
            state.value = state.value + actions.payload
        }
        
    }
})

export const { Increment, Decrement,IncBy} = Slice.actions;
export default Slice.reducer;