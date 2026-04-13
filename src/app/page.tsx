import HeroHome from "@/components/hero/hero-home/HeroHome";
import SliderHome from "@/components/slider-feature/slider";

export default async function Page() {

  return (
    <div className="flex flex-col items-center">
      <HeroHome />
      <SliderHome />
    </div>

  );
}