import React from 'react'
import axios from 'axios';
import {Routes, Route} from 'react-router-dom'
import Reserves from './components/Reserves'
import Moves from './components/Moves'
import { BASE_URL } from './utils/constants.js'
import './App.css'

function App() {
  const [reservesData, setReservesData] = React.useState([]);
  const [movesData, setMovesData] = React.useState([]);
  const [submits, setSubmits] = React.useState(0);

  // React.useEffect(() => {
  //   axios.get(BASE_URL).then(res => {
  //     const newData = res.data;
  //     setReservesData(newData.reservesData);
  //     setMovesData(newData.movesData)
  //   })
  // }, [])

  React.useEffect(() => {
    console.log('here')
    axios.get(BASE_URL).then(res => {
      const newData = res.data;
      setReservesData(newData.reservesData);
      setMovesData(newData.movesData)
    })
  }, [submits])

  return (
    <Routes>
      <Route path='*' element={<Reserves setSubmits={setSubmits} data={reservesData}/>} />
      <Route path='/moves' element={<Moves data={movesData}/>} />
    </Routes>
  )
}

export default App
