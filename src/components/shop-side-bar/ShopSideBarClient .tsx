"use client";
import { useState } from "react";
import { iconMap } from "@/utils/icons";
import { Category } from "@/types/categories";
import { useRouter, useSearchParams } from "next/navigation";
import IconDynamic from "@/components/UI/icon/icon"
import { useApp } from "@/context/AppContext";

function NavLinks({ onClose, categories }: { onClose?: () => void; categories: Category[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();



  const activeCategory = new URLSearchParams(searchParams.toString()).get("category");

  return (
    <nav className="flex flex-col gap-1">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.slug;
        return (
          <button
            key={cat.documentId}
            data-value={cat.slug}
            onClick={() => {
              router.push(`/productos?category=${cat.slug}`);
              onClose?.();
            }}
            className={`flex items-center gap-3 font-['Manrope'] px-6 py-4 font-bold border-r-4 hover:translate-x-1 transition-transform ease-in-out duration-300 text-sm uppercase tracking-widest ${isActive
              ? "bg-emerald-50 text-emerald-900 border-emerald-900"
              : "text-slate-600 hover:bg-slate-100 border-transparent"
              }`}

          >
            {cat.icons?.[0] && (
              <IconDynamic name={cat.icons[0].icon as keyof typeof iconMap} className="w-4 h-4" />
            )}

            {cat.name}
          </button>
        );
      })}
    </nav>
  );
}


export default function ShopSideBarClient() {
  const [open, setOpen] = useState(false);
  const { categories } = useApp();
  const safeCategories = categories?.data ?? [];

  if (safeCategories.length == 0) {
    return null;
  }
  
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-(--primary) text-white p-4 rounded-full shadow-lg"
      >
        <IconDynamic name="bar" className="w-8 h-8" />
      </button>

      {open && (
        <div className="lg:hidden fixed inset-0 bg-black/40 z-40" onClick={() => setOpen(false)} />
      )}

      <div className={`lg:hidden fixed top-0 left-0 h-full w-72 bg-slate-50 z-50 transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between px-6 py-6 border-b border-slate-100">
          <div>
            <h3 className="font-['Manrope'] text-sm uppercase tracking-widest text-emerald-800 font-bold">Nuestras categorías</h3>
            <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Maná de vida</p>
          </div>
          <button onClick={() => setOpen(false)}>
            <IconDynamic name="close" className="w-5 h-5 text-(--primary-container) cursor-pointer" />
          </button>
        </div>
        <NavLinks categories={safeCategories} onClose={() => setOpen(false)} />
      </div>

      <aside className="w-64 fixed left-0 border-r border-slate-100 bg-slate-50 flex-col pt-30 pb-8 hidden lg:flex position-absolute ">
        <div className="px-6 mb-8">
          <h3 className="font-['Manrope'] text-sm uppercase tracking-widest text-emerald-800 font-bold">Nuestras categorías</h3>
          <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Maná de vida</p>
        </div>
        <NavLinks categories={safeCategories} />
      </aside>
    </>
  );
}