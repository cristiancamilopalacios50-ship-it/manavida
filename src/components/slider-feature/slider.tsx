import { getFeatureSlider } from "@/lib/api";
import { Suspense } from "react";
import ProductsFeatureClient from "./sliderClient";
import { ComponentError } from "../error-component/componentError";

export default async function SliderHome() {
  const  result = await getFeatureSlider();

    if (!result) {
        return <ComponentError />;
    }
  return (
    <Suspense fallback={<HeroSkeleton />}>
      <ProductsFeatureClient products={result.data} />
    </Suspense>
  );
}

function HeroSkeleton() {
  return (
    <div className="relative min-h-screen w-full bg-muted animate-pulse" />
  );
}