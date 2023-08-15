import React from 'react'
import axios from 'axios';
import { Routes, Route } from 'react-router-dom'
import Reserves from './components/Reserves'
import Moves from './components/Moves'
import { BASE_URL } from './utils/constants.js'
import './App.css'

function App() {
  const [reservesData, setReservesData] = React.useState([]);
  const [movesData, setMovesData] = React.useState([]);
  const [names, setNames] = React.useState([]);
  const [isFetched, setIsFetched] = React.useState(false);

  // React.useEffect(() => {
  //   axios.get(BASE_URL).then(res => {
  //     const newData = res.data;
  //     setReservesData(newData.reservesData);
  //     setMovesData(newData.movesData)
  //   })
  // }, [])

  const filterData = (dataArray: any) => {
    return dataArray.map((item: any) => {
      const formattedDate = item.date.split('T');
      const formattedOffice = item.office === 'office 1' ? 'Офис 1' : item.office === 'office 2' ? 'Офис 2' : 'Склад';
      return {...item, office: formattedOffice, date: formattedDate[0]};
    }).reverse();
  }

  React.useEffect(() => {
    setIsFetched(false);
    axios.get(BASE_URL).then(res => {
      const newData = res.data;
      const names = newData.reservesData.map((item:any) => item.name);
      setReservesData(newData.reservesData);
      setNames(names);
      const movesData = filterData(newData.movesData)
      setMovesData(movesData)
    })
    setIsFetched(true);
  }, [])

  const updateData = React.useCallback((newData: any) => {
    const names = newData.reservesData.map((item:any) => item.name);
    setReservesData(newData.reservesData);
    setNames(names);
    const movesData = filterData(newData.movesData)
    setMovesData(movesData)
  }, []);

  return (
    <Routes>
      <Route path='*' element={<Reserves data={reservesData} updateData={updateData} />} />
      <Route path='/moves' element={<Moves isFetched={isFetched} names={names} data={movesData} updateData={updateData} />} />
    </Routes>
  )
}

export default App
