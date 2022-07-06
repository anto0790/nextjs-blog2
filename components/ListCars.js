import React from "react";


export default function ListCars ({arrayCars}) {

    return(
        <ul>
            {arrayCars.map(car => <li key={car.id}>{car.marca} {car.modelo} {car.id}</li>)}
        </ul>
    )
}