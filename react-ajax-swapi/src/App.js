import { useEffect, useState } from 'react';
import './App.css';
import Starships from './Starships'
import axios from 'axios'

const App= () => {
let [ship, setShip] = useState([])

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
    let jarjarData = []
    jarjar.forEach(jarjar => jarjarData = [...jarjarData, ...jarjar.data.results])
    setShip(jarjarData)
    })()
  }, [])
const starships = ship.map((ships, index) => <Starships key={index} ships={ships} />)

  return (
    <div className="App">
      <p>starships are meant to flyyyyyyy: </p>
      {starships}
      <Starships />
    </div>
  );
}

export default App;
