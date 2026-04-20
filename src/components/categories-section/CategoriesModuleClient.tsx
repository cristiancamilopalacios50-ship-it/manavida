
"use client"
import { useApp } from "@/context/AppContext";
import { buildImageUrl } from "@/utils/helperImg";
import Image from "next/image";
import IconDynamic from "../UI/icon/icon";
import Link from "next/link";


export default function CategoriesModule() {
    const { categories } = useApp();
    const item = categories?.data ?? [];

    if (item.length === 0) {
        return null;
    }


    return (
        <section className="py-32 px-8 bg-surface-container-low w-full relative" >
            <div className="container mx-auto">
                <div className="max-w-2xl mb-16">
                    <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-4">Optimiza por Objetivo</h2>
                    <p className="text-on-surface-variant">Selecciona una categoría diseñada específicamente para tu meta de transformación física y mental.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">

                    {(item?.length > 0) && item.map((obj, index) => {

                        if (index % 3 === 0) {
                            return (
                                <Link key={index} href={`productos?category=${obj.slug}`} className="md:col-span-2 group relative h-90 rounded-3xl overflow-hidden bg-primary cursor-pointer">
                                      <div  >

                                    {obj.image?.length > 0 && (
                                        <Image
                                            alt={obj.image[0].alternativeText}
                                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                                            src={buildImageUrl(obj.image?.[0]?.url)}
                                            width={600}
                                            height={270}
                                            unoptimized
                                            
                                        />
                                    )}

                                    <div className="absolute inset-0 bg-gradient-to-t from-(--primary)/80 to-transparent"></div>

                                    <div className="absolute bottom-8 left-8 font-['Manrope'] text-white">
                                        <h3 className="text-3xl font-headline font-bold text-on-primary  mb-2">
                                            {obj.name}
                                        </h3>
                                        <p className="text-sm ">
                                            {obj.descriptionShort}
                                        </p>
                                    </div>
                                </div>
                                </Link>
                              
                            );
                        }

                        return (
                            <Link key={index} href={`productos?category=${obj.slug}`}>
                                <div className="group relative rounded-3xl h-90 overflow-hidden bg-surface-container-highest cursor-pointer">

                                    {obj.image?.length > 0 && (
                                        <Image
                                            alt={obj.image[0].alternativeText}
                                            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                                            src={buildImageUrl(obj.image?.[0]?.url)}
                                            width={400}
                                            height={270}
                                            unoptimized
                                            
                                        />
                                    )}

                                    <div className="absolute bottom-8 left-8 text-(--primary)">
                                        <h4 className="text-2xl font-headline font-bold text-on-surface mb-1 text-['Manrope']">
                                            {obj.name}
                                        </h4>
                                        <span className="material-symbols-outlined ">
                                            <IconDynamic name="moveRight" />
                                        </span>
                                    </div>
                                </div>
                            </Link>

                        );
                    })}
                </div>
            </div>
        </section>
    )
}