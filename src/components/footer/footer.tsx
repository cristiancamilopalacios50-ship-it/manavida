
"use client";
import { GlobalSiteResponse } from '@/types/global';
import { StrapiResponse } from '@/types/strapi';
import Image from 'next/image';
import Link from 'next/link';
import { NavProps } from '@/types/global';
import { useApp } from "@/context/AppContext";

export default function FooterModule({ value, navs }: { value: StrapiResponse<GlobalSiteResponse> | null, navs: NavProps[] }) {
    const data = value?.data;
    const { setModal } = useApp();

    if (value === null) {
        return null;
    }
    return (
        <footer className="bg-slate-200 w-full font-['Manrope'] z-60 sticky top-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 px-12 py-16 max-w-7xl mx-auto md:mx-0 md:ml-auto lg:mx-auto">
                <div className="space-y-6">
                    <div className="text-lg font-black text-teal-950 uppercase tracking-widest">{data?.siteName}</div>
                    <p className="text-slate-500 max-w-sm font-['Manrope'] text-sm">{data?.siteDescription}</p>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded bg-teal-900/10 flex items-center justify-center text-teal-900">
                            <Link href={`https://wa.me/${data?.whatsappNumber}?text=${encodeURIComponent(data?.messageSocialMedia ?? "")}`} target='_blank'>
                                <Image src="/whatsapp.png" width={20} height={20} alt="whatsApp" />
                            </Link>
                        </div>
                        {data?.instagram && <div className="w-8 h-8 rounded bg-teal-900/10 flex items-center justify-center text-teal-900">
                            <Link href={data?.instagram} target='_blank'>
                                <Image src="/instagram.png" width={20} height={20} alt="instagram" />
                            </Link>
                        </div>}
                        {data?.facebook && <div className="w-8 h-8 rounded bg-teal-900/10 flex items-center justify-center text-teal-900">
                            <Link href={data?.facebook} target='_blank'>
                                <Image src="/facebook.png" width={20} height={20} alt="facebook" />
                            </Link>
                        </div>}
                        {data?.email && <div className="w-8 h-8 rounded bg-teal-900/10 flex items-center justify-center text-teal-900">
                            <Link href={`mailto:${data.email}?subject=${encodeURIComponent(data.subjectSocialMedia)}&body=${encodeURIComponent(data.messageSocialMedia)}`} target='_blank'>
                                <Image src="/mail.png" width={20} height={20} alt="Email" />
                            </Link>
                        </div>}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h5 className="font-bold text-xs uppercase tracking-widest text-teal-950">Empresa</h5>
                        <nav className="flex flex-col gap-2">
                            {navs.map((item, index) => (
                                <a key={index} className="text-slate-500 text-sm hover:text-teal-800 transition-all" href={item.href}>{item.name}</a>
                            ))
                            }
                        </nav>
                    </div>
                    <div className="space-y-4">
                        <h5 className="font-bold text-xs uppercase tracking-widest text-teal-950">Legal</h5>
                        <nav className="flex flex-col gap-2">
                            {/* <a className="text-slate-500 text-sm hover:text-teal-800 transition-all underline decoration-teal-500 underline-offset-4" href="#">Privacy Policy</a> */}
                            <a type='button' className="text-slate-500 text-sm hover:text-teal-800 transition-all cursor-pointer " onClick={() =>
                                setModal({
                                    open: true,
                                    description: data?.tyc,
                                })
                            }>Términos y Condiciones</a>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="border-t border-slate-300 py-8 px-12 max-w-7xl mx-auto flex justify-between items-center text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                {data?.corporativeText &&
                    <span>{data.corporativeText}</span>
                }
                {data?.ubication && <div className="flex gap-4">
                    <span>{data.ubication}</span>

                </div>}
            </div>
        </footer>

    );
};
