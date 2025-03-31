import {
    Navbar as HeroNavBar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu
} from "@heroui/react";
import logo from "../../assets/nav-bar/logo.jpg";
import { FiSearch } from "react-icons/fi";
import { HiChevronDown, HiChevronRight } from "react-icons/hi2";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import type { DropdownData } from "../../types/nav-types";
import {
    newBusinessData,
    manageBusinessData,
    gstData,
    growBusinessData,
    incomeTaxData,
    titles
} from "../../data/menu-items";
import { RiCloseLine, RiMenu4Line } from "react-icons/ri";
import { SearchModal } from '../search/SearchModal';

const dropdownData: DropdownData = {
    'New Business': newBusinessData,
    'Manage Your Business': manageBusinessData,
    'GST': gstData,
    'Grow Your Business': growBusinessData,
    'Income Tax': incomeTaxData,
};

const AppNavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [expandedSections, setExpandedSections] = useState<string[]>([]);
    const [expandedSubSections, setExpandedSubSections] = useState<string[]>([]);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const navItemRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const navigate = useNavigate();
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Close all sections when menu is closed
    useEffect(() => {
        if (!isMenuOpen) {
            setExpandedSections([]);
            setExpandedSubSections([]);
        }
    }, [isMenuOpen]);

    const handleOptionClick = (path: string) => {
        navigate(path);
        setIsMenuOpen(false);
        setActiveDropdown(null);
        setExpandedSections([]);
        setExpandedSubSections([]);
    };

    const toggleSection = (title: string) => {
        setExpandedSections(prev => 
            prev.includes(title) 
                ? [] // Close all sections
                : [title] // Open only this section
        );
        // Close all subsections when changing sections
        setExpandedSubSections([]);
    };

    const toggleSubSection = (sectionKey: string) => {
        setExpandedSubSections(prev => 
            prev.includes(sectionKey)
                ? prev.filter(k => k !== sectionKey)
                : [...prev, sectionKey]
        );
    };

    const handleMouseEnter = (title: string) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setActiveDropdown(title);
    };

    const handleMouseLeave = (event: React.MouseEvent) => {
        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 300);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current && 
                !dropdownRef.current.contains(event.target as Node) &&
                navItemRef.current &&
                !navItemRef.current.contains(event.target as Node)
            ) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    // Add keyboard shortcut handler
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsSearchOpen(true);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <>
            <HeroNavBar 
                className="fixed top-0 left-0 right-0 z-header bg-white/80 backdrop-blur-md shadow-sm font-noto h-nav-height"
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
                isBlurred={true}
                isBordered={false}
                maxWidth="full"
            >
                <NavbarContent justify={"start"} className="gap-4">
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="lg:hidden"
                        icon={isMenuOpen ? 
                            <RiCloseLine className="w-6 h-6 text-gray-600" /> : 
                            <RiMenu4Line className="w-6 h-6 text-gray-600" />
                        }
                    />
                    <NavbarBrand className="flex items-center gap-2">
                        <img src={logo} alt="logo" className="h-10 w-auto object-contain" />
                    </NavbarBrand>
                </NavbarContent>
                
                <NavbarContent justify={"center"} className="hidden lg:flex gap-8">
                    {titles.map((item, index) => (
                        <div
                            key={index}
                            ref={item.title === 'New Business' ? navItemRef : null}
                            className="relative"
                            onMouseEnter={() => handleMouseEnter(item.title)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <NavbarItem>
                                <button 
                                    className={`flex items-center gap-1 transition-colors duration-default
                                        ${activeDropdown === item.title ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
                                >
                                    <span className="text-[15px] font-medium">{item.title}</span>
                                    {item.hasDropdown && (
                                        <HiChevronDown 
                                            className={`w-4 h-4 transition-transform duration-default
                                                ${activeDropdown === item.title ? 'rotate-180' : ''}`}
                                        />
                                    )}
                                </button>
                            </NavbarItem>

                            {/* Floating Mega Menu */}
                            {item.hasDropdown && activeDropdown === item.title && (
                                <>  
                                    {/* Dropdown Content */}
                                    <div
                                        ref={dropdownRef}
                                        onMouseEnter={() => handleMouseEnter(item.title)}
                                        onMouseLeave={handleMouseLeave}
                                        className={`fixed left-1/2 transform -translate-x-1/2 
                                            w-[90vw] max-w-modal-width bg-white/95 backdrop-blur-sm rounded-modal 
                                            shadow-dropdown border border-gray-100/50 py-8 px-container-padding
                                            transition-all duration-300 ease-in-out opacity-0 translate-y-2 z-modal mt-8
                                            ${activeDropdown === item.title ? 'opacity-100' : ''}`}
                                    >
                                        <div className="grid grid-cols-3 gap-8">
                                            {Object.entries(dropdownData[item.title] || {}).map(([key, section]) => (
                                                <div key={key} className="space-y-4">
                                                    <div className="flex items-center gap-2 text-primary border-b border-gray-100/50 pb-2">
                                                        {section.icon}
                                                        <h3 className="font-medium text-lg">{section.title}</h3>
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        {section.items.map((item, index) => (
                                                            <button
                                                                key={index}
                                                                onClick={() => handleOptionClick(item.path)}
                                                                className="block w-full text-left px-4 py-2 text-gray-600 
                                                                    hover:text-primary hover:bg-primary-light/80 rounded-lg 
                                                                    transition-colors duration-default text-sm"
                                                            >
                                                                {item.title}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </NavbarContent>

                <NavbarContent className="items-center gap-4" justify={"end"}>
                    <NavbarItem className="hidden lg:flex">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="w-[300px] flex items-center gap-3 px-4 py-2.5 text-gray-400
                                bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200
                                border border-gray-100"
                        >
                            <FiSearch className="w-5 h-5" />
                            <span className="text-sm">Search services...</span>
                            <div className="ml-auto flex items-center gap-1 text-xs bg-white 
                                px-2 py-1 rounded border border-gray-200">
                                <span className="font-medium">⌘</span>
                                <span>K</span>
                            </div>
                        </button>
                    </NavbarItem>
                    <NavbarItem className="lg:hidden">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="p-2 text-gray-600 hover:text-primary 
                                transition-colors duration-200"
                        >
                            <FiSearch className="w-6 h-6" />
                        </button>
                    </NavbarItem>
                </NavbarContent>

                {/* Mobile Menu */}
                <NavbarMenu className="pt-4 h-[calc(100vh-4rem)] overflow-y-auto bg-white/95 backdrop-blur-md">
                    <div className="flex flex-col gap-6 pb-8">
                        
                        <div className="flex flex-col">
                            {titles.filter(item => item.hasDropdown).map((item, index) => (
                                <div key={index} className="border-b border-gray-100 last:border-none">
                                    <button
                                        onClick={() => toggleSection(item.title)}
                                        className="w-full px-4 py-3 flex items-center justify-between text-gray-800 hover:text-primary transition-colors duration-200"
                                    >
                                        <span className="font-medium text-lg">{item.title}</span>
                                        <HiChevronRight 
                                            className={`w-5 h-5 transition-transform duration-200
                                                ${expandedSections.includes(item.title) ? 'rotate-90' : ''}`}
                                        />
                                    </button>
                                    
                                    {/* Section Content */}
                                    <div className={`overflow-hidden transition-all duration-200 ease-in-out
                                        ${expandedSections.includes(item.title) ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="pl-6 py-2 space-y-4">
                                            {Object.entries(dropdownData[item.title] || {}).map(([key, section]) => (
                                                <div key={key} className="border-l-2 border-gray-100">
                                                    <button
                                                        onClick={() => toggleSubSection(`${item.title}-${key}`)}
                                                        className="w-full flex items-center justify-between text-gray-800 hover:text-primary transition-colors duration-200 py-2 pl-4"
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            {section.icon}
                                                            <span className="font-medium">{section.title}</span>
                                                        </div>
                                                        <HiChevronRight 
                                                            className={`w-4 h-4 transition-transform duration-200 mr-4
                                                                ${expandedSubSections.includes(`${item.title}-${key}`) ? 'rotate-90' : ''}`}
                                                        />
                                                    </button>
                                                    
                                                    {/* Subsection Items */}
                                                    <div className={`overflow-hidden transition-all duration-200 ease-in-out
                                                        ${expandedSubSections.includes(`${item.title}-${key}`) ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                        <div className="flex flex-col space-y-1 pl-12 pr-4 pt-2 pb-3">
                                                            {section.items.map((menuItem, idx) => (
                                                                <button
                                                                    key={idx}
                                                                    onClick={() => handleOptionClick(menuItem.path)}
                                                                    className="text-left text-gray-600 py-2 px-3 rounded-lg
                                                                        hover:bg-primary-light/80 hover:text-primary
                                                                        transition-colors duration-200 text-sm"
                                                                >
                                                                    {menuItem.title}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                            {/* Non-dropdown items */}
                            {titles.filter(item => !item.hasDropdown).map((item, index) => (
                                <div key={index} className="px-4 py-3 border-b border-gray-100 last:border-none">
                                    <button 
                                        className="w-full text-left text-gray-600 hover:text-primary 
                                            transition-colors duration-200 text-lg font-medium"
                                    >
                                        {item.title}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </NavbarMenu>
            </HeroNavBar>

            <SearchModal
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
                dropdownData={dropdownData}
            />
        </>
    );
}

export default AppNavBar; 