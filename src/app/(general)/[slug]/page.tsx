import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/api";
import ProductHero from "@/components/hero/hero-product/HeroProduct";
import { PropsProduct } from "@/types/home";
import BenefitsClientModule from "@/components/benefits-products/BenefitsClientModule";
import ProdCompositionModule from "@/components/product-composition/ProdCompositionModule";
import ConsumeProductModule from "@/components/consume-product/ConsumeProductModule";
import RelationalProductsClientModule from "@/components/relational-product/RelationalProductsClientModule"

export async function generateMetadata({ params }: PropsProduct) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product?.data?.length) {
    return {
      title: "Producto no encontrado",
    };
  }

  const item = product.data[0];

  return {
    title: `${item.title} en Roldanillo - Valle del Cauca`,
    description:
      item.shortDescription ||
      item.description ||
      "Suplemento natural para mejorar tu bienestar y salud.",
    openGraph: {
      title: item.title,
      description: item.shortDescription || item.description,
      images: item.image?.url ? [item.image.url] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.shortDescription || item.description,
      images: item.image?.url ? [item.image.url] : [],
    },
  };
}

export default async function ProductPage({ params }: PropsProduct) {

  const { slug } = await params;

  const product = await getProductBySlug(slug);
    





  if (!product?.data) notFound();

  const products = product.data;
  const item = products[0];


  const { titleBenefits, descBenefits } = item;



  return (
    <div className="pt-20 bg-(--background)">
      <ProductHero
        {...item}
        categories={item.categories || []}
        priceAndPresentations={item.presentationAndPrice || []}
      />

      {item.benefits?.length && <BenefitsClientModule benefits={item.benefits || []} title={titleBenefits} description={descBenefits} />}
      {item.titleFormulation && <ProdCompositionModule product={item} />}
      {item.titleConsume && <ConsumeProductModule title={item.titleConsume} consumption={item.consumeProd} image={item.imageConsume} />}
      {item && <RelationalProductsClientModule productWithslug={item} />}
    </div>
  );

}