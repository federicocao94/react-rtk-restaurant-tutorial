import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { addDish, removeCustomer } from "../feature/customerSlice"

interface CustomerTypes {
    name: string,
    index: number
}

export default function CustomerCard({ name, index }: CustomerTypes) {

    const dispatch = useDispatch();

    const [dishInput, setDishInput] = useState("");

    const handleAddDish = () => {
        dispatch(addDish({ person: name, dish: dishInput }));
        setDishInput("");
    }

    const customers = useSelector((state: RootState) => state.customers.value);

    const getDishes = (name: string) => {
        return customers.find(customer => customer.name === name )?.dishes
    }

    const handleRemoveCustomer = () => {
        dispatch(removeCustomer(index))
    }

    return <>
        <div className="customer-food-card-container" key={name}>
            <p>{name}</p>
            <div className="customer-foods-container">
                <div className="customer-food">
                    {getDishes(name)?.map(dish => {
                        return <p className="customer-food-container">{dish}</p>})}
                </div>
                <div className="customer-food-input-container">
                    <input value={dishInput} onChange={(e) => setDishInput(e.target.value)}/>
                    <button onClick={handleAddDish}>Add dish</button>
                </div>
            </div>
            <div>
                <button onClick={handleRemoveCustomer}>Remove customer</button>
            </div>
        </div>
    </>
}