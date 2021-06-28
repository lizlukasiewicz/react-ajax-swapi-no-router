import { useEffect, useState } from 'react';
import './App.css';
import Starships from './Starships'
import axios from 'axios'

const App= () => {
let [ships, setShip] = useState([])

  useEffect(() => {
    (async function getData() {
      const pages = [
        'https://swapi.dev/api/starships/?page=1',
        'https://swapi.dev/api/starships/?page=2',
        'https://swapi.dev/api/starships/?page=3',
        'https://swapi.dev/api/starships/?page=4'
      ]
    let jarjar = pages.map(page => axios.get(page))
    
    jarjar = await Promise.all(jarjar)
    //console.log(jarjar)
    let jarjarData = []
    jarjar.forEach(jarjar => jarjarData = [...jarjarData, ...jarjar.data.results])
    //console.log(jarjarData)
    setShip(jarjarData)
    })()
  }, [])
const starships = ships.map((ship, index) => <Starships key={index} ship={ship} />)

  return (
    <div className="App">
      <h1>A Long, long time ago<br></br> in a galaxy far, far away...</h1>
      <div id="starship">{starships}</div>
      
    </div>
  );
}

export default App;
