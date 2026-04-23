import { ConsumeProd, StrapiImage } from '@/types/home';
import Image from 'next/image';

export default function ConsumeProductModule({ title, consumption, image }: { title: string, consumption: ConsumeProd[], image: StrapiImage }) {
   
    
    return (
        <section className="bg-(--on-primary-container)  py-20 font-['Manrope']">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-xl">
                    
                    
                   
                     
                            <Image   data-url={image.url} src={image.url} alt={image.alternativeText} className="w-full object-cover" height={500} width={500} />
                       
              

                </div>

                <div className="order-1 lg:order-2">
                    {<h2 className="text-3xl font-bold text-brand-dark mb-10 ">{title}</h2>}
                    <div className="space-y-10">
                        {consumption.length > 0 && consumption.map((item, index) => (
                            
                            <div className="flex gap-6" key={index}>
                                {item.title || item.description ? <div className="text-4xl font-light ">{index + 1}</div> : null}
                                <div>
                                    {item.title &&<h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>}
                                    <p className="text-slate-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}