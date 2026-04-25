"use client";

import { ComponentError } from "../error-component/componentError";
import { useApp } from "@/context/AppContext";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { formatPrice } from "@/utils/priceConvert";
import Button from "../UI/button/button";
import Pagination from "../UI/pagination/pagination";
import { Suspense } from 'react'

export default function AllProducts() {
  const { products, categories, globalSite } = useApp();
  const searchParams = useSearchParams();

  const category = searchParams.get("category");
  const page = Number(searchParams.get("page")) || 1;
  const ITEMS_PER_PAGE = 6;
  const allProducts = products?.data ?? [];

  if (!globalSite?.data) {
    return <ComponentError />;
  }

  const filtered = category
    ? allProducts.filter((p) =>
      p.categories?.some((cat) => cat.slug === category)
    )
    : allProducts;

  const currentCategory = categories?.data?.find(
    (cat) => cat.slug === category
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  const paginatedProducts = filtered.slice(start, end);
 
  

  return (
    
    <section>
      <header className="mb-16">
        <h2 className="text-5xl md:text-6xl font-['Manrope'] font-extrabold tracking-tighter text-primary mb-4 text-(--primary)">
          {currentCategory?.name || "Productos"}{" "}
          {globalSite.data.complementTextCategories}
        </h2>

        <p className="text-xl text-on-surface-variant font-['Manrope'] font-light leading-relaxed">
          {currentCategory?.description ||
            globalSite.data.categoryDescription}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-full">
        {paginatedProducts.map((product) => (
          <article
            key={product.documentId}
            className="bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col group"
          >
            <div className="relative h-80 overflow-hidden"   style={{ backgroundColor: product.colorProduct }}>
              <Image
                alt={product.title}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                src={product.image?.url || "/logo.png" }
                fill
                priority
                
              />

              {/* <div className="absolute top-4 right-4 flex flex-col gap-2">
                {product.categories?.map((cat) => (
                  <span 
                    key={cat.documentId}
                    className="bg-emerald-900 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                  >
                    {cat.name}
                  </span>
                ))}
              </div> */}
            </div>

            <div className="p-8 flex flex-col flex-1 bg-white">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-['Manrope'] font-bold text-on-surface">
                  {product.title}
                </h3>

                <span className="text-xl font-black text-primary text-(--primary) font-['Manrope']">
                  {product.presentationAndPrice?.length ? (
                    <>
                      <p className="text-sm font-normal">Desde</p>
                      {formatPrice(
                        Math.min(
                          ...product.presentationAndPrice.map(
                            (p) => p.price ?? 0
                          )
                        )
                      )}
                    </>
                  ) : (
                    product.price && formatPrice(product.price)
                  )}
                </span>
              </div>

              <p className="text-sm mb-6 flex-1 italic content-center">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {product.presentationAndPrice?.map((p, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 rounded text-[10px]  font-bold text-emerald-900 bg-(--surface-container-highest)"
                  >
                    {p.presentation?.toUpperCase()}
                  </span>
                ))}
              </div>

              {product.buttonProduct?.map((button, index) => (
                <Button
                  key={index}
                  title={button.name}
                  href={product.sku || undefined}
                  icon="chevronRight"
                 bgColor={button.colorButton}
                  colorText={button.textColor}
                />
              ))}
            </div>
          </article>
        ))}
      </div>

      <Pagination totalPages={totalPages} currentPage={page} />
    </section>
  );
}