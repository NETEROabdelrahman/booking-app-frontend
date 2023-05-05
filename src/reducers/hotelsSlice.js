import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
export const HOTELS_URL = 'https://booking-app-api-1lk0.onrender.com/hotels'

const initialState = {
    hotels: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const fetchHotels = createAsyncThunk('lists/fetchHotels', async () => {
    
    
    const response = await axios.get(`${HOTELS_URL}/countByCity?cities=berlin,Dubai,London`)
    
    return response.data
});











export const listsSlice = createSlice({
    name: 'lists',
    initialState,
    extraReducers(builder) {
        builder
        .addCase(fetchHotels.pending, (state, action) => {
            state.status = 'loading';
            })
            .addCase(fetchHotels.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.hotels = action.payload
            })
            .addCase(fetchHotels.rejected, (state, action)=>{
                state.status = 'failed';
                state.error=action.error.message
            })
        
        
        
            
    }
})






export default listsSlice.reducer;