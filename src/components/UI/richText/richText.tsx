"use client";

import Image from "next/image";

export default function RichText({
    title,
    description,
    image
}: { title: string, description: string, image?: { url: string } }) {
    return (
        <section className="min-h-[90vh] flex flex-col items-center justify-center py-20 bg-surface">
            <div className="container mx-auto px-8 max-w-6xl">

                <div className="mb-16">
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-(--on-primary-fixed-variant) leading-none text-center">
                        {title}
                    </h1>
                </div>

                <div className="max-w-3xl mx-auto mb-20 text-center">
                    <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed font-light font-['Manrope']">
                        {description}
                    </p>
                </div>

                <div className="w-full">
                    <Image width={300} unoptimized height={300} alt={title || "Mana de vida"} className="w-full h-auto rounded-xl shadow-2xl object-cover"  src={process.env.NEXT_PUBLIC_API_URL + (image?.url || "/logo.png")} />
                </div>
            </div>
        </section>
    );
}