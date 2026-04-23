import { NavProps } from "@/types/global";
import NavbarClientModule from './NavbarClientModule';
export const Navbar = ({ items }: { items: NavProps[] }) => {

return <NavbarClientModule items={items}/>
};
