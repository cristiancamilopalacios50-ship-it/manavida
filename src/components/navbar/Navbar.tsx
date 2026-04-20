

import { ActiveLink } from '@/components/UI/active-link/ActiveLink';
import Image from 'next/image';
import Link from 'next/link';
import { NavProps } from "@/types/global";
import FilterModule from "@/components/filter/Filter";
import   IconDynamic from "@/components/UI/icon/icon"
export const Navbar = ({ items }: { items: NavProps[] }) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
      <div className="md:flex justify-around items-center md:px-6 h-30 md:h-23 w-full font-['Manrope']  ">

        {
          items.map((item) => (
            <ActiveLink key={item.href} path={item.href} text={item.name} />
          ))
        }
        <Link href="/">
          <Image
            src="/logo-verde.svg"
            alt="Logo"
            width={120}
            height={80}
            className="bg-white m-auto order-1 md:order-2 hidden md:block"
          />
     
          <p className=" md:hidden text-center text-(--primary) px-3 py-2 text-sm font-medium hover:text-(--on-secondary-fixed) hover:underline flex justify-center"><IconDynamic name='house' className="md:w-4 md:h-4 w-6 h-4 mx-1"/> Inicio</p>
        </Link>
        <FilterModule />
      </div>
    </header>
  );
};
