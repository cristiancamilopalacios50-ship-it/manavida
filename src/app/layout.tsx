import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components";
import { getProducts, getGlobalSite, getCategories } from "@/lib/api";
import { AppProvider } from "@/context/AppContext";
import { Manrope } from "next/font/google";
import FooterModule from "@/components/footer/footer";
import { NavProps } from "@/types/global";

const navItems: NavProps[] = [
  { name: 'Nuestros Productos', href: '/productos' }
];

export const metadata: Metadata = {
  title: "maná de vida",
  description:
    "suplementos naturales para tu bienestar y vitalidad. Descubre cómo nuestros productos pueden ayudarte a alcanzar una vida más saludable y equilibrada.",
};

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const products = await getProducts();
  const categories = await getCategories();
  const globalSite = await getGlobalSite();


  return (
    <html lang="en">
      <body className={"bg-surface " + manrope.variable}>
        <AppProvider value={{ products, categories, globalSite }}>
          <Navbar items={navItems} />
          {children}
          <FooterModule value={globalSite} navs={navItems}/>
        </AppProvider>
       
        
      </body>
    </html>
  );
}