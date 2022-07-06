import React, { useState } from 'react';
import styles from './circulo.module.css';
import ListCirc from './ListCirc';

export default function Circulo() {

    const [circ, setCirc] = useState([]);

    const addCircle = () => {
        setCirc([...circ, <div className={styles.circulo} />])
    }

    const removeCirculo = () =>{
        const newArrayC= circ.filter(cir => cir!=circ[circ.length-1])

        setCirc(newArrayC);
    }

    return (
        <div>
            <ListCirc arrayCirc={circ} />
            <button onClick={addCircle}>Circle</button>
            <button onClick={removeCirculo}>R-Circle</button>
        </div>
    )
}