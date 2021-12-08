
import { useEffect, useState } from 'react';
import axios from 'axios'
import Pilot from './Pilot.jsx'
//mport { render } from '@testing-library/react';

export default function Starships(props) {
    //console.log(props.ship.name)
    const ship= props.ship
    const [pilots, setPilots] = useState([])
    useEffect(() => {
        (async function getPilots() {
            const urls = ship.pilots
            let responses = urls.map(url=> axios.get(url))
            responses = await Promise.all(responses)
            let responseData = []
            responses.forEach(response => responseData = [...responseData, response.data])
            setPilots(responseData)
        })()
    }, [pilots])
    const renderPilots = pilots.map((pilot, index) => {
        return(
            <Pilot
                key={index}
                pilot={pilot}
                />
        )
    })
return(
    <div id="starshipData">
        <h3> {props.ship.name}::</h3>
        <p><strong>Class:</strong> {props.ship.starship_class}</p>
        <p><strong>Model:</strong> {props.ship.model}</p>
        <p><strong>Hyperdrive rating:</strong> {props.ship.hyperdrive_rating} </p>
        <p>Pilots: </p>
        {renderPilots.length>0 ? renderPilots : "no pilots found"}
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

