import React, {useState, useRef} from 'react';
import {v4 as uuidv4} from 'uuid';
import ListCars from '../components/ListCars';
import pagina2B from '../pages/posts/pagina2B';


export default function CarComponent({children}){

    const [cars, setCar] = useState([]);

    const carMar = useRef();
    const carMod = useRef();
    const idCar = useRef();

    const addCars = () => {
        const infoMar = carMar.current.value;
        const infoMod = carMod.current.value;

        const newCar = {
            marca: infoMar,
            modelo: infoMod,
            id: uuidv4(),
        }

        setCar([...cars, newCar]);

        carMar.current.value = null;
        carMod.current.value = null;
    }

    const removeCars = () => {
        const infoId = idCar.current.value;

        const newArray = cars.filter(car => car.id != infoId);

        setCar(newArray);

        idCar.current.value = null;
    }

    const setCars = () => {
        const infoId = idCar.current.value;
        const infoM = carMar.current.value;
        const infoMo = carMod.current.value;

        const newArray2 = cars.map(car => {
            if (infoId == car.id) {
                return {
                    ...car,
                    marca: infoM,
                    modelo: infoMo
                }
            }
            return car;
        })
        setCar(newArray2);
        idCar.current.value = null;
        carMar.current.value = null;
        carMod.current.value = null;

    }

    

    return (
        <div className='box'>
            <ListCars arrayCars={cars} />
            <button onClick={addCars} className='tamB'>Agregar</button>
            <button onClick={removeCars} className='tamB'>Eliminar</button>
            <button onClick={setCars} className='tamB'>Modificar</button>
            <input ref={idCar} type="text" placeholder='Id' className='tam' />
            <input ref={carMar} type="text" placeholder='Marca' className='tam' autoFocus />
            <input ref={carMod} type="text" placeholder='Modelo' className='tam' />
            {children}

        </div>
    )

}