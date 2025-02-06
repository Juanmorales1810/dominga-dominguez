import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock } from "lucide-react"

interface TimeSelectProps {
    value: string
    onChange: (value: string) => void
}

export function TimeSelect({ value, onChange }: TimeSelectProps) {
    const [hour, minute] = value.split(":")

    const hours = Array.from({ length: 12 }, (_, i) => i + 12)
    const minutes = ["00", "15", "30", "45"]

    const handleHourChange = (newHour: string) => {
        onChange(`${newHour}:${minute}`)
    }

    const handleMinuteChange = (newMinute: string) => {
        onChange(`${hour}:${newMinute}`)
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start bg-transparent text-left font-normal">
                    <Clock className="mr-2 h-4 w-4" />
                    {value}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <div className="flex space-x-2 p-4">
                    <Select value={hour} onValueChange={handleHourChange}>
                        <SelectTrigger className="w-[110px]">
                            <SelectValue placeholder="Hora" />
                        </SelectTrigger>
                        <SelectContent>
                            {hours.map((h) => (
                                <SelectItem key={h} value={h.toString().padStart(2, "0")}>
                                    {h.toString().padStart(2, "0")}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Select value={minute} onValueChange={handleMinuteChange}>
                        <SelectTrigger className="w-[110px]">
                            <SelectValue placeholder="Minutos" />
                        </SelectTrigger>
                        <SelectContent>
                            {minutes.map((m) => (
                                <SelectItem key={m} value={m}>
                                    {m}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </PopoverContent>
        </Popover>
    )
}

