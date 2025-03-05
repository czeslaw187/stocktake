import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    logs: [],
    error: ''
}

export const hoursSlice = createSlice({
    name: 'hours',
    initialState,
    reducers: {
        getHours: (state, action)=> {
            state.logs = action.payload
        },
        setError: (state,acrion)=> {
            state.error = acrion.payload
        }
    }
})

export const {getHours, setError} = hoursSlice.actions
export default hoursSlice.reducer

export const fetchHours =()=> async dispatch => {
    await axios.get(process.env.NEXT_PUBLIC_URL + '/api/fetchHours').then((resp)=>{dispatch(getHours(resp.data))})
}

export const addHour =(obj)=> async dispatch => {
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/addHour',{obj}).then((resp)=>{dispatch(setError(resp.data.message))})
}

export const removeHours =(obj)=> async dispatch => {
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/removeHours',{obj}).then((resp)=>{dispatch(setError(resp.data.message))})
}