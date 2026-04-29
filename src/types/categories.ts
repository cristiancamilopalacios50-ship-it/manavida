import {Product, StrapiImage} from "./home"
export interface Category {
    documentId: string,
    name: string,
    slug: string,
    description?: string,
    icons?:IconProps[],
    image:StrapiImage,
    descriptionShort:string,
    products:Product[]
}

export interface CategoryClientProps{
  categories: Category[];
}

interface IconProps{
  icon:string;
}