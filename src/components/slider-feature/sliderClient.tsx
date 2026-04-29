'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ProductsFeatureClientProps } from "@/types/home";
import Image from "next/image";
import Button from "@/components/UI/button/button";
import { formatPrice } from "@/utils/priceConvert";
import IconDynamic from "../UI/icon/icon";

export default function ProductsFeatureClient({ products }: ProductsFeatureClientProps) {
    return (

        <section className="pt-32 md:px-8 bg-surface relative w-full">
            <div className="w-full mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <div className="h-px grow bg-(--primary)"></div>
                    <h2 className="text-sm font-label text-(--primary) font-black text-primary uppercase tracking-[0.3em]">Producto de la Semana</h2>
                    <div className="h-px grow bg-(--primary)"></div>
                </div>
                <div className="relative group ">

                    <Swiper modules={[Navigation, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        // autoplay={{ delay: 8000 }}
                        autoHeight={false}
                        style={{ height: "100%" }}
                        navigation={{
                            nextEl: '.nextBtn',
                            prevEl: '.prevBtn',
                        }}
                        loop={true}
                        className="mx-0  mySwiper overflow-hidden [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:h-auto container ">
                        <div className="nextBtn absolute right-2 top-1/2 z-50 cursor-pointer bg-white p-2 rounded-full shadow">
                            <IconDynamic name="stepForward" className="text-(--primary)" />
                        </div>

                        <div className="prevBtn absolute left-2 top-1/2 z-50 cursor-pointer bg-white p-2 rounded-full shadow">
                            <IconDynamic name="stepBack" className="text-(--primary)" />
                        </div>
                        {products.map((product) => (
                            <SwiperSlide key={product.id} className="overflow-hidden rounded-md h-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 md:h-[600px] ">
                                    <div className="p-12 md:px-20 md:py-10 flex flex-col justify-center order-2 md:order-1">
                                        <div className="flex items-center gap-2 text-tertiary font-bold mb-4 text-(--tertiary)">
                                            <span className="material-symbols-outlined text-lg"><IconDynamic name="star" /></span>
                                            {product.titleFeature && (
                                                <span className="text-xs uppercase tracking-widest">{product.titleFeature}</span>
                                            )}
                                        </div>
                                        <h3 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-6">{product.title}</h3>
                                        <p className="text-xl text-on-surface-variant mb-8 leading-relaxed">
                                            {product.description}
                                        </p>
                                        {product.presentationAndPrice?.length ? (
                                            <span className="text-3xl md:text-5xl font-headline font-black text-on-surface">
                                                <p className="text-sm font-normal">Desde </p>
                                                {formatPrice(Math.min(...product.presentationAndPrice.map((p) => p.price ?? 0)))}
                                            </span>
                                        ) : (
                                            <span className="text-3xl md:text-5xl font-headline font-black text-on-surface">
                                                {product.price ? formatPrice(product.price) : ""}
                                            </span>
                                        )}

                                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4  w-full mt-6">
                                            {product.buttonProduct?.length > 0 &&
                                                product.buttonProduct.map((button, index) => (
                                                    <Button
                                                        key={index}
                                                        title={button.name}
                                                        href={button.link ? button.link : product.sku ?? undefined}
                                                        icon={button.icon}
                                                        bgColor={button.colorButton}
                                                        colorText={button.textColor}
                                                    />
                                                ))}
                                        </div>
                                    </div>
<div className="h-[320px] md:h-full bg-surface-container-high order-1 md:order-2 flex items-end justify-center overflow-hidden" style={{ backgroundColor: product.colorProduct }}>
    <Image
        src={product.image.url}
        alt={product.title}
        width={500}
        height={500}
        priority
     className="object-contain max-h-full w-auto h-auto top-0 md:absolute"
    />
</div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper >

                </div>





            </div>

        </section >

    )
}