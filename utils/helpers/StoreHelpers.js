import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInfo: null
}

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload
    },
    setTravelTimeInfo: (state, action) => {
      state.destination = action.payload
    },
    setDistance: (state, action) => {
      state.travelTimeInfo = action.payload
    }
  },

})

export const { setOrigin, setDistance, setTravelTimeInfo } = navSlice.actions


export const getOrigin = (state) => state.nav.origin
export const getDestination = (state) => state.nav.destination
export const getTravelTimeInfo = (state) => state.nav.travelTimeInfo

export default navSlice.reducer
