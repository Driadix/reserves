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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BASE_URL } from '../utils/constants'
import useForm from '../utils/useForm'
import { OfficeCombobox } from './OfficeCombobox'
import { NameCombobox } from './NameCombobox'

export function MovesDialog({ names, updateData }) {
  const [open, setOpen] = React.useState(false)
  const { values, handleChange } = useForm({ amount: 0, date: new Date() })
  const [isLoading, setIsLoading] = React.useState(false)
  const [officeValue, setOfficeValue] = React.useState('office 1')
  const [nameValue, setNameValue] = React.useState('');
  const [moveType, setMoveType] = React.useState('add item');

  const handleRadioChange = (event) => {
    setMoveType(event.target.value);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Добавить новое движение</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Новое движение</DialogTitle>
        </DialogHeader>
        <form id='moves' onSubmit={async (e) => {
          e.preventDefault();
          setIsLoading(true)
          await axios.post(`${BASE_URL}?target=Moves&moveType=${moveType}&name=${nameValue}&amount=${values.amount}&office=${officeValue}&manager=${values.manager}&date=${values.date}`).then(res => {
            const resData = res.data;
            updateData(resData.sheetsData)
            alert('Успешно добавлено новое движение')
            setOpen(false)
          }).catch((error) => alert(`Возникла ошибка при добавлении нового движения ${error}`))
            .finally(() => {
              setIsLoading(false)
            })
        }}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="moveType" className="text-right">
                Тип движения
              </Label>
              <RadioGroup className="flex justify-center align-center" defaultValue="add item">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem checked={moveType === 'add item' ? true : false} onClick={handleRadioChange} value="add item" id="add-item" />
                  <Label className="margin-left-2" htmlFor="add-item">Добавить товар</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem checked={moveType === 'subtract item' ? true : false} onClick={handleRadioChange} value="subtract item" id="subtract-item" />
                  <Label className="margin-left-2" htmlFor="subtract-item">Убавить товар</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Наименование товара
              </Label>
              <NameCombobox names={names} value={nameValue} setValue={setNameValue} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="office" className="text-right">
                Офис
              </Label>
              <OfficeCombobox value={officeValue} setValue={setOfficeValue} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">
                Количество
              </Label>
              <Input id="amount" name="amount" placeholder="Количество" onChange={handleChange} value={values.amount} className="col-span-3" type="number" required />
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
          <Button disabled={!nameValue ? true : false} form="moves" type="submit">{isLoading ? 'Добавление...' : 'Добавить'}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}