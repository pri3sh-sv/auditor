import { useState, useEffect } from 'react';

/**
 * Hook to manage the rotating benefits display
 * @param totalItems Total number of items to rotate through
 * @param interval Time in ms between rotations
 * @returns The currently active index
 */
export const useRotatingBenefits = (totalItems: number, interval = 3000) => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % totalItems);
        }, interval);
        return () => clearInterval(timer);
    }, [totalItems, interval]);
    
    return activeIndex;
};

export default useRotatingBenefits; 