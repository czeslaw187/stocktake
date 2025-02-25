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

export const fetchFood =(obj)=> async dispatch => {
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/fetchFood',{obj}).then((resp)=>{dispatch(get_all_food(resp.data))})
}

export const addFoodItem =(obj)=> async dispatch => {
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/addFoodItem',{obj}).then((resp)=>{dispatch(add_food(resp.data))})
}

export const removeFoodItem =(obj)=> async dispatch => {
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/removeFoodItem',{obj}).then((resp)=>{console.log(resp.data,'action'); dispatch(remove_food(resp.data.id))})
}