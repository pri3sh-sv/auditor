import type { ReactNode } from 'react';

export interface MenuItem {
    title: string;
    path: string;
}

export interface MenuSection {
    title: string;
    icon: ReactNode;
    isHighlighted?: boolean;
    items: MenuItem[];
}

export interface MenuData {
    [key: string]: MenuSection;
}

export interface DropdownData {
    [key: string]: MenuData;
}

export interface NavTitle {
    title: string;
    hasDropdown: boolean;
} 