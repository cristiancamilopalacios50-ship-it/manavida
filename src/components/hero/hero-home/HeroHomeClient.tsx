"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { HeroHomeClientProps } from "@/types/home";


export default function HeroHomeClient({ heroData }: HeroHomeClientProps) {
    const bgRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const indicatorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            const parallaxOffset = scrollY * 0.5;
            const contentOffset = scrollY * 0.2;
            const opacity = Math.max(0, 1 - scrollY / 600);

            if (bgRef.current) {
                bgRef.current.style.transform = `translateY(-${parallaxOffset}px)`;
            }
            if (contentRef.current) {
                contentRef.current.style.transform = `translateY(${contentOffset}px)`;
                contentRef.current.style.opacity = String(opacity);
            }
            if (indicatorRef.current) {
                indicatorRef.current.style.opacity = String(opacity);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const { image, Titulo, Subtitulo } = heroData;

    
    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            {/* Parallax Background */}
            <div ref={bgRef} className="absolute inset-0 w-full h-[120%]">
                <Image
                    src={image.url}
                    alt={Titulo}
                    fill
                    priority
                    sizes="100vw"
                    unoptimized
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-accent/5" />

            {/* Content */}
            <div
                ref={contentRef}
                className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center"
            >
                <Image src="/logo.png" alt="Logo" width={150} height={40} />
                
                <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    {Titulo}
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-white sm:text-xl leading-relaxed">
                    {Subtitulo}
                </p>
            </div>

            {/* Scroll Indicator */}
            <div
                ref={indicatorRef}
                className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2 text-white">
                    <span className="text-xs text-muted-foreground">Sigue bajando</span>
                    <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/30 p-1">
                        <div className="h-2 w-1.5 animate-bounce rounded-full bg-accent mx-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
}