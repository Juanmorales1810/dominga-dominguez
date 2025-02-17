import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react";

export function SheetMenu() {
    const [open, setOpen] = useState(false);
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Dominga Dominguez</SheetTitle>
                    <SheetDescription>

                    </SheetDescription>
                </SheetHeader>
                <nav aria-label="Global">
                    <ul className="flex flex-col items-start font-bold gap-6 text-xl">
                        <li>
                            <a
                                className="text-zinc-900 transition hover:text-zinc-900/75 font-semibold"
                                href="/#Hero"
                                onClick={() => setOpen(false)}
                            >
                                Inicio
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-zinc-900 transition hover:text-zinc-900/75 font-semibold"
                                href="/#Description"
                                onClick={() => setOpen(false)}
                            >
                                Descripción
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-zinc-900 transition hover:text-zinc-900/75 font-semibold"
                                href="/#Menu"
                                onClick={() => setOpen(false)}
                            >
                                Menu
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-zinc-900 transition hover:text-zinc-900/75 font-semibold"
                                href="/#Drinks"
                                onClick={() => setOpen(false)}
                            >
                                Tragos
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-zinc-900 transition hover:text-zinc-900/75 font-semibold"
                                href="/#Testimonials"
                                onClick={() => setOpen(false)}
                            >
                                Testimonios
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-zinc-900 transition hover:text-zinc-900/75 font-semibold"
                                href="/#Gallery"
                                onClick={() => setOpen(false)}
                            >
                                Galería
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-zinc-900 transition hover:text-zinc-900/75 font-semibold"
                                href="/#Contact"
                                onClick={() => setOpen(false)}
                            >
                                Contáctenos
                            </a>
                        </li>
                    </ul>
                </nav>
            </SheetContent>
        </Sheet>
    )
}