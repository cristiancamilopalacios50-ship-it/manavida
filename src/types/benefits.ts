import { Product } from './home'
import { iconMap } from "@/utils/icons";

export type IconName = keyof typeof iconMap;

export interface Benefits {
    name: string;
    description: string;
    products: Product[];
    icon?: icon;
}

interface icon {
    icon: IconName;
}