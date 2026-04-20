'use client'
import { Product } from "@/types/home";
import { Category } from "@/types/categories";
import { useApp } from "@/context/AppContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { buildImageUrl } from "@/utils/helperImg";
import { formatPrice } from "@/utils/priceConvert";
import Link from "next/link";

export default function RelationalProductsClientModule({ productWithslug }: { productWithslug: Product }) {
    const { products } = useApp();

    const dataProducts = products?.data || [];


    const itemCategorySlugs = productWithslug.categories?.map((c) => c.slug);

    const filtered = dataProducts.filter((prod: Product) =>
        prod.categories?.some((cat: Category) =>
            itemCategorySlugs?.includes(cat.slug)
        )
    );
    return (
        <>

            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Complementary Protocols</h2>
                    <div className="flex">

                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={5}
                            autoplay={{ delay: 6000 }}
                            navigation
                            className="mySwiper overflow-hidden [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:h-auto"
                              breakpoints={{
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 5,
    },
  }}
                        >

                            {filtered.length > 0 && filtered.map((item, index) => (
                                <SwiperSlide key={index} className="h-auto ">
                                    <Link href={item.sku ? item.sku : ""}>
                                        <div className="group" key={index}>
                                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                                <Image key={index} src={buildImageUrl(item.image[0]?.url)} alt={item.image[0]?.name ? item.image[0]?.name : item.title} unoptimized width={400} height={400} className="w-full h-full object-center object-cover group-hover:opacity-75" />
                                            </div>
                                            <h3 className="mt-4 text-sm text-gray-700 font-medium">{item.title}</h3>
                                            <p className="mt-1 text-sm font-bold text-gray-900">   {formatPrice(
                                                Math.min(
                                                    ...item.presentationAndPrice.map(
                                                        (p) => p.price ?? 0
                                                    )
                                                )
                                            )}</p>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                </div>
            </section>



        </>
    )
}