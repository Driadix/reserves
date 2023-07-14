import React from 'react'
import { Link } from 'react-router-dom'
import { DataTable } from '../ui/DataTable'
import { columns } from './columns'
import { ReservesDialog } from '../ReservesDialog'

const Reserves: React.FC = ({setSubmits ,data = []}) => {

  return data.length>0 ? (
  <div className="container mx-auto py-10">
    <div className="flex-container">
        <Link to='/moves' className="link">На страницу ДВИЖЕНИЯ</Link>
        <h1 className='title'>Остатки</h1>
        <ReservesDialog setSubmits={setSubmits}/>
      </div>
    <DataTable columns={columns} data={data} />
  </div>
  ) : 
  (<h1>Запрос к серверу...</h1>)
}

export default Reserves