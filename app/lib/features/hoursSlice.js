import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    hours: [],
    error: ''
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
        }
    }
})

export const {getHours, setError} = hoursSlice.actions
export default hoursSlice.reducer

export const fetchHours =(obj)=> async dispatch => {
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/fetchHours').then((resp)=>{dispatch(getHours(resp.data))})
}