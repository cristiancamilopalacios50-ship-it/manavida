
// import { ComponentError } from "@/components/error-component/componentError";
import AllProducts from "@/components/allProducts/AllProducts";
import ShopSideBarClient from "@/components/shop-side-bar/ShopSideBarClient ";
 
export const metadata = {
  title: "Suplementos naturales en el Valle del Cauca y Colombia envios a nivel nacional | Maná de Vida",
  description:
    "Descubre suplementos naturales en el Valle del Cauca y Colombia para mejorar tu salud y bienestar.",
};

export default function productsPage() {


  return (
    <>
  
      <div className="flex min-h-screen bg-slate-50  ">
          
        <ShopSideBarClient />
        <main className="flex-1 lg:ml-64 px-6 md:px-12 py-12 bg-indigo-100/40 pt-40">
          <AllProducts/>
        </main>
      </div>
    </>
  );
}
