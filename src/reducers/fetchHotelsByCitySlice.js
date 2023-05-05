import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
export const HOTELS_URL = 'https://booking-app-api-1lk0.onrender.com/hotels'

const initialState = {
    hotels: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}




export const fetchHotelsByCity = createAsyncThunk('lists/fetchHotelsByCity', async (initialPost) => {
    
    console.log(initialPost)
    const response = await axios.get(`${HOTELS_URL}?city=${initialPost.destination}&min=${initialPost.min || 0 }&max=${initialPost.max || 9000}`)
    console.log(response.data)
    
    return response.data
});





export const listsSlice = createSlice({
    name: 'lists',
    initialState,
    extraReducers(builder) {
        builder
        .addCase(fetchHotelsByCity.pending, (state, action) => {
            state.status = 'loading';
            })
            .addCase(fetchHotelsByCity.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.hotels = action.payload
            })
            .addCase(fetchHotelsByCity.rejected, (state, action)=>{
                state.status = 'failed';
                state.error=action.error.message
            })
        
            
    }
})






export default listsSlice.reducer;