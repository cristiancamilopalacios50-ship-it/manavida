'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ProductsFeatureClientProps } from "@/types/home";
import Image from "next/image";
import { buildImageUrl } from "@/utils/helperImg";
import Button from "@/components/UI/button/button";
import { formatPrice } from "@/utils/priceConvert";
import * as HeroIcons from "@heroicons/react/24/outline";

export default function ProductsFeatureClient({ products }: ProductsFeatureClientProps) {
    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 6000 }}
            navigation
            className="mySwiper overflow-hidden [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:h-auto"
        >
            {products.map((product) => (
                <SwiperSlide key={product.id} className="h-auto">
                    <section className="py-12 md:py-24 px-4 md:px-8 bg-surface pb-0">
                        <div className="container mx-auto">

                            <div className="flex items-center gap-4 mb-8 md:mb-16">
                                <div className=" grow bg-outline-variant/30 h-px bg-(--primary)"></div>
                                <h2 className="text-sm font-label font-black text-primary uppercase tracking-[0.3em] text-(--primary)">
                                    Producto de la Semana
                                </h2>
                                <div className="grow bg-outline-variant/30 bg-(--primary) h-px"></div>
                            </div>

                            <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden
                grid grid-cols-1 lg:grid-cols-2 shadow-2xl shadow-on-surface/5 ">

                                {/* Imagen — PRIMERO en móvil, SEGUNDO en desktop */}
                                <div className="relative h-64 sm:h-80 lg:h-auto lg:min-h-[420px]
                    bg-surface-container-high overflow-hidden
                    order-1 lg:order-2 ">
                                    <div className=" absolute inset-0 bg-indigo-200/40"></div>
                                    <Image
                                        src={buildImageUrl(product.image[0].url)}
                                        alt={product.title}
                                        fill
                                        priority
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        unoptimized
                                        className=" m-auto object-contain z-10 !max-h-[90%]  drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
                                    />
                                </div>

                                {/* Texto — SEGUNDO en móvil, PRIMERO en desktop */}
                                <div className="p-6 lg:p-20 flex flex-col justify-center order-1 lg:order-">
                                    <div className="flex items-center gap-2 text-tertiary font-bold mb-3">
                                       <HeroIcons.StarIcon className="w-4 h-4" />
                                        <span className="text-xs uppercase tracking-widest">Best Seller #1</span>
                                    </div>
                                    <h3 className="text-2xl md:text-5xl font-headline font-bold text-on-surface mb-4">
                                        {product.title}
                                    </h3>
                                    <p className="text-base md:text-xl text-on-surface-variant mb-6 leading-relaxed">
                                        {product.description}
                                    </p>
                                    <div className="flex items-baseline gap-4 mb-8">
                                        <span className="text-3xl md:text-5xl font-headline font-black text-on-surface">
                                            {formatPrice(product.price)}
                                        </span>
                                    </div>
                                    <div className="flex gap-4 w-fit">
                                        {product.buttonProduct?.length > 0 &&
                                            product.buttonProduct.map((button, index) => (
                                                <Button
                                                    key={index}
                                                    title={button.name}
                                                    href={button.link ? button.link : product.sku ?? undefined}
                                                    icon={button.icon}
                                                    bgColor={`var(--${button.colorButton})`}
                                                    textColor={`var(--${button.textColor})`}
                                                />
                                            ))}
                                    </div>

                                </div>

                            </div>
                        </div>
                    </section>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}