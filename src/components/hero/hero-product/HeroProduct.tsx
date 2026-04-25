"use client"
import { useState } from "react";
import Image from "next/image";
import * as HeroIcons from "@heroicons/react/24/solid";
import { formatPrice } from "@/utils/priceConvert";
import Button from "@/components/UI/button/button";
import IconDynamic from "@/components/UI/icon/icon"
import { PresentationAndPrice, StrapiImage } from "@/types/home"
import { useApp } from "@/context/AppContext";
export default function ProductHero({ title, description, saving, laboratory, priceAndPresentations, image, color }: { title: string, description: string, price: number, image: StrapiImage, saving?: number, laboratory?: string, priceAndPresentations: PresentationAndPrice[], color?: string }) {
  const [selected, setSelected] = useState(0);
  const [selectedItem, setSelectedItem] = useState(priceAndPresentations[0]);
  const { globalSite } = useApp();

  const { whatsappBtnText, fieldText, whatsappNumber } = globalSite?.data ?? {};




  return (
    <section className="mb-20 relative bg-white max-w-7xl mx-auto px-8 pb-16 mt-20  grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-surface-container rounded-3xl shadow-lg">

      {/* Imagen */}
      <div className="relative group">
        <div className="absolute inset-0 bg-(--surface-container-high) rounded-3xl -rotate-2 scale-105 group-hover:rotate-0 transition-transform duration-700" />
        <div className="relative bg-white rounded-3xl p-8 lg:p-12 overflow-hidden shadow-sm sm:w-100 w-75 m-auto" style={{ backgroundColor: color }}>



          <Image src={image?.url || '/logo.png'} alt={image?.alternativeText || 'mana de vida'} className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700" 
          width={500}
            height={500} />



        </div>
        {/* Badges */}
        <div className="absolute -bottom-6 -right-6 flex flex-col gap-3 bg-white p-4 rounded-xl shadow-sm border border-outline-variant/15">
          <div className="flex items-center gap-3">
            <HeroIcons.CheckCircleIcon className="w-4 h-4 text-(--primary)" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Producto certificado</span>
          </div>
          {laboratory && (
            <div className="flex items-center gap-3 border-t border-outline-variant/10 pt-2">
              <HeroIcons.BeakerIcon className="w-4 h-4 text-(--primary)" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">{laboratory}</span>
            </div>
          )}
        </div>
      </div>

      {/* Detalles */}
      <div className="space-y-8 mt-10">
        <div className="space-y-2">

          {/* {
            categories.map((cat) => (
              <div key={cat.slug} className="font-['Manrope'] text-(--on-tertiary-fixed-variant) bg-(--tertiary-fixed) inline-flex items-center px-3 py-1 bg-tertiary-container/10 text-tertiary-container rounded-full text-xs font-bold tracking-widest uppercase">
                {cat.name}
              </div>
            ))

          } */}
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tighter text-on-surface font-headline">
            {title}
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-lg">
            {description}
          </p>
        </div>

        {/* Precio */}
        <div className="flex items-baseline gap-4">

          <span className="text-sm text-on-surface-variant line-through">{saving && formatPrice(saving)}</span>
        </div>

        <div className="mb-8">
          {whatsappBtnText && <h3 className="text-sm font-semibold text-slate-900 mb-3">{fieldText} <span className="text-(--primary)">: {whatsappBtnText}</span></h3>}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {priceAndPresentations.map((item, index) => (
              <label
                key={index}
                className={`relative flex cursor-pointer rounded-xl border p-4 shadow-sm transition-all
      ${selected === index
                    ? "border-emerald-600 bg-emerald-50 ring-2 ring-emerald-600"
                    : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
              >
                <input
                  className="sr-only"
                  name="presentation"
                  type="radio"
                  value={item.presentation}
                  checked={selected === index}
                  onChange={() => {
                    setSelected(index);
                    setSelectedItem(item);
                  }}
                />
                <div className="flex w-full items-center justify-between">
                  <div className="text-sm">
                    <p className="font-semibold text-slate-900">{item.presentation}</p>
                    <p className="text-slate-500">{formatPrice(item.price)}</p>
                  </div>
                  {/* Indicador visual */}
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
        ${selected === index ? "border-emerald-600" : "border-slate-300"}`}
                  >
                    {selected === index && (
                      <div className="w-2 h-2 rounded-full bg-emerald-600" />
                    )}
                  </div>
                </div>
              </label>
            ))}



          </div>
        </div>
        {/* Info extra */}
        <div className="grid md:grid-cols-2 gap-4 pt-4">
          <div className="items-center gap-2 text-sm text-on-surface-variant block text-center">

            <Button
         title={whatsappBtnText}
  href={`https://wa.me/${whatsappNumber}?text=Hola, quiero comprar ${title} de ${selectedItem.presentation} por ${formatPrice(selectedItem.price)}`}

            />
          </div>
          <div className="m-auto md:ml-0 flex items-center gap-2 text-sm text-on-surface-variant text-(--primary)">
            <IconDynamic name="truck" className="text-primary text-lg" />
            Consulta tu envío
          </div>
        </div>
      </div>

    </section>
  );
}