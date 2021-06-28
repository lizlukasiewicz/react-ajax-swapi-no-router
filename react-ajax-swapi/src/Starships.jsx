import React from 'react'
//import { useEffect, useState } from 'react';
//import axios from 'axios'

export default function Starships(props) {
    console.log(props.ship.name)
   
return(
    <div id="starshipData">
        <h3> {props.ship.name}::</h3>
        <p><strong>Class:</strong> {props.ship.starship_class}</p>
        <p><strong>Model:</strong> {props.ship.model}</p>
        <p><strong>Hyperdrive rating:</strong> {props.ship.hyperdrive_rating} </p>
    </div>
)
}
// {props.data.map((ship, i) => {
//     return(
//         <div key={i}> 
//             <h4>{ship.name}</h4>
            
//         </div>
//     )
// })}

