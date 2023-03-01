import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./feature/reservationSlice";

function App() {

  const [reservationNameInput, setReservationNameInput] = useState("");

  const reservations = useSelector((state: RootState) => state.reservations.value)

  const customers = useSelector((state: RootState) => state.customers.value)

  const dispatch = useDispatch();

  const handleAddReservation = () => {
    if(!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput))
    setReservationNameInput("");
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCard name={name} index={index}/>
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationNameInput} onChange={(e) => setReservationNameInput(e.target.value)} />
            <button onClick={handleAddReservation}>Add reservation</button>
            <div>Click on a reservation to move it to customers list</div>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer, index) => {
            return <CustomerCard name={customer.name} index={index} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;