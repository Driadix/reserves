import { ColumnDef } from "@tanstack/react-table"

export type Reserves = {
  name: string,
  office_1: number,
  office_2: number,
  storage: number,
  total: number
}
 
export const columns: ColumnDef<Reserves>[] = [
  {
    accessorKey: "name",
    header: "Наименование",
  },
  {
    accessorKey: "office_1",
    header: "Офис 1",
  },
  {
    accessorKey: "office_2",
    header: "Офис 2",
  },
  {
    accessorKey: "storage",
    header: "Склад",
  },
  {
    accessorKey: "total",
    header: "Общее количество",
  },
]