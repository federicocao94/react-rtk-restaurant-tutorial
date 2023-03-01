import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "../feature/reservationSlice"
import customerReducer from "../feature/customerSlice"

export const store = configureStore({
    reducer: {
        reservations: reservationReducer,
        customers: customerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch