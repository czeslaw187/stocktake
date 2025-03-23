import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setRegError } from "./passSlice";

const initialState = {
    hours: [],
    error: '',
}

export const hoursSlice = createSlice({
    name: 'hours',
    initialState,
    reducers: {
        getHours: (state, action)=> {
            state.hours = action.payload
        },
        setError: (state, action)=> {
            state.error = action.payload
        },
    }
})

export const {getHours, setError, setTotal} = hoursSlice.actions
export default hoursSlice.reducer

export const fetchHours =(obj)=> async dispatch => {
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/fetchHours',{obj}).then((resp)=>{dispatch(getHours(resp.data))})
}

export const addHour =(obj)=> async dispatch => {
    dispatch(setRegError('Updating record...'))
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/addHour',{obj}).then((resp)=>{
        dispatch(setError(resp.data.message))
    })
}

export const clearHours =(obj)=> async dispatch => {
    dispatch(setRegError('Updating record...'))
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/clearHours',{obj}).then((resp)=>{
        dispatch(setRegError(resp.data.message))
        dispatch(setError('5'))
    })
}

export const insertHours =(obj)=> async dispatch => {
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/insertHours',{obj}).then((resp)=>{dispatch(setRegError(resp.data.message))})
}