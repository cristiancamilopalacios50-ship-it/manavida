
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ActiveLink } from '@/components/active-link/ActiveLink';
import Image from 'next/image';
import Link from 'next/link';
const navItems: { name: string; href: string }[] = [
  { name: 'Productos', href: '/products' },
  { name: 'Acerca de', href: '/about' },
  { name: 'Contacto', href: '/contact' },
];

export const Navbar = () => {
  return (
<header className="fixed top-0 w-full z-50 bg-white backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
<div className="flex justify-around items-center px-6 h-23 w-full">
<Link href="/">
  <Image 
  src="/logo-verde.svg" 
  alt="Logo" 
  width={120} 
  height={80}
   className="bg-white"
/>
</Link>
{
  navItems.map((item) => (
  <ActiveLink key={item.href} path={item.href} text={item.name}  />
  )) 
  }

</div>
</header>
  );
};
