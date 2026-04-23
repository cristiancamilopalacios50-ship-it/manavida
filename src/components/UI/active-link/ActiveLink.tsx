"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import   IconDynamic from "@/components/UI/icon/icon"
import { iconMap } from "@/utils/icons";
interface Props {
  path: string;
  text?: string;
  icon?: string;
   onClick?: () => void;
}

export const ActiveLink = ({ path, text, icon, onClick  }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
    prefetch={false}
      href={path}
      className={`px-3 py-2 text-sm font-medium transition-all flex    ${
        isActive
          ? "text-(--primary) underline decoration-2 underline-offset-4"
          : "text-(--primary) hover:text-(--on-secondary-fixed) hover:underline"
      }`}
      onClick={onClick}
    >
      <IconDynamic name={icon as keyof typeof iconMap} className="md:w-4 md:h-4 w-6 h-4 mx-1"/>
     {text}
    </Link>
  );
};