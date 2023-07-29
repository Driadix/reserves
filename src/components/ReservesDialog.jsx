import React from 'react'
import axios from 'axios'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BASE_URL } from '../utils/constants'
import useForm from '../utils/useForm'

export function ReservesDialog({ updateData }) {
  const [open, setOpen] = React.useState(false)
  const { values, handleChange } = useForm({office1: 0, office2: 0, storage: 0, date: new Date() });
  const [isLoading, setIsLoading] = React.useState(false)
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Добавить новый товар</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Новый товар</DialogTitle>
        </DialogHeader>
        <form id='reserves' onSubmit={async (e) => {
          e.preventDefault();
          setIsLoading(true)
          await axios.post(`${BASE_URL}?target=Reserves&name=${values.name}&office1=${values.office1}&office2=${values.office2}&storage=${values.storage}&manager=${values.manager}&date=${values.date}`).then(res => {
            const resData = res.data;
            updateData(resData.sheetsData)
            alert('Успешно добавлен новый товар')
            setOpen(false)
          }).catch((error) => alert(`Возникла ошибка при добавлении нового товара ${error}`))
            .finally(() => {
              setIsLoading(false)
            })
        }}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Наименование товара
              </Label>
              <Input id="name" name="name" placeholder="Наименование" onChange={handleChange} value={values.name || ''} className="col-span-3" type="text" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="office1" className="text-right">
                Офис 1
              </Label>
              <Input id="office1" name="office1" placeholder="Количество офис 1" onChange={handleChange} value={values.office1} className="col-span-3" type="number" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="office2" className="text-right">
                Офис 2
              </Label>
              <Input id="office2" name="office2" placeholder="Количество офис 2" onChange={handleChange} value={values.office2} className="col-span-3" type="number" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="storage" className="text-right">
                Склад
              </Label>
              <Input id="storage" name="storage" placeholder="Количество склад" onChange={handleChange} value={values.storage} className="col-span-3" type="number" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="manager" className="text-right">
                Менеджер
              </Label>
              <Input id="manager" name="manager" placeholder="Ответственный менеджер" onChange={handleChange} value={values.manager || ''} className="col-span-3" type="text" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">
                Дата
              </Label>
              <Input id="date" name="date" placeholder="Дата" onChange={handleChange} value={values.date} className="col-span-3" type="date" required />
            </div>
          </div>
        </form>
        <DialogFooter>
          <Button form="reserves" type="submit">{isLoading ? 'Добавление...' : 'Добавить'}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
