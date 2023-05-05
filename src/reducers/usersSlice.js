import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const AUTH_URL = 'https://booking-app-api-1lk0.onrender.com/auth'
const USERS_URL = 'https://booking-app-api-1lk0.onrender.com/users'
let accessToken;
if (localStorage.getItem("user") === "undefined") {
    accessToken = []
} else {
    accessToken =  JSON.parse(localStorage.getItem("user"))
   
}


const initialState = {
    users: accessToken||[],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

//fetch all users
export const fetchAllUsers = createAsyncThunk('users/fetchAllUsers', async () => {
    
    const response = await axios.get(`${USERS_URL}`, {
        headers: {
            token:`bearer ${JSON.parse(localStorage.getItem("user")).token}`
        }
    })
    return response.data
})
export const signUp = createAsyncThunk('users/signUp', async (initialPost, thunkAPI) => {
    try {
        const response = await axios.post(`${AUTH_URL}/register`, initialPost)
        console.log(response)
        
        return response.data
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

export const login = createAsyncThunk('users/login', async (initialPost,thunkAPI) => {
    console.log(initialPost)
    try {
        const response = await axios.post(`${AUTH_URL}/login`, initialPost)
    
        
        return response.data
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
})


export const getTheUser = createAsyncThunk('users/getTheUser', async (_id) => {
    const response = await axios.get(`${USERS_URL}/${_id}`)
    
    return response.data
})

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers(builder) {
        builder
        .addCase(fetchAllUsers.pending, (state, action) => {
            state.status = 'loading';
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload
            })
            .addCase(fetchAllUsers.rejected, (state, action)=>{
                state.status = 'failed';
                state.error=action.error.message
            })
            .addCase(signUp.pending, (state, action)=>{
                state.status = 'loading';
            })
            .addCase(signUp.fulfilled, (state, action)=>{
                state.status = 'succeeded';
                state.users = action.payload
                console.log(action.payload)
            })
            .addCase(signUp.rejected, (state, action)=>{
                state.status = 'failed';
                state.error = action.error.message
                alert(action.payload)
                console.log(action.payload)
            })
            .addCase(login.pending, (state, action)=>{
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action)=>{
                state.status = 'succeeded';
                state.users = action.payload
                localStorage.setItem("user",JSON.stringify(action.payload))
            })
            .addCase(login.rejected, (state, action)=>{
                state.status = 'failed';
                state.error = action.error.message
                console.log(action)
                alert(action.payload.message)
            })
            .addCase(getTheUser.pending, (state, action)=>{
                state.status = 'loading';
            })
            .addCase(getTheUser.fulfilled, (state, action)=>{
                state.status = 'succeeded';
                state.users = action.payload
            })
            .addCase(getTheUser.rejected, (state, action)=>{
                state.status = 'failed';
                state.error=action.error.message
            })
    }
})






export default usersSlice.reducer;