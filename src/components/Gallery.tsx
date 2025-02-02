import { useEffect, useState, useCallback } from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// Definimos un array de imágenes de ejemplo
const images = [
    "https://domingadominguez.cl/wp-content/uploads/2020/06/MG_6853.jpg",
    "https://domingadominguez.cl/wp-content/uploads/2020/06/MG_6861.jpg",
    "https://domingadominguez.cl/wp-content/uploads/2020/06/MG_6951.jpg",
    "https://domingadominguez.cl/wp-content/uploads/2020/06/MG_6907.jpg",
    "https://domingadominguez.cl/wp-content/uploads/2020/06/MG_6868.jpg",
    "https://domingadominguez.cl/wp-content/uploads/2020/01/1.jpg",
]

export function ParallaxCarousel() {
    const [mainApi, setMainApi] = useState<CarouselApi>()
    const [thumbApi, setThumbApi] = useState<CarouselApi>()
    const [currentIndex, setCurrentIndex] = useState(0)
    const [parallaxValues, setParallaxValues] = useState<number[]>(new Array(images.length).fill(0))

    const onThumbClick = useCallback(
        (index: number) => {
            mainApi?.scrollTo(index)
        },
        [mainApi],
    )

    const handleMainSelect = useCallback(() => {
        if (!mainApi || !thumbApi) return
        setCurrentIndex(mainApi.selectedScrollSnap())
        thumbApi.scrollTo(mainApi.selectedScrollSnap())
    }, [mainApi, thumbApi])

    useEffect(() => {
        if (!mainApi) return

        mainApi.on("select", handleMainSelect)
        mainApi.on("scroll", () => {
            if (!mainApi) return
            const engine = mainApi.internalEngine()
            const scrollProgress = mainApi.scrollProgress()
            const styles = engine.slideIndexes.map((index: number) => {
                const distance = (scrollProgress - index) * 100
                return Math.max(Math.min(distance, 100), -100)
            })
            setParallaxValues(styles)
        })

        return () => {
            mainApi.off("select", handleMainSelect)
        }
    }, [mainApi, handleMainSelect])

    return (
        <div className="w-full max-w-5xl mx-auto space-y-4">
            <Carousel
                setApi={setMainApi}
                opts={{
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent>
                    {images.map((src, index) => (
                        <CarouselItem key={index}>
                            <Card className="relative w-full h-[600px] overflow-hidden">
                                <img
                                    src={src || "/placeholder.svg"}
                                    alt={`Slide ${index + 1}`}
                                    className="object-cover w-full h-[600px]"

                                />
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <div className="relative">
                <Carousel
                    setApi={setThumbApi}
                    opts={{
                        containScroll: "keepSnaps",
                        dragFree: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2">
                        {images.map((src, index) => (
                            <CarouselItem key={index} className="pl-2 basis-1/5 cursor-pointer">
                                <div
                                    className={cn("relative w-full", currentIndex === index ? "border-2 border-primary rounded-sm" : "")}
                                    onClick={() => onThumbClick(index)}
                                >
                                    <img
                                        src={src || "/placeholder.svg"}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="object-cover rounded-sm"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}

