import { useState, useEffect } from 'react';
import type { ReactElement } from 'react';

/**
 * Hook to handle dynamic loading of Lottie animations
 * @param mobileAnimPath Path to mobile animation JSON
 * @param desktopAnimPath Path to desktop animation JSON
 * @returns Object containing mounted state and LottieComponent
 */
export const useLottieAnimation = (
    mobileAnimPath = '../assets/landing/hero-section-sm.json',
    desktopAnimPath = '../assets/landing/hero-section-lg.json'
) => {
    const [mounted, setMounted] = useState(false);
    const [LottieComponent, setLottieComponent] = useState<ReactElement | null>(null);

    useEffect(() => {
        setMounted(true);
        // Dynamically import Lottie and animations only on client side
        Promise.all([
            import('lottie-react'),
            import(/* @vite-ignore */ mobileAnimPath),
            import(/* @vite-ignore */ desktopAnimPath)
        ]).then(([lottie, mobileAnim, desktopAnim]) => {
            const Lottie = lottie.default;
            const Component = () => (
                <div className="w-full h-full">
                    {/* Mobile Animation */}
                    <div className="block lg:hidden w-full h-full">
                        <Lottie
                            animationData={mobileAnim.default}
                            loop={true}
                            className="w-full h-full"
                        />
                    </div>
                    {/* Desktop Animation */}
                    <div className="hidden lg:block w-full h-full">
                        <Lottie
                            animationData={desktopAnim.default}
                            loop={true}
                            className="w-full h-full"
                        />
                    </div>
                </div>
            );
            setLottieComponent(<Component />);
        });
    }, [mobileAnimPath, desktopAnimPath]);

    return { mounted, LottieComponent };
};

export default useLottieAnimation; 