import { useEffect, useState } from 'react';
import './App.css';
import Starships from './Starships'
import axios from 'axios'

const App= () => {
const [ships, setShips] = useState([])

  useEffect(() => {
    (async function getShips() {
      const urls = [
        'https://swapi.dev/api/starships/?page=1',
        'https://swapi.dev/api/starships/?page=2',
        'https://swapi.dev/api/starships/?page=3',
        'https://swapi.dev/api/starships/?page=4'
      ]
    let responses = urls.map(url => axios.get(url))
    
    responses = await Promise.all(responses)
    //console.log(jarjar)
    let responseData = []
    responses.forEach(response => responseData = [...responseData, ...response.data.results])
    //console.log(jarjarData)
    setShips(responseData)
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
