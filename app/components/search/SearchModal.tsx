import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router';
import type { DropdownData } from '../../types/nav-types';
import { Input } from '@heroui/react';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
    dropdownData: DropdownData;
}

interface SearchResult {
    title: string;
    path: string;
    icon?: React.ReactNode;
    category: string;
}

export const SearchModal = ({ isOpen, onClose, dropdownData }: SearchModalProps) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const navigate = useNavigate();

    // Flatten the dropdown data into searchable items
    const getAllSearchItems = (): SearchResult[] => {
        const items: SearchResult[] = [];
        Object.entries(dropdownData).forEach(([category, sections]) => {
            Object.entries(sections).forEach(([_, section]) => {
                section.items.forEach((item) => {
                    items.push({
                        title: item.title,
                        path: item.path,
                        icon: section.icon,
                        category: `${category} > ${section.title}`
                    });
                });
            });
        });
        return items;
    };

    // Filter items based on search query
    useEffect(() => {
        const allItems = getAllSearchItems();
        const filtered = allItems.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setResults(filtered);
    }, [searchQuery, dropdownData]);

    const handleSelect = (path: string) => {
        navigate(path);
        onClose();
        setSearchQuery('');
    };

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div 
                    className="fixed inset-0 z-[100]"
                    onClick={() => {
                        setSearchQuery('');
                        onClose();
                    }}
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-2 sm:p-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="w-full mx-3 sm:mx-0 max-w-[95vw] sm:max-w-2xl bg-white rounded-xl shadow-2xl z-[101]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="p-3 sm:p-6">
                                    {/* Search Input */}
                                    <div className="relative">
                                        <Input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder="Search"
                                            startContent={
                                                <FiSearch className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                            }
                                            endContent={
                                                <button
                                                    onClick={() => { setSearchQuery(''); onClose() }}
                                                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                                                >
                                                    <FiX className="w-4 h-4 sm:w-5 sm:h-5" />
                                                </button>
                                            }
                                            classNames={{
                                                base: "w-full",
                                                mainWrapper: "h-full",
                                                input: "text-sm sm:text-base",
                                                inputWrapper: [
                                                    "h-10 sm:h-12 border-2 border-gray-200",
                                                    "shadow-sm",
                                                    "transition-all duration-200"
                                                ].join(" ")
                                            }}
                                        />
                                    </div>

                                    {/* Results */}
                                    <div className="mt-4 sm:mt-6 max-h-[50vh] sm:max-h-[60vh] overflow-y-auto">
                                        <div className="space-y-2 sm:space-y-4">
                                            {results.length > 0 ? (
                                                results.map((result, index) => (
                                                    <motion.button
                                                        key={index}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: index * 0.05 }}
                                                        onClick={() => handleSelect(result.path)}
                                                        className="w-full flex items-start gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg
                                                            hover:bg-gray-50 transition-colors duration-200"
                                                    >
                                                        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center 
                                                            justify-center rounded-lg bg-primary-light text-primary">
                                                            {result.icon}
                                                        </div>
                                                        <div className="flex-1 text-left">
                                                            <h3 className="font-medium text-sm sm:text-base text-gray-900">{result.title}</h3>
                                                            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{result.category}</p>
                                                        </div>
                                                    </motion.button>
                                                ))
                                            ) : searchQuery ? (
                                                <div className="text-center py-6 sm:py-8 text-sm sm:text-base text-gray-500">
                                                    No results found for "{searchQuery}"
                                                </div>
                                            ) : (
                                                <div className="text-center py-6 sm:py-8 text-sm sm:text-base text-gray-500">
                                                    Start typing to search...
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
}; 