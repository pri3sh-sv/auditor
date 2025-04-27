/**
 * Animation variants for the hero section
 */

// Main container animation variants
export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        }
    }
};

// Common item animation variants
export const itemVariants = {
    hidden: { 
        opacity: 0,
        y: 20
    },
    visible: { 
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1]
        }
    }
};

// Benefit items animation variants with custom delay based on index
export const benefitVariants = {
    hidden: { 
        opacity: 0,
        x: -20
    },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.5 + (i * 0.1),
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1]
        }
    })
};

// Form status animation variants
export const statusContainerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
};

// Success/error icon animation variants
export const statusIconVariants = {
    hidden: { scale: 0 },
    visible: { 
        scale: 1, 
        transition: { 
            type: "spring", 
            stiffness: 300, 
            damping: 10,
            delay: 0.2 
        } 
    }
}; 