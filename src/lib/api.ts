import { Category } from "@/types/categories";
import { HomeHero, Product } from "@/types/home";
import { StrapiResponse } from "@/types/strapi";
import { GlobalSiteResponse } from "@/types/global";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getHome(): Promise<StrapiResponse<HomeHero> | null> {
  try {
    const res = await fetch(
      `${API_URL}/api/home?populate=*`
    );
    if (!res.ok) throw new Error("Error fetching home");
    return res.json();
  } catch (error) {
    console.error("Error fetching home:", error);
    return null;
  }
}

export async function getFeatureSlider(): Promise<StrapiResponse<Product[]> | null> {
  try {
    const res = await fetch(
      `${API_URL}/api/products?filters[productFeatured][$eq]=destacado&populate[image][fields]=url&populate[buttonProduct][populate]=*&populate[presentationAndPrice][fields][0]=*`
    );
    if (!res.ok) throw new Error("Error fetching featured products");
    return res.json();
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return null;
  }
}
export async function getCategories(): Promise<StrapiResponse<Category[]> | null> {
  try {
    const res = await fetch(
      `${API_URL}/api/categories?populate[icons]=true&populate[image][fields][0]=*`
    );
    if (!res.ok) throw new Error("Error fetching categories");
    return res.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return null;
  }
}

export async function getProducts(): Promise<StrapiResponse<Product[]> | null> {
  try {
    const res = await fetch(
      `${API_URL}/api/products?populate[categories][fields][0]=slug&populate[categories][fields][1]=name&populate[buttonProduct][populate]=*&populate[presentationAndPrice][fields][0]=*&populate[image][fields][0]=*&populate[imageConsume][fields][0]=*`,
      { next: { revalidate: 300 }, });
    if (!res.ok) throw new Error("Error fetching products");
    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
}

export async function getProductBySlug(slug: string): Promise<StrapiResponse<Product[]> | null> {
  try {

    const res = await fetch(
      `${API_URL}/api/products?filters[sku][$eq]=${slug}&populate[image][fields][0]=*&populate[categories][fields][0]=name&populate[categories][fields][1]=slug&populate[compositionProd][fields][0]=*&populate[presentationAndPrice][fields][0]=*&populate[imageConsume][fields][0]=*&populate[consumeProd][fields][0]=*&populate[benefits][populate][icon]=*`
    );

    if (!res.ok) throw new Error("Error fetching product");
    const data = await res.json();
    return data;

  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getGlobalSite(): Promise<StrapiResponse<GlobalSiteResponse> | null> {
  try {
    const res = await fetch(
      `${API_URL}/api/global?populate=*`
    );
    if (!res.ok) throw new Error("Error fetching Global Site data");
    return res.json();
  } catch (error) {
    console.error("Error fetching Global Site data:", error);
    return null;
  }
}

