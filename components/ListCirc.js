import {v4 as uuidv4} from 'uuid';


export default function ListCirc({arrayCirc}){
    return(
        <ul>
            {arrayCirc.map(cir => <li key={uuidv4()}>{cir}</li>)}
        </ul>
    )    
}