import { iconMap, IconName } from "@/utils/icons";

type Props = {
  name: IconName;
  className?: string;
};

export default function IconDynamic({ name, className }: Props) {
  const Icon = iconMap[name];

  if (!Icon) return null;

  return <Icon className={className} />;
}