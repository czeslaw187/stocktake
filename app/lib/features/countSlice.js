import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    food: [],
    error: '',
    categories: []
}

export const countSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        get_all_food: (state, action)=>{
            state.food = action.payload
        },
        set_error: (state, action)=> {
            state.error = action.payload
        },
        clear_food: (state, action)=>{
            state.food = []
        },
        get_categories: (state, action)=> {
            state.categories = action.payload
        }
    }
})

export const {get_all_food, set_error, clear_food, get_categories} = countSlice.actions
export default countSlice.reducer

export const fetchFood =(obj)=> async dispatch => {
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/fetchFood',{obj}).then((resp)=>{dispatch(get_all_food(resp.data))})
}

export const addFoodItem =(obj)=> async dispatch => {
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/addFoodItem',{obj}).then((resp)=>{dispatch(set_error(resp.data.message))})
}

export const removeFoodItem =(obj)=> async dispatch => {
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/removeFoodItem',{obj}).then((resp)=>{dispatch(set_error(resp.data.message))})
}

export const updateFoodItem =(obj)=> async dispatch => {
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/updateFoodItem',{obj}).then((resp)=>{dispatch(set_error(resp.data.message))})
}

export const fetchCategories =()=> async dispatch => {
    await axios.get(process.env.NEXT_PUBLIC_URL + '/api/fetchCategories').then((resp)=>{dispatch(get_categories(resp.data))})
}