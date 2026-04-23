import { Product } from "@/types/home";

export default function ProdCompositionModule({ product }: { product: Product }) {
    return (
        <>
            <section className="py-24 max-w-7xl mx-auto px-8 bg-(--background)" >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-4 space-y-6">
                        <h2 className="text-4xl font-bold tracking-tighter ">{product.titleFormulation}</h2>
                        <p className="text-on-surface-variant leading-relaxed">{product.descFormulation}</p>
                    </div>
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {product.compositionProd?.length > 0 && product.compositionProd.map((item, index) => (
                            <div key={index} className="group border-b border-primary font-['Manrope'] border-b-{--primary} p-6 hover:bg-surface-container-low transition-colors ">
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-lg font-bold ">{item.name}</h4>
                                    {item.composition && (
                                        <span className="text-[10px] font-black tracking-widest uppercase bg-(--primary) text-white px-2 py-1 rounded">
                                            {item.composition}
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">{item.description}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}