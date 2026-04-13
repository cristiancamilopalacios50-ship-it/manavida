import { getCategories } from "@/lib/api";
import { ComponentError } from "@/components/error-component/componentError";
import FilterResult from "@/components/filter-result/filterResult";
import ShopSideBarClient from "@/components/shop-side-bar/ShopSideBarClient ";

export default async function productsPage() {
  const result = await getCategories();

  if (!result) {
    return (
    <>
      <div className="absolute top-0 bottom-0 justify-self-center flex items-center">
        <ComponentError />;
      </div>
    </>)
  }

  return (
    <>
      <div className="flex min-h-screen ">
        <ShopSideBarClient categories={result.data} />
        <main className="flex-1 lg:ml-64 px-6 md:px-12 py-12 bg-indigo-100/40 pt-25">
          <FilterResult />
        </main>
      </div>
    </>
  );
}
