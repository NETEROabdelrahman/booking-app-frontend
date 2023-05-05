import { configureStore } from '@reduxjs/toolkit'
 import usersReducer from './reducers/usersSlice'
 import hotelsReducer from './reducers/hotelsSlice.js'
 import hotelsByTypeReducer from './reducers/fetchHotelsByTypeSlice.js'
 import featuredHotelsReducer from './reducers/featuerdHotelsSlice.js'
 import hotelsByCityReducer from './reducers/fetchHotelsByCitySlice'
 import hotelsRoomsReducer from './reducers/roomsReducer'
 import oneHotelReducer from './reducers/fetchOneHotelReducer'
 import allHotelsReducer from './reducers/fetchAllHotelsReducer'


export const store = configureStore({
    reducer: {
        users: usersReducer,
        hotels: hotelsReducer,
        hotelsType: hotelsByTypeReducer,
        featuredHotels: featuredHotelsReducer,
        hotelsByCity: hotelsByCityReducer,
        hotelsRooms: hotelsRoomsReducer,
        oneHotel: oneHotelReducer,
        allHotels:allHotelsReducer
    }
});