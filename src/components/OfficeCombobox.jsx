import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const offices = [
  {
    value: "office 1",
    label: "Офис 1",
  },
  {
    value: "office 2",
    label: "Офис 2",
  },
  {
    value: "storage",
    label: "Склад",
  }
]

export function OfficeCombobox({ value, setValue }) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? offices.find((office) => office.value === value)?.label
            : "Выберите офис..."}
          <ChevronsUpDown className="margin-left-2 ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Поиск офиса..." />
          <CommandEmpty>Не найдено офисов</CommandEmpty>
          <CommandGroup>
            {offices.map((office) => (
              <CommandItem
                key={office.value}
                onSelect={(currentValue) => {
                  setValue(offices.find((office) => office.label.toLowerCase() === currentValue.toLowerCase()).value)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === office.value ? "visible" : "hidden"
                  )}
                />
                {office.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
