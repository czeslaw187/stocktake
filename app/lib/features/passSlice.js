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

export const {getUsers, clearUsers, setAdmin, setLogin, setSignError, setRegError } = passSlice.actions
export default passSlice.reducer

export const fetchAllUsers =()=> async dispatch => {
    await axios.get(process.env.NEXT_PUBLIC_URL + '/api/fetchAllUsers').then((resp)=>{dispatch(getUsers(resp.data))})
}

export const fetchUsers =(obj)=> async dispatch => {
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/fetchUsers',{obj}).then((resp)=>{dispatch(getUsers(resp.data))})
}

export const checkSignIn =(obj)=> async dispatch => {
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/signIn',{obj}).then((resp)=>{dispatch(getUsers(resp.data.users)); dispatch(setLogin(resp.data.isLogged)); dispatch(setAdmin(resp.data.isadmin)); dispatch(setSignError(resp.data.message))})
}

export const removeUser =(obj)=> async dispatch => {
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/removeUser',{obj}).then((resp)=>{dispatch(setRegError(resp.data.message))})
}

export const addUser =(obj)=> async dispatch => {
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/addUser',{obj}).then((resp)=>{dispatch(setRegError(resp.data.message))})
}