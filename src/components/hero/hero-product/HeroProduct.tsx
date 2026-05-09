"use client"
import { useState } from "react";
import Image from "next/image";
import * as HeroIcons from "@heroicons/react/24/solid";
import { formatPrice } from "@/utils/priceConvert";
import Button from "@/components/UI/button/button";
import IconDynamic from "@/components/UI/icon/icon";
import Quoter from "@/components/quoter/quoter";
import { Flavour, PresentationAndPrice, StrapiImage } from "@/types/home"
import { useApp } from "@/context/AppContext";
export default function ProductHero({ id, title, description, registerInvima, flavours, saving, laboratory, priceAndPresentations, image, color }: { id: number, title: string, description: string, registerInvima: string, price: number, image: StrapiImage, flavours?: Flavour[], saving?: number, laboratory?: string, priceAndPresentations: PresentationAndPrice[], color?: string }) {
  const [selected, setSelected] = useState(0);
  const [selectedItem, setSelectedItem] = useState(priceAndPresentations[0]);
  const { globalSite } = useApp();

  const { whatsappBtnText, fieldText, whatsappNumber } = globalSite?.data ?? {};
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };



  return (
    <section className=" relative bg-white max-w-full mx-auto px-8 py-10  grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-surface-container rounded-3xl shadow-lg">

      {/* Imagen */}
      <div className="relative group sm:w-120 m-auto">
        <div className="absolute inset-0 bg-(--surface-container-high) rounded-3xl -rotate-2 scale-105 group-hover:rotate-0 transition-transform duration-700" />
        <div className="relative bg-white rounded-3xl p-8 lg:p-12 overflow-hidden shadow-sm sm:w-100 w-75 m-auto" style={{ backgroundColor: color }}>



          <Image src={image?.url || '/logo.png'} alt={image?.alternativeText || 'mana de vida'} className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
            width={500}
            height={500} />



        </div>
        {/* Badges */}
        <div className="absolute -bottom-6 -right-6 flex flex-col gap-3 bg-white p-4 rounded-xl shadow-sm border border-outline-variant/15">
          {(registerInvima === null) && (
            <div className="flex items-center gap-3">
              <HeroIcons.CheckCircleIcon className="w-4 h-4 text-(--primary)" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Producto certificado</span>
            </div>
          )}
          {laboratory && (
            <div className="flex items-center gap-3 border-t border-outline-variant/10 pt-2">
              <HeroIcons.BeakerIcon className="w-4 h-4 text-(--primary)" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">{laboratory}</span>
            </div>
          )}
          {registerInvima && (
            <div className="flex items-center gap-3  pt-2">
              <IconDynamic name="badgeCheck" className="w-4 h-4 text-(--primary)" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">INVIMA: {registerInvima}</span>
            </div>
          )}

          {flavours?.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 border-t border-outline-variant/10 pt-2"
            >
              <IconDynamic
                name={item.icon.icon}
                className="w-4 h-4 text-(--primary)"
              />

              <span className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant font-['Manrope']">
                sabor:  {item.title}
              </span>
            </div>
          ))}
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
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-full sm:max-w-180">
            {description}
          </p>

        </div>

        {/* Precio */}
        <div className="flex items-baseline gap-4">

          <span className="text-sm text-on-surface-variant line-through">{saving && formatPrice(saving)}</span>
        </div>

        <div className="mb-8">
          {whatsappBtnText && <h3 className="text-sm font-semibold text-slate-900 mb-3 sm:max-w-180">{fieldText} <span className="text-(--primary)">: {whatsappBtnText}</span></h3>}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 ">
            <div className="flex items-center bg-(--surface-container-low) rounded-lg px-4 py-2 border border-outline-variant/15 w-40 mx-auto">
              <button className="p-1 hover:text-primary" onClick={decrease}><IconDynamic name="minus" /></button>
              <input
                type="number"
                value={quantity}
                readOnly
                id="quantity"
                name="quantity"
                className="w-16 border rounded text-center font-semibold text-black bg-(--surface-container-low)"
              />
              {(quantity < 5) && (
                <button className="p-1 hover:text-primary" onClick={increase}>
                  <IconDynamic name="plus" />
                </button>
              )}
            </div>
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
                    <p className="text-slate-500">{formatPrice(item.price * quantity)}</p>
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
        <Quoter id={id} presentationValue={selectedItem.presentation} quantity={quantity} />
        {/* Info extra */}
        <div className="grid md:grid-cols-1 gap-4 pt-4 max-w-150 ">
          <div className="items-center gap-2 text-sm text-on-surface-variant block text-center sm:w-100 mx-auto">

            <Button
              title={whatsappBtnText}
              href={`https://wa.me/${whatsappNumber}?text=Hola, me interesa comprar ${title} (${selectedItem.presentation}) en cantidad de ${quantity} por un total de ${formatPrice(selectedItem.price * quantity)}`}

            />
          </div>

        </div>
      </div>

    </section>
  );
}