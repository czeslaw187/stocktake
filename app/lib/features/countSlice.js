import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    food: [],
    drink: []
}

export const countSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        add_food: (state, action)=>{
            state.food = [...state.food, action.payload]
        },
        add_drink: (state, action)=>{
            state.drink = [...state.drink, action.payload]
        },
        remove_food: (state, action)=>{
            state.food = state.food.filter((el)=>{return el.id !== action.payload})
        },
        remove_drink: (state, action)=>{
            state.drink = state.drink.filter((el)=>{return el.id !== action.payload})
        }
    }
})

export const {add_food, add_drink, remove_food, remove_drink} = countSlice.actions
export default countSlice.reducer