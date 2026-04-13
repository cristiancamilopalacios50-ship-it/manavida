
export interface Category {
    documentId: string,
    name: string,
    slug: string,
    description?: string,
    icons?:IconProps[]
}

export interface CategoryClientProps{
  categories: Category[];
}

interface IconProps{
  icon:string;
}