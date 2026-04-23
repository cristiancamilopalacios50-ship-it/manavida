"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/home";
import { useApp } from "@/context/AppContext";
import { formatPrice } from "@/utils/priceConvert";
import IconDynamic from "../UI/icon/icon";


function ResultItem({ result }: { result: Product }) {
    return (
        <li>
            <Link
                href={result.sku ?? ""}
                className="bg-white flex items-center p-4 hover:bg-slate-50  transition-colors border-b-(--primary)  group rounded-b-lg "
            >
                {/* Thumbnail */}
                <div className="w-12 h-12 bg-surface-container flex-shrink-0 overflow-hidden mr-4 relative border border-outline-variant/20">
                    
                        <Image
                            src={result.image.url}
                            alt={result.title}
                            fill
                            className="object-cover"
                            sizes="48px"
                            unoptimized
                        />
                    
                </div>

                {/* Info */}
                <div className="flex-grow min-w-0">
                    <h4 className="font-headline font-bold text-on-surface uppercase text-sm truncate">
                        {result.title}
                    </h4>
                    <p className="font-body text-xs text-on-surface-variant mt-0.5 truncate">{result.description}</p>
                </div>

                {/* Right side */}

                <div className="font-body font-bold text-on-surface text-sm ml-4 flex-shrink-0">
                    {formatPrice(
                        Math.min(
                            ...result.presentationAndPrice.map(
                                (p) => p.price ?? 0
                            )
                        )
                    )}
                </div>

                <div className="font-body text-outline text-xs flex items-center ml-4 flex-shrink-0">
                    <span className="material-symbols-outlined text-[16px]"><IconDynamic name="moveRight" /></span>
                </div>

            </Link>
        </li>
    );
}

// --- Componente principal ---
export default function FilterClientModule() {
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const { products } = useApp();

    // Filtrado local (reemplazar con debounce + fetch si es server-side)
    const results = query.trim()
        ? products?.data.filter((r) =>
            r.title.toLowerCase().includes(query.toLowerCase())
        )
        : [];

    // Cerrar al hacer clic fuera
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Cerrar con Escape
    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") {
                setIsOpen(false);
                setQuery("");
            }
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value);
        setIsOpen(e.target.value.trim().length > 0);
    }

    function clearSearch() {
        setQuery("");
        setIsOpen(false);
    }

    return (
        <div className="flex items-center space-x-4 bg-white justify-center pb-1">
            {/* Search */}
            <div className="relative w-100 lg:w-80 rounded-lg bg-slate-50 " ref={containerRef}>
                <div className="rounded-lg flex items-center bg-surface-container-high px-4 py-2  border-[0.5px]  border-(--primary-fixed-dim)">
                    <span className="material-symbols-outlined text-on-surface-variant mr-2 text-[20px] rounded-lg bg-(--primary-fixed-dim) p-0.5">
                        <IconDynamic name="search" className="text-(--primary)" />
                    </span>
                    <input
                        className=" bg-transparent border-none outline-none focus:ring-0 text-on-surface font-body text-sm w-full placeholder-outline-variant"
                        placeholder="Busca un producto"
                        type="text"
                        value={query}
                        onChange={handleChange}
                        onFocus={() => query.trim() && setIsOpen(true)}
                        aria-label="Search formulations"
                        aria-expanded={isOpen}
                        aria-controls="search-results"
                        role="combobox"
                        aria-autocomplete="list"
                    />
                    {query && (
                        <button
                            onClick={clearSearch}
                            aria-label="Clear search"
                            className="material-symbols-outlined text-outline-variant text-[18px]"
                        >
                            <IconDynamic name="close" className="cursor-pointer" />
                        </button>
                    )}
                </div>


                {isOpen && results?.length != 0 && (
                    <div
                        id="search-results"
                        role="listbox"
                        className="absolute top-full right-0 mt-0 w-[350px] md:w-[400px] bg-white  ambient-shadow rounded-b-lg border border-primary "
                    >
                        {/* <div className="p-4  border-b border-outline-variant/20 text-['Manrope']">
                            <span className="font-label text-xs tracking-[0.2em] font-bold uppercase ">
                               Nuestros productos en venta
                            </span>
                        </div> */}

                        <ul className="max-h-[320px] overflow-y-auto font-['Manrope']">
                            {results?.map((result) => (
                                <ResultItem key={result.id} result={result} />
                            ))}
                        </ul>

                        {/* <div className="p-3 bg-surface-container-low border-t border-primary text-center">
                            <Link
                                href={`/search?category=${encodeURIComponent(query)}`}
                                className="font-body text-xs font-bold text-on-surface hover:underline uppercase tracking-widest"
                            >
                                View all results for {query}
                            </Link>
                        </div> */}
                    </div>
                )}
            </div>
        </div>
    );
}