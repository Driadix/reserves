import React from 'react'
import { Link } from 'react-router-dom';
import { DataTable } from '../ui/DataTable'
import { columns } from './columns'
import { MovesDialog } from '../MovesDialog';

const Moves: React.FC<any> = ({ isFetched, names, data, updateData}:any) => {

  return (data.length>0 && isFetched) ? (
    <div className="container mx-auto py-10">
      <div className="flex-container">
        <Link to='/' className="link">На страницу ОСТАТКИ</Link>
        <h1 className='title'>Движения</h1>
        <MovesDialog names={names} updateData={updateData} />
      </div>
      <DataTable columns={columns} data={data} />
    </div>
    ) :
    (!isFetched) ?
    (<h1>Запрос к серверу...</h1>)
    : (
      <div className="container mx-auto py-10">
        <div className="flex-container">
          <Link to='/' className="link">На страницу ОСТАТКИ</Link>
          <h1 className='title'>Движения</h1>
          <MovesDialog names={names} updateData={updateData} />
        </div>
      </div>
      )
}

export default Moves
