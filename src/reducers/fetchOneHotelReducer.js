import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
export const HOTELS_URL = 'https://booking-app-api-1lk0.onrender.com/hotels'

const initialState = {
    hotels: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}




export const fetchOneHotel = createAsyncThunk('lists/fetchOneHotel', async (id) => {
    
    
    const response = await axios.get(`${HOTELS_URL}/find/${id}`)
    
    return response.data
});








export const listsSlice = createSlice({
    name: 'lists',
    initialState,
    extraReducers(builder) {
        builder
        .addCase(fetchOneHotel.pending, (state, action) => {
            state.status = 'loading';
            })
            .addCase(fetchOneHotel.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.hotels = action.payload
            })
            .addCase(fetchOneHotel.rejected, (state, action)=>{
                state.status = 'failed';
                state.error=action.error.message
            })
        
        
            
    }
})






export default listsSlice.reducer;