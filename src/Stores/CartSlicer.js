import {createSlice} from "@reduxjs/toolkit";

const cart = createSlice({
    name : "CartSlice",
    initialState : {
        items : [],
        count : 0
    },
    reducers : {
        addItem : (state,action) => {
            state.items.push({
                ...action.payload,
                quantity : 1
            })
            state.count += 1;
        },

        increaseItem : (state,action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if(item){
                item.quantity += 1;
                state.count += 1;
            }
        },

        decreaseItem : (state,action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if(item.quantity > 1){
                item.quantity -= 1;
            }else{
                state.items = state.items.filter(item => item.id !== action.payload.id);
            }
            state.count -= 1;
        },
    }
});

export const {addItem,increaseItem,decreaseItem} = cart.actions;
export default cart.reducer;