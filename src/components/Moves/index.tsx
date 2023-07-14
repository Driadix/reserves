import React from 'react'
import { Link } from 'react-router-dom';
import { DataTable } from '../ui/DataTable'
import { columns } from './columns'
import { MovesDialog } from '../MovesDialog';

const Moves: React.FC<any> = ({data}:any) => {

  return data.length>0 ? (
    <div className="container mx-auto py-10">
      <div className="flex-container">
        <Link to='/' className="link">На страницу ОСТАТКИ</Link>
        <h1 className='title'>Движения</h1>
        <MovesDialog />
      </div>
      <DataTable columns={columns} data={data} />
    </div>
    ) : 
    (<h1>Запрос к серверу...</h1>)
}

export default Moves
