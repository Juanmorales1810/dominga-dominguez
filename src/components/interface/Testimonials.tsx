import { Zap, ChevronRight, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import AutoScroll from "embla-carousel-auto-scroll"

interface Testimonial {
    name: string
    role: string
    avatar: string
    quote: string
}

const testimonials: Testimonial[] = [
    {
        name: "Alice Johnson",
        role: "CEO & Founder",
        avatar: "https://shadcnblocks.com/images/block/avatar-1.webp",
        quote: "This platform has revolutionized the way we manage projects. It is incredibly user-friendly and efficient.",
    },
    {
        name: "David Lee",
        role: "CTO",
        avatar: "https://shadcnblocks.com/images/block/avatar-2.webp",
        quote:
            "I have been impressed with the seamless integration and functionality. It has made our tech operations much smoother.",
    },
    {
        name: "Mark Thompson",
        role: "COO",
        avatar: "https://shadcnblocks.com/images/block/avatar-3.webp",
        quote:
            "Managing our day-to-day tasks has never been easier. The interface is intuitive and saves us a lot of time.",
    },
    {
        name: "Emily Carter",
        role: "Tech Lead",
        avatar: "https://shadcnblocks.com/images/block/avatar-4.webp",
        quote: "The tools provided have significantly improved our team's workflow and collaboration. Highly recommend it!",
    },
    {
        name: "Sophia Turner",
        role: "Designer",
        avatar: "https://shadcnblocks.com/images/block/avatar-5.webp",
        quote:
            "From a design perspective, the flexibility and ease of use are outstanding. This has become an indispensable tool for our team.",
    },
    {
        name: "James Wilson",
        role: "Developer",
        avatar: "https://shadcnblocks.com/images/block/avatar-6.webp",
        quote:
            "As a developer, I appreciate the robust features and simplicity. It has streamlined our processes considerably.",
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
                    Calificado con 5 estrellas por más de 1000 clientes
                </div>
                <h2 className="text-white text-center text-3xl font-semibold lg:text-4xl">Conoce a nuestros clientes satisfechos</h2>
                <p className="text-center text-zinc-400 lg:text-lg">
                    Únete a una red global de líderes de pensamiento, desarrolladores de productos,
                </p>
                <a href="#" className="text-white flex items-center gap-1 font-semibold">
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
                            <p className="text-sm text-zinc-300">{testimonial.role}</p>
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

