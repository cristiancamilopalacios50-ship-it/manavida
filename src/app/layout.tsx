import "./globals.css";
import type { Metadata } from "next";
import { Navbar} from "@/components";
import { getProducts, getGlobalSite, getCategories } from "@/lib/api";
import { AppProvider } from "@/context/AppContext";
import { Manrope, Inter, Geist } from "next/font/google";

import FooterModule from "@/components/footer/footer";
import { NavProps } from "@/types/global";
import { cache } from "react";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const getGlobalSiteCached = cache(getGlobalSite);

const navItems: NavProps[] = [
  { name: 'Nuestros Productos', href: '/productos', icon: 'shoppingCart' },
   { name: '¿Quienes somos?', href: '/quienes-somos', icon: 'store' },
];


const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export async function generateMetadata(): Promise<Metadata> {
  const globalSite = await getGlobalSiteCached();
  const globalData = globalSite?.data;

  return {
    title: {
      default: globalData?.siteName ?? "maná de vida",
      template: `%s | ${globalData?.siteName ?? "maná de vida"}`,
    },
    description:
      globalData?.siteDescription ??
      "Suplementos naturales para tu bienestar y vitalidad. Descubre cómo mejorar tu salud de forma natural.",
    openGraph: {
      title: globalData?.siteName ?? "maná de vida",
      description: globalData?.defaultSeo.metaDescription,
      url: globalData?.urlSite ?? "https://tiendamanadevida.com",
      siteName: globalData?.siteName,
      images: globalData?.favicon?.url
        ? [{ url: globalData.favicon.url }]
        : [],
      locale: "es_CO",
      type: "website",
    },
      keywords: [
    "suplementos deportivos",
    "proteína",
    "creatina",
    "vitaminas",
    "bienestar",
    "Roldanillo",
    "Valle del Cauca",
  ],
    twitter: {
      card: "summary_large_image",
      title: globalData?.siteName ?? "maná de vida",
      description: globalData?.siteDescription,
      images: globalData?.favicon?.url
        ? [globalData.favicon.url]
        : './logo.png',
    },
    metadataBase: new URL(
      globalData?.urlSite ?? "https://tiendamanadevida.com"
    ),
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  const [products, categories, globalSite] = await Promise.all([
    getProducts(),
    getCategories(),
    getGlobalSite()
  ]);

  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>

      <body className={"bg-surface " + manrope.variable + " " + inter.variable}>
        <AppProvider value={{ products, categories, globalSite }}>
          <Navbar items={navItems}  />
          {children}
          <FooterModule value={globalSite} navs={navItems} />
        </AppProvider>


      </body>
    </html>
  );
}