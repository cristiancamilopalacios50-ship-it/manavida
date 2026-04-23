import {StrapiImage} from "./home"
export interface Category {
    documentId: string,
    name: string,
    slug: string,
    description?: string,
    icons?:IconProps[],
    image:StrapiImage,
    descriptionShort:string
}

export interface CategoryClientProps{
  categories: Category[];
}

interface IconProps{
  icon:string;
}