import Link from "next/link";
import { ButtonProps } from "@/types/button";
import { iconMap } from "@/utils/icons";
import IconDynamic from "../icon/icon";

export default function Button({
  title,
  href,
  icon,
  bgColor = "var(--primary)",
  colorText = "var(--on-primary)",
  onClick,
}: ButtonProps) {
 const styles = {
    backgroundColor: bgColor ?? "var(--primary)",
    color: colorText ?? "var(--on-primary)",
  };

  const base = "px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all active:scale-95 hover:opacity-90 cursor-pointer";

  const Icon = icon
    ? (icon as keyof typeof iconMap)
    : null;

  if (href) {
    return (
      <Link href={href} className={base} style={styles} prefetch={false}>
        {title}
        {Icon && <IconDynamic name={Icon} className="w-4 h-4" />}
      </Link>
    );
  }

  return (
    <a onClick={onClick} className={base} style={styles}>
          {title}
     {Icon && <IconDynamic name={Icon} className="w-4 h-4" />}
    </a>
  );
}