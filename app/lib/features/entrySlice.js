import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    entries: [],
    error: ''
}

export const entrySlice = createSlice({
    name: 'entry',
    initialState,
    reducers: {
        get_entries: (state, action)=> {
            state.entries = action.payload
        },
        set_error: (state, action)=> {
            state.error = action.payload
        }
    }
})

export const {get_entries} = entrySlice.actions
export default entrySlice.reducer

export const fetchEntries =(obj)=> async dispatch => {
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/fetchEntries',{obj}).then((resp)=>{dispatch(get_entries(resp.data))})
}