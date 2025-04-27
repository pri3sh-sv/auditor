import { useLottieAnimation } from "../../hooks/useLottieAnimation";

/**
 * Component to handle loading and displaying Lottie animations
 * Displays different animations for mobile and desktop
 */
const LottieAnimation = () => {
    const { mounted, LottieComponent } = useLottieAnimation();

    if (!mounted || !LottieComponent) {
        // Loading placeholder
        return (
            <div className="w-full h-64 bg-gray-50 rounded-lg animate-pulse" />
        );
    }

    return LottieComponent;
};

export default LottieAnimation; 