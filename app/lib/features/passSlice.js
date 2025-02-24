import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: []
}

export const passSlice = createSlice({
    name: 'pass',
    initialState,
    reducers: {
        getUsers: (state, action)=> {
            state.users = action.payload
        },
        addUser: (state, action)=> {
            state.users = [...state.users, action.payload]
        },
        removeUser: (state, action) => {
            let sieved = [...state.users]
            state.users = sieved.filter((el)=>{return el.id != action.payload})
        },
        clearUsers: (state)=> {
            state.users = []
        }
    }
})

export const {getUsers, addUser, removeUser, clearUsers} = passSlice.actions
export default passSlice.reducer