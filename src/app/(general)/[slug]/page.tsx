import { notFound } from "next/navigation";
import { getBenefitBySlug, getProductBySlug } from "@/lib/api";
import ProductHero from "@/components/hero/hero-product/HeroProduct";
import { PropsProduct } from "@/types/home";
import BenefitsClientModule from "@/components/benefits-products/BenefitsClientModule";
import ProdCompositionModule from "@/components/product-composition/ProdCompositionModule";
import ConsumeProductModule from "@/components/consume-product/ConsumeProductModule";
import RelationalProductsClientModule from "@/components/relational-product/RelationalProductsClientModule"


export default async function ProductPage({ params }: PropsProduct) {

  const { slug } = await params;

  const product = await getProductBySlug(slug);

  const benefits = await getBenefitBySlug(slug);

  if (!product?.data) notFound();

  const products = product.data;
  const item = products[0];

  const {titleBenefits,descBenefits} = item;

  return (
    <div className="pt-20 bg-(--background)">
     <ProductHero
        {...item}
        categories={item.categories || []}
        priceAndPresentations={item.presentationAndPrice || []}
      />
   
      {benefits?.length && <BenefitsClientModule benefits={benefits || []} title={titleBenefits} description={descBenefits}/>}
      {item.titleFormulation && <ProdCompositionModule product={item} />}
      {item.titleConsume && <ConsumeProductModule title={item.titleConsume} consumption={item.consumeProd} image={item.imageConsume} />}
      {item && <RelationalProductsClientModule productWithslug={item} />}
    </div>
  );
}