"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import   IconDynamic from "@/components/UI/icon/icon"
interface Props {
  path: string;
  text?: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
    prefetch={false}
      href={path}
      className={`px-3 py-2 text-sm font-medium transition-all flex order-2 md:order-1 justify-center ${
        isActive
          ? "text-(--primary) underline decoration-2 underline-offset-4"
          : "text-(--primary) hover:text-(--on-secondary-fixed) hover:underline"
      }`}
    >
      <IconDynamic name="shoppingCart" className="md:w-4 md:h-4 w-6 h-4 mx-1"/>
     {text}
    </Link>
  );
};