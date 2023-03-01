import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface CustomerState {
    value: {
        name: string,
        dishes: string[]
    }[]
}

export interface Order {
    person: string,
    dish: string
}

const initialState: CustomerState = {value: []}

export const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<string>) => {
            state.value.push({name: action.payload, dishes: []})
        },
        removeCustomer: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1);
        },
        addDish: (state, action: PayloadAction<Order>) => {
            const { person, dish } = action.payload;
            if(dish && person) {
                state.value.forEach((customer, index) => {
                    if(customer.name === person) {
                        state.value[index].dishes.push(dish)
                    }
                })
            }
        }
    }
})

export const { addCustomer, addDish, removeCustomer } = customerSlice.actions;

export default customerSlice.reducer