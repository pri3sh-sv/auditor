import {Navbar as HeroNavBar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, Input} from "@heroui/react";
import logo from "../assets/nav-bar/logo.jpg";

import { RiCloseLine, RiMenu4Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import {useState} from "react";

const titles = [
    { title: 'New Business' },
    { title: 'Manage Your Business'},
    { title: 'GST'},
    { title: 'Grow Your Business'},
    { title: 'Income Tax'},
    { title: 'Our Office'},
]

const AppNavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <HeroNavBar className="mx-auto h-16"
                    isMenuOpen={isMenuOpen}
                    onMenuOpenChange={setIsMenuOpen}
                    isBlurred={true}
                    isBordered={true}
        >
            <NavbarContent justify={"start"}>
                <NavbarMenuToggle
                    icon = {isMenuOpen ?  <RiCloseLine size={28} /> : <RiMenu4Line size={28} />}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className={"lg:hidden"}/>
                <NavbarBrand>
                    <img src={logo} alt="logo" className={"object-contain w-10"} />
                </NavbarBrand>
            </NavbarContent>
            {/*<NavbarContent justify={"center"}>*/}
            {/*    { titles.map((item, index) => (*/}
            {/*        <NavbarItem key={index} className={"font-noto text-xl"}>{item.title}</NavbarItem>*/}
            {/*    ))}*/}
            {/*</NavbarContent>*/}
            <NavbarContent className={"items-center"} justify={"end"}>
                <NavbarItem className={"lg:hidden"}>
                    <FiSearch size={26}/>
                </NavbarItem>
            </NavbarContent>

        </HeroNavBar>
    );
}

export default AppNavBar;