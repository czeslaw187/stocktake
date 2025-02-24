import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
    signerror: '',
    regerror: '',
    isAdmin: false,
    isLogged: false
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
        },
        setAdmin: (state, action)=> {
            state.isAdmin = action.payload
        },
        setLogin: (state, action)=> {
            state.isLogged = action.payload
        },
        setSignError: (state, action)=> {
            state.signerror = action.payload
        },
        setRegError: (state, action)=> {
            state.regerror = action.payload
        }

    }
})

export const {getUsers, addUser, removeUser, clearUsers, setAdmin, setLogin, setSignError, setRegError } = passSlice.actions
export default passSlice.reducer

export const fetchUsers =()=> async dispatch => {
    await axios.get(process.env.NEXT_PUBLIC_URL + '/api/fetchUsers').then((resp)=>{dispatch(getUsers(resp.data))})
}

export const checkSignIn =(obj)=> async dispatch => {
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/signIn',{obj}).then((resp)=>{dispatch(setLogin(resp.data.isLogged)); dispatch(setAdmin(resp.data.isadmin)); dispatch(setSignError(resp.data.message))})
}