import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setRegError, setSignError } from "./passSlice";

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

//------------------------------------------------FOOD------------------------------------------------
export const fetchAllFood =()=> async dispatch => {
    dispatch(setRegError('Fetching items...'))
    await axios.get(process.env.NEXT_PUBLIC_URL + '/api/fetchAllFood').then((resp)=>{
        dispatch(get_all_food(resp.data))
        dispatch(set_error('1'))
    })
}

export const addFoodItem =(obj)=> async dispatch => {
    dispatch(setRegError('Creating item...'))
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/addFoodItem',{obj}).then((resp)=>{dispatch(set_error(resp.data.message))})
}

export const removeFoodItem =(obj)=> async dispatch => {
    dispatch(setRegError('Removing item...'))
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/removeFoodItem',{obj}).then((resp)=>{dispatch(set_error(resp.data.message))})
}

export const updateFoodItem =(obj)=> async dispatch => {
    dispatch(setRegError('Updating record...'))
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/updateFoodItem',{obj}).then((resp)=>{dispatch(set_error(resp.data.message))})
}

//----------------------------------CATEGORIES-------------------------------------------

export const fetchCategories =()=> async dispatch => {
    dispatch(setRegError('Fetching categories...'))
    await axios.get(process.env.NEXT_PUBLIC_URL + '/api/fetchCategories').then((resp)=>{
        dispatch(get_categories(resp.data))
        dispatch(set_error('1'))
    })
}

export const addCategory =(obj)=> async dispatch => {
    dispatch(setRegError('Creating new category...'))
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/addCategory',{obj}).then((resp)=>{
        dispatch(setRegError(resp.data.message))
        dispatch(set_error('2'))
    })
}

export const deleteCategory =(obj)=> async dispatch => {
    dispatch(setRegError('Removing category...'))
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/deleteCategory',{obj}).then((resp)=>{
        dispatch(setRegError(resp.data.message))
        dispatch(set_error('3'))
    })
}