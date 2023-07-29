import { ColumnDef } from "@tanstack/react-table"
import minusIcon from '../../assets/minus-icon.svg';
import plusIcon from '../../assets/plus-icon.svg';

export type Moves = {
  moveType: "add item" | "subtract item",
  name: string,
  amount: number,
  office: "office 1" | "office 2" | "storage",
  manager: string,
  date: String
}
 
export const columns: ColumnDef<Moves>[] = [
  {
    accessorKey: "moveType",
    header: "Тип движения",
    cell: ({ row }) => {
      const moveType = row.getValue("moveType");
      
      return <div className="flex justify-center align-center"><img width="40" height="40" src={moveType === 'add item' ? plusIcon : minusIcon}></img></div>
    }
  },
  {
    accessorKey: "name",
    header: "Наименование",
  },
  {
    accessorKey: "amount",
    header: "Количество",
  },
  {
    accessorKey: "office",
    header: "Офис",
  },
  {
    accessorKey: "manager",
    header: "Менеджер",
  },
  {
    accessorKey: "date",
    header: "Дата",
  },
]