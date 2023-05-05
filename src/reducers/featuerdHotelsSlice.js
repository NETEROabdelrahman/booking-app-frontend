import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
export const HOTELS_URL = 'https://booking-app-api-1lk0.onrender.com/hotels'

const initialState = {
    hotels: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}




export const fetchFeatuerd = createAsyncThunk('lists/fetchFeatuerd', async () => {
    
    
    const response = await axios.get(`${HOTELS_URL}?featured=true`)
    
    return response.data
});


export const listsSlice = createSlice({
    name: 'lists',
    initialState,
    extraReducers(builder) {
        builder
        .addCase(fetchFeatuerd.pending, (state, action) => {
            state.status = 'loading';
            })
            .addCase(fetchFeatuerd.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.hotels = action.payload
            })
            .addCase(fetchFeatuerd.rejected, (state, action)=>{
                state.status = 'failed';
                state.error=action.error.message
            })
            
    }
})






export default listsSlice.reducer;