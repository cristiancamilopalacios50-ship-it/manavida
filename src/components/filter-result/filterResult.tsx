import FilterResultClient from "./filterResultCliente";
import { getCategories, getGlobalSite, getProducts } from "@/lib/api";

export default async function FilterResult() {
  const result = await getProducts();
  const categories = await getCategories();
  const globalSite = await getGlobalSite();

return (
  <FilterResultClient
    products={result?.data ?? []}
    categories={categories?.data ?? []}
    categoryDescription={globalSite?.data?.categoryDescription}
    textCategories={globalSite?.data?.complementTextCategories}
  />
);
}