
import "./globals.css";
import type { Metadata } from "next";
import  {Navbar}  from "@/components";


export const metadata: Metadata = {
  title: "maná de vida",
  description: "suplementos naturales para tu bienestar y vitalidad. Descubre cómo nuestros productos pueden ayudarte a alcanzar una vida más saludable y equilibrada.",
};



import { Manrope } from "next/font/google";



const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en" >
  <body className={" bg-surface "+manrope.variable}>
    <Navbar />
    {children}
  </body>
</html>
  );
}
