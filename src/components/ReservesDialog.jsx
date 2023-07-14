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

export function ReservesDialog({setSubmits}) {
  const [open, setOpen] = React.useState(false)
  const [name, setName] = React.useState('')
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
          await axios.post(`${BASE_URL}?target=Reserves&name=${name}`).then(res => {
            setSubmits((state) => state+1)
            alert('Успешно добавлен новый товар')
            setOpen(false)
          }).catch((error) => alert(`Возникла ошибка при добавлении нового товара ${error}`))
          .finally(() => {
            setIsLoading(false)
            setName('')
          })
        }}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" placeholder="Наименование" onChange={(e) => setName(e.target.value)} value={name || ''} className="col-span-3" />
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
