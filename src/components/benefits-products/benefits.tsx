
import { Benefits } from "@/types/benefits";
import IconDynamic from "../UI/icon/icon";
import { iconMap } from "@/utils/icons";

export default function BenefitsModule({ benefits, title, description }: { benefits: Benefits[], title:string, description:string }) { 
    return (
        <section className="bg-surface-container-low py-24 bg-(--surface-container-high) ">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl lg:text-4xl font-bold tracking-tight font-['Manrope']">
                        {title}
                    </h2>
                    <p className="text-on-surface-variant max-w-2xl mx-auto">
                  {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm space-y-4"
                        >
                            <div className="w-12 h-12 bg-secondary-container/20 flex items-center justify-center rounded-xl">
                                <IconDynamic name={item.icon?.icon as keyof typeof iconMap} className="w-6 h-6 text-secondary" />

                            </div>
                            <h3 className="text-xl font-bold font-['Manrope']">{item.name}</h3>
                            <p className="text-on-surface-variant leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}