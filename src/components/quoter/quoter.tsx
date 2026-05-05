"use client";
import IconDynamic from "../UI/icon/icon";
import { municipios } from "@/utils/colombia-cities";
import { calculateShippingPrice } from "@/lib/shipping";
import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/UI/combobox/combobox"
import { useState } from "react";
import Button from "../UI/button/button";
import { formatPrice } from "@/utils/priceConvert";
import Spinner from "../UI/spinner/spinner";
export default function Quoter({ id, presentationValue, quantity }: { id: number, presentationValue: string, quantity: number }) {

    const [selectedNumero, setSelectedNumero] = useState("");
    const [price, setPrice] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);

    type ShippingResponse = {
        Precio: {
            Valor: number;
        };
    }[];

    const handleShipping = async () => {

        try {
             setPrice(null);
            setLoading(true);
            const result: ShippingResponse = await calculateShippingPrice(
                id,
                presentationValue,
                quantity,
                selectedNumero
            );
            const price = result[0].Precio.Valor;
            setPrice(price);
        } catch (error) {
            console.error("Error calculating shipping:", error);
        } finally {
            setLoading(false);
            setSelectedNumero("");
           
        }
    }

    return (
        <div className=" max-w-150 bg-(--surface-container-low) p-6 rounded-2xl border border-outline-variant/20 mt-8 space-y-4 font-['Manrope']">
            <div className="flex items-center gap-2 mb-2 text-(--primary)">

                <IconDynamic name="truck" className="text-primary text-lg" />
                <h4 className="text-sm font-bold uppercase tracking-widest text-on-surface">Calculadora de Envío</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-['Inter']">

                <div className="space-y-1.5">
                    <Combobox items={municipios}>
                        <ComboboxInput
                            placeholder="Selecciona una ciudad"

                        />

                        <ComboboxContent>
                            <ComboboxEmpty>Verifica el municipio seleccionado</ComboboxEmpty>

                            <ComboboxList>
                                {(item) => (
                                    <ComboboxItem
                                        key={item.numero}
                                        value={item.municipio}
                                        onClick={() => setSelectedNumero(item.numero)}
                                    >
                                        {item.municipio}
                                    </ComboboxItem>
                                )}
                            </ComboboxList>
                        </ComboboxContent>
                    </Combobox>
                </div>
                <div className="space-y-1.5 text-(--primary) font-('Manrope') bold text-lg mx-auto" >
                 {(price) &&    <p >{formatPrice(price + 900)} COP</p>}
                   {loading ? <Spinner /> : null}
                </div>
            </div>
            <div className={`transition-all duration-300 overflow-hidden ${selectedNumero
                ? "opacity-100 translate-y-0 max-h-40"
                : "opacity-0 translate-y-2 max-h-0"
                }`}>
                {(selectedNumero) && (

                    <div className="w-full py-3 bg-secondary text-(--primary) rounded-lg font-bold text-sm tracking-tight hover:bg-secondary/90 transition-all duration-300" >
                        <Button onClick={handleShipping} title="Calcular Envío" />
                    </div>


                )}
            </div>
            <div className="pt-2 border-t border-outline-variant/10">
                <p className="text-xs text-on-surface-variant text-center italic">Ingresa tu ubicación para calcular el costo de envío</p>
            </div>
        </div>
    );
}