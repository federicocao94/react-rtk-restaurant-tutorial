import React from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../feature/customerSlice";
import { removeReservation } from "../feature/reservationSlice";

interface ReservationCardTypes {
    name: string,
    index: number
}

export default function ReservationCard({ name, index }: ReservationCardTypes) {

    const dispatch = useDispatch();

    const onClickCard = () => {
        dispatch(removeReservation(index))
        dispatch(addCustomer(name))
    }

    return <div onClick={onClickCard} className="reservation-card-container" key={name + index}> {name} </div>
}