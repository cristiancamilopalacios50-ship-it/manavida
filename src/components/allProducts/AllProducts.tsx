'use client'
import { ComponentError } from "../error-component/componentError";
import AllProductsClientModule from "./AllProductsClientModule";
import { useApp } from "@/context/AppContext";
export default function AllProducts() {

  const { products, categories, globalSite } = useApp();

  
  if (!globalSite?.data) {
  return <ComponentError/>
  }
  return (
  <AllProductsClientModule       products={products?.data ?? []}
      categories={categories?.data ?? []}
      categoryDescription={globalSite?.data?.categoryDescription}
      textCategories={globalSite?.data?.complementTextCategories}/>
  );
}