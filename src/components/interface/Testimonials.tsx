import { Zap, ChevronRight, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import AutoScroll from "embla-carousel-auto-scroll"

interface Testimonial {
    name: string
    role?: string
    avatar: string
    quote: string
}

const testimonials: Testimonial[] = [
    {
        name: "Juan P.",
        // role: "CEO & Founder",
        avatar: "https://shadcnblocks.com/images/block/avatar-1.webp",
        quote: "Uno de los mejores restaurantes de Coquimbo. Atención increíble y comida espectacular.",
    },
    {
        name: "María F.",
        // role: "CTO",
        avatar: "https://shadcnblocks.com/images/block/avatar-2.webp",
        quote:
            "La reineta a la mantequilla es un imperdible. Volveré sin duda.",
    },
    {
        name: "Ricardo G.",
        // role: "COO",
        avatar: "https://shadcnblocks.com/images/block/avatar-3.webp",
        quote:
            "Exquisita comida y ambiente acogedor. Perfecto para disfrutar con amigos y familia.",
    },
    {
        name: "Natalia Guliaew",
        // role: "Tech Lead",
        avatar: "https://shadcnblocks.com/images/block/avatar-4.webp",
        quote: "Excelente experiencia recomiendo sus productos servicio coctelería todo maravilloso platos frescos contundente sabor único, la coctelería no se queda atrás muy bueno.",
    },
    {
        name: "Eve Wells",
        // role: "Designer",
        avatar: "https://shadcnblocks.com/images/block/avatar-5.webp",
        quote:
            "Empezando el lugar es muy bonito y la atención muy amable y cálida. Pedimos, locos, cebiche y el fantástico pulpo a la parrilla, todo excelente. ",
    },
    {
        name: "Marcelo Moreno",
        role: "Local Guide",
        avatar: "https://shadcnblocks.com/images/block/avatar-6.webp",
        quote:
            "Solo tenía 1 recuerdo de un restaurante donde comiera algo excepcional y este es el segundo, el anterior fue hace 20 años atrás",
    },
]

export default function TestimonialsPage() {
    return (
        <section className="relative py-32">
            <div className="absolute bottom-0 left-[-20%] right-0 top-[60%] h-[350px] w-[350px] rounded-full bg-primary opacity-50 blur-[60px]"></div>
            <div className="absolute hidden bottom-0 right-[-20%] top-[-20%] h-[500px] w-[500px] rounded-full bg-primary opacity-50 blur-[60px]"></div>
            <div className="container mx-auto flex flex-col items-center gap-4">
                <div className="text-white flex items-center gap-1 text-sm font-semibold">
                    <Zap className="h-6 w-auto fill-white stroke-white" />
                    Calificado con 5 estrellas por más de 300 clientes
                </div>
                <h2 className="text-white text-center text-3xl font-semibold lg:text-4xl">Conoce a nuestros clientes satisfechos</h2>
                <p className="text-center text-zinc-400 lg:text-lg">
                    ¿Ya visitaste Dominga Domínguez? Déjanos tu reseña en Google My Business y síguenos en Instagram
                </p>
                <a target="_blank" href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0zDArNjQzrigzYLRSNaiwNLM0TLa0NDA1TDYysDSxtDKoSEk0TrYwMzYwN080Sk00SvESTMnPzcxLT1SA0KWpVQDQ9hVW&q=dominga+dominguez&oq=dominga+dominguez&gs_lcrp=EgZjaHJvbWUqDQgBEC4YrwEYxwEYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyCAgCEAAYFhgeMggIAxAAGBYYHjIHCAQQABjvBTIKCAUQABiABBiiBDIHCAYQABjvBTIKCAcQABiABBiiBDIKCAgQABiiBBiJBdIBCjEzMDY1ajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8#lrd=0x9691c99051c20949:0xda3c863077a2ea2d,1,,,," className="text-white flex items-center gap-1 font-semibold">
                    Ver todos los testimonios
                    <ChevronRight className="mt-0.5 h-4 w-auto" />
                </a>
            </div>
            <div className="lg:container mx-auto w-full">
                <div className="mt-16 lg:mt-24">
                    <Carousel
                        opts={{
                            loop: true,
                        }}
                        plugins={[
                            AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 1 }),
                        ]}
                        className="relative lg:before:absolute lg:before:bottom-0 lg:before:left-0 lg:before:top-0 lg:before:z-10 lg:before:w-36 lg:before:bg-gradient-to-r lg:before:from-slate-900 lg:before:to-transparent lg:after:absolute lg:after:bottom-0 lg:after:right-0 lg:after:top-0 lg:after:z-10 lg:after:w-36 lg:after:bg-gradient-to-l lg:after:from-slate-900 lg:after:to-transparent"
                    >
                        <CarouselContent className="">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/3">
                                    <TestimonialCard testimonial={testimonial} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <Card className="h-full bg-zinc-400/10 backdrop-blur-lg border-zinc-50/20">
            <CardContent className="p-6">
                <div className="flex justify-between">
                    <div className="mb-4 flex gap-4">
                        <Avatar className="h-14 w-14">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-medium text-white">{testimonial.name}</p>
                            <p className="text-sm text-zinc-300">{testimonial.role || null}</p>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="size-5 fill-zinc-50 text-zinc-50" />
                        ))}
                    </div>
                </div>
                <q className="leading-7 text-zinc-400">{testimonial.quote}</q>
            </CardContent>
        </Card>
    )
}

