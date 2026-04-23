import { iconMap } from "@/utils/icons";
export type IconName = keyof typeof iconMap;

export interface GlobalSiteResponse {
  siteName: string;
  siteImage:string;
  siteDescription: string;
  categoryDescription: string;
  complementTextCategories: string;
  whatsappBtnText: string;
  fieldText:string;
  whatsappNumber:string;
  email:string;
  instagram:string;
  facebook:string;
  ubication:string;
  corporativeText:string;
  messageSocialMedia:string;
  subjectSocialMedia:string;
  tyc:string;
  defaultSeo:defaultSeoProps;
  favicon:favicon;
  urlSite:string;
}
export interface NavProps{
  href:string;
  name:string;
  icon:IconName;
}
interface defaultSeoProps{
  metatitle:string;
  metaDescription:string;
}
interface favicon{
  url:string;
  alternativeText:string;
}