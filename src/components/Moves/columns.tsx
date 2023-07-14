import { ColumnDef } from "@tanstack/react-table"

export type Moves = {
  moveType: "add item" | "subtract item",
  name: string,
  amount: number,
  office: "office 1" | "office 2" | "storage",
  date: Date
}
 
export const columns: ColumnDef<Moves>[] = [
  {
    accessorKey: "moveType",
    header: "Тип движения",
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
    accessorKey: "date",
    header: "Дата",
  },
]