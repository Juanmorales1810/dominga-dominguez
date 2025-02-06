import type React from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { CalendarIcon, Clock } from "lucide-react"
import * as z from "zod"

// Importa los componentes de UI que estés usando
// Asegúrate de que estos componentes sean compatibles con Astro
import { Button } from "./ui/button"
import { Calendar } from "./ui/calendar"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { TimeSelect } from "./TimeSelect"

// Define el esquema de validación
const reservationSchema = z.object({
    name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
    phone: z.string().regex(/^[0-9()#&+*\-=.]+$/, { message: "Número de teléfono inválido." }),
    email: z.string().email({ message: "Dirección de correo electrónico inválida." }),
    date: z.date({ required_error: "Por favor seleccione una fecha." }),
    time: z.string().regex(/^([01][0-9]|2[0-3]):[0-5][0-9]$/, { message: "Por favor seleccione una hora válida." }),
    people: z.number().int().min(1).max(100, { message: "El número de personas debe estar entre 1 y 100." }),
    comment: z.string().optional(),
})

type ReservationFormValues = z.infer<typeof reservationSchema>

export default function ReservationForm() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ReservationFormValues>({
        resolver: zodResolver(reservationSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            time: "12:00",
            people: 1,
            comment: "",
        },
    })

    const onSubmit = (data: ReservationFormValues) => {
        console.log(data)
        // Handle form submission here
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="text-white">
            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium">
                            Nombre
                        </label>
                        <Controller name="name" control={control} render={({ field }) => <Input {...field} />} />
                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium">
                            Teléfono
                        </label>
                        <Controller name="phone" control={control} render={({ field }) => <Input {...field} />} />
                        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">
                            Email
                        </label>
                        <Controller name="email" control={control} render={({ field }) => <Input {...field} />} />
                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium">
                            Fecha de reserva
                        </label>
                        <Controller
                            name="date"
                            control={control}
                            render={({ field }) => (
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className={`w-full justify-start bg-transparent text-left font-normal ${!field.value && ""}`}
                                        >
                                            {field.value ? format(field.value, "PPP", { locale: es }) : <span>Seleccione una fecha</span>}
                                            <CalendarIcon className="ml-auto h-4 w-4 " />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                                date < new Date() || date > new Date(new Date().setFullYear(new Date().getFullYear() + 1))
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            )}
                        />
                        {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="time" className="block text-sm font-medium">
                            Hora
                        </label>
                        <Controller
                            name="time"
                            control={control}
                            render={({ field }) => <TimeSelect value={field.value} onChange={field.onChange} />}
                        />
                        {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="people" className="block text-sm font-medium">
                            Número de personas
                        </label>
                        <Controller
                            name="people"
                            control={control}
                            render={({ field }) => (
                                <Input type="number" {...field} onChange={(e) => field.onChange(Number.parseInt(e.target.value))} />
                            )}
                        />
                        {errors.people && <p className="mt-1 text-sm text-red-600">{errors.people.message}</p>}
                    </div>
                </div>
                <div>
                    <label htmlFor="comment" className="block text-sm font-medium">
                        Comentario
                    </label>
                    <Controller name="comment" control={control} render={({ field }) => <Textarea {...field} />} />
                    {errors.comment && <p className="mt-1 text-sm text-red-600">{errors.comment.message}</p>}
                </div>
            </div>
            <div className="mt-6">
                <Button type="submit" className="w-full">
                    Solicitar
                </Button>
            </div>
        </form>

    )
}

