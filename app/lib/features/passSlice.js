import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
    currentUser: {},
    signerror: '',
    regerror: '',
    isAdmin: false,
    isLogged: false,
    isIn: false,
    address: {}
}

export const passSlice = createSlice({
    name: 'pass',
    initialState,
    reducers: {
        getUsers: (state, action)=> {
            state.users = action.payload
        },
        getCurrentUser: (state, action)=> {
            state.currentUser = action.payload
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
        },
        setIsIn: (state, action)=> {
            state.isIn = action.payload
        },
        setAddress: (state, action)=> {
            state.address = action.payload
        }
    }
})

export const {getUsers, getCurrentUser, setAdmin, setLogin, setSignError, setRegError, setIsIn, setAddress } = passSlice.actions
export default passSlice.reducer

export const fetchAllUsers =()=> async dispatch => {
    dispatch(setRegError('Fetching users...'))
    await axios.get(process.env.NEXT_PUBLIC_URL + '/api/fetchAllUsers').then((resp)=>{
        dispatch(getUsers(resp.data))
        dispatch(setSignError('3'))
    })
}

export const fetchUsers =(obj)=> async dispatch => {
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/fetchUsers',{obj}).then((resp)=>{dispatch(getCurrentUser(resp.data))})
}

export const checkSignIn =(obj)=> async dispatch => {
    dispatch(setSignError('Please wait...'))
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/signIn',{obj}).
    then((resp)=>{
        dispatch(getCurrentUser(resp.data.users)); 
        dispatch(setLogin(resp.data.isLogged)); 
        dispatch(setAdmin(resp.data.isadmin)); 
        dispatch(setSignError(resp.data.message))
    })
}

export const removeUser =(obj)=> async dispatch => {
    dispatch(setRegError('Updating records...'))
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/removeUser',{obj}).then((resp)=>{
        dispatch(setRegError(resp.data.message))
        dispatch(setSignError('1'))
    })
}

export const addUser =(obj)=> async dispatch => {
    dispatch(setRegError('Creating user...'))
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/addUser',{obj}).then((resp)=>{
        dispatch(setRegError(resp.data.message))
        dispatch(setSignError('1'))
    })
}

export const clockIn =(obj)=> async dispatch => {
    dispatch(setRegError('Clockin...'))
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/clockIn',{obj}).then((resp)=>{dispatch(setRegError(resp.data.message))})
}

export const insertWorkplace =(obj)=> async dispatch => {
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/insertWorkplace',{obj}).then((resp)=>{dispatch(setRegError(resp.data.message))})
}

export const reverseGeo =(obj)=> async dispatch => {
    await axios.post(process.env.NEXT_PUBLIC_URL + '/api/reverseGeo',{obj}).then((resp)=>{dispatch(setAddress(resp.data))})
}