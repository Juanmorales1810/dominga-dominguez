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
    "/gallery/gallery3.webp",
    "/gallery/gallery44.webp",
    "/gallery/gallery26.webp",
    "/gallery/gallery1.webp",
    "/gallery/gallery29.webp",
    "/gallery/gallery31.webp",
    "/gallery/gallery4.webp",
    "/gallery/gallery30.webp",
    "/gallery/gallery2.webp",
    "/gallery/gallery37.webp",
    "/gallery/gallery6.webp",
    "/gallery/gallery35.webp",
    "/gallery/gallery7.webp",
    "/gallery/gallery11.webp",
    "/gallery/gallery12.webp",
    "/gallery/gallery0.webp",
    "/gallery/gallery13.webp",
    "/gallery/gallery14.webp",
    "/gallery/gallery15.webp",
    "/gallery/gallery16.webp",
    "/gallery/gallery17.webp",
    "/gallery/gallery18.webp",
    "/gallery/gallery19.webp",
    "/gallery/gallery20.webp",
    "/gallery/gallery21.webp",
    "/gallery/gallery22.webp",
    "/gallery/gallery9.webp",
    "/gallery/gallery23.webp",
    "/gallery/gallery25.webp",
    "/gallery/gallery24.webp",
    "/gallery/gallery8.webp",
    "/gallery/gallery27.webp",
    "/gallery/gallery28.webp",
    "/gallery/gallery10.webp",
    "/gallery/gallery32.webp",
    "/gallery/gallery33.webp",
    "/gallery/gallery34.webp",
    "/gallery/gallery36.webp",
    "/gallery/gallery5.webp",
    "/gallery/gallery38.webp",
    "/gallery/gallery39.webp",
    "/gallery/gallery40.webp",
    "/gallery/gallery41.webp",
    "/gallery/gallery42.webp",
    "/gallery/gallery43.webp",
    "/gallery/gallery45.webp",
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

