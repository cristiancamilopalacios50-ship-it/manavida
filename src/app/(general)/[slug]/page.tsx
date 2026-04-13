import { notFound } from "next/navigation";
import { getBenefitBySlug, getGlobalSite, getProductBySlug } from "@/lib/api";
import ProductHero from "@/components/hero/hero-product/HeroProduct";
import { PropsProduct } from "@/types/home";
import BenefitsModule from "@/components/benefits-products/benefits";

export default async function ProductPage({ params }: PropsProduct) {

  const { slug } = await params;
  const product = await getProductBySlug(slug);

  const globalData = await getGlobalSite();
  const benefits = await getBenefitBySlug(slug);

  if (!product?.data) notFound();

  const item = product.data[0];
  const btnText = globalData?.data?.whatsappBtnText

  console.log(item);
  
  return (
    <div className="pt-20">
      <ProductHero {...item} categories={item?.categories || []} cta={btnText} priceAndPresentations={item?.presentationAndPrice || []}/>
      <BenefitsModule benefits={benefits || []} title={item.titleBenefits} description={item.descBenefits} />
    </div>
  );
}