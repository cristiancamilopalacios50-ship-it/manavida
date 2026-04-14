import { notFound } from "next/navigation";
import { getBenefitBySlug, getGlobalSite, getProductBySlug } from "@/lib/api";
import ProductHero from "@/components/hero/hero-product/HeroProduct";
import { PropsProduct } from "@/types/home";
import BenefitsModule from "@/components/benefits-products/benefits";
import ProdCompositionModule from "@/components/product-composition/ProdCompositionModule";
import ConsumeProductModule from "@/components/consume-product/ConsumeProductModule";

export default async function ProductPage({ params }: PropsProduct) {

  const { slug } = await params;
  console.log(slug);
  
  const product = await getProductBySlug(slug);

  const globalData = await getGlobalSite();
  const benefits = await getBenefitBySlug(slug);

  if (!product?.data) notFound();

  const item = product.data[0];
  const { whatsappBtnText, fieldText } = globalData?.data ?? {};

  console.log(item);

  return (
    <div className="pt-20 bg-(--background)">
      <ProductHero
        {...item}
        categories={item.categories || []}
        cta={whatsappBtnText}
        fieldText={fieldText}
        priceAndPresentations={item.presentationAndPrice || []}
      />
      <BenefitsModule benefits={benefits || []} title={item.titleBenefits} description={item.descBenefits} />
      <ProdCompositionModule product={item} />
      <ConsumeProductModule title={item.titleConsume} consumption={item.consumeProd} image={item.imageConsume} />
    </div>
  );
}