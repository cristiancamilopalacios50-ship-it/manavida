import { ReactNode } from "react";
import { Category } from "./categories";


export interface HeroHomeClientProps {
  heroData: HomeHero;
}

export interface ProductsFeatureClientProps {
  products: Product[];
  categories?: Category[];
  categoryDescription?: string;
  textCategories?: string;
}
export interface HomeHero {
  Titulo: string;
  Subtitulo: string;
  Imagen: StrapiImage[];
}

export interface Product {
  id: number;
  documentId: string;
  title: string;
  description: string;
  sku: string | null;
  productFeatured: "destacado" | null;
  expire: boolean;
  presentations: string[] | null;
  price: number;
  image: StrapiImage[];
  buttonProduct: StrapiButton[];
  saving?: number;
  laboratory?: string;
  categories?: Category[];
  titleBenefits:string;
  descBenefits:string;
  descFormulation?:string;
  titleFormulation?:string;
  compositionProd?: CompositionProduct[];
  presentationAndPrice: PresentationAndPrice[];
}
export interface PropsProduct {
  params: Promise<{ slug: string }>;
}

interface CompositionProduct {
  name?: string;
  description?: string;
  composition?: string;
}
export interface PresentationAndPrice {
  price: number;
  presentation: string;
}
export interface StrapiImage {
  url: string;
  alternativeText?: string;
}

export interface StrapiButton {
  name: string;
  style: string;
  link: string;
  icon?: ReactNode;
  colorButton?: string;
  textColor?: string;
}