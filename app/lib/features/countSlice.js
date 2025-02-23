import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    food: [],
}

export const countSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        get_all_food: (state, action)=>{
            state.food = action.payload
        },
        add_food: (state, action)=>{
            state.food = [...state.food, action.payload]
        },
        remove_food: (state, action)=>{
            state.food = state.food.filter((el)=>{return el.id !== action.payload})
        },
        clear_food: (state, action)=>{
            state.food = []
        }
    }
})

export const {get_all_food, add_food, remove_food, clear_food} = countSlice.actions
export default countSlice.reducer

export const fetchFood =()=> async dispatch => {
    await axios.get(process.env.NEXT_PUBLIC_URL + '/api/fetchFood').then((resp)=>{console.log(resp?.data, 'action'); dispatch(get_all_food(resp.data))})
}