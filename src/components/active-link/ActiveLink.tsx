"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
      className={`px-3 py-2 text-sm font-medium transition-all ${
        isActive
          ? "text-(--primary) underline decoration-2 underline-offset-4"
          : "text-(--primary) hover:text-(--on-secondary-fixed) hover:underline"
      }`}
    >
      {text}
    </Link>
  );
};