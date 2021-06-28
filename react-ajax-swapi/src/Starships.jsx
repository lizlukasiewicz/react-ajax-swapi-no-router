import React from 'react'
//import { useEffect, useState } from 'react';
//import axios from 'axios'

export default function Starships(props) {
    console.log(props.ship.name)
   
return(
    <div id="starshipData">
        <h3>{props.ship.name}</h3>
        <p>Class:: {props.ship.starship_class}</p>
        <p>Model:: {props.ship.model}</p>
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


//<h4>{props.ship.name}</h4>
