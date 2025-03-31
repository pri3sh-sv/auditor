import { motion } from "framer-motion";
import { FiCheck, FiArrowRight, FiMail } from "react-icons/fi";
import { HiDocumentText, HiCurrencyRupee, HiShieldCheck } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { Button, Input } from "@heroui/react";

const features = [
    {
        icon: <HiDocumentText className="w-6 h-6" />,
        title: "Easy Documentation",
        description: "Hassle-free paperwork handling"
    },
    {
        icon: <HiCurrencyRupee className="w-6 h-6" />,
        title: "Competitive Pricing",
        description: "Best-in-market rates guaranteed"
    },
    {
        icon: <HiShieldCheck className="w-6 h-6" />,
        title: "100% Compliance",
        description: "Full legal compliance assured"
    }
];

const benefits = [
    "Quick Registration Process",
    "Expert Consultation",
    "24/7 Support Available",
    "Secure Documentation"
];

// Client-side only Lottie component with screen size awareness
const LottieAnimation = () => {
    const [mounted, setMounted] = useState(false);
    const [LottieComponent, setLottieComponent] = useState<any>(null);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 1024);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        // Lazy load Lottie and animation data based on screen size
        Promise.all([
            import('lottie-react'),
            import(`../../assets/landing/hero-section-${isSmallScreen ? 'sm' : 'lg'}.json`)
        ]).then(([lottie, animation]) => {
            setLottieComponent(() => {
                const Comp = lottie.default;
                return () => <Comp animationData={animation.default} />;
            });
        });

        return () => window.removeEventListener('resize', checkScreenSize);
    }, [isSmallScreen]);

    if (!mounted || !LottieComponent) {
        return (
            <div className="w-full h-64 bg-gray-50 rounded-lg animate-pulse" />
        );
    }

    return <LottieComponent />;
};

const HeroSection = () => {
    return (
        <section className="relative min-h-[90vh] overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-primary/5 to-primary/10" />
            
            {/* Content Container */}
            <div className="container mx-auto px-4 pt-20 lg:pt-28">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative z-10 text-center lg:text-left"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6"
                        >
                            Trusted by 10,000+ Businesses
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                        >
                            Start Your Business
                            <span className="relative inline-block ml-2">
                                Journey
                                <svg className="absolute -bottom-[27px] lg:-bottom-[39px] w-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ delay: 0.5, duration: 1 }}
                                        d="M0,5 Q50,15 100,5"
                                        stroke="#F37920"
                                        strokeWidth="4"
                                        fill="none"
                                    />
                                </svg>
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
                        >
                            Streamline your business registration process with our expert guidance and comprehensive support.
                        </motion.p>

                        {/* Benefits List */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 w-full max-w-xl mx-auto lg:mx-0"
                        >
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                    className="flex items-center gap-2 justify-start"
                                >
                                    <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#55B848] flex items-center justify-center">
                                        <FiCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                                    </div>
                                    <span className="text-gray-700 text-sm sm:text-base text-center sm:text-left">{benefit}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Email Input */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto lg:mx-0"
                        >
                            <div className="relative flex-1">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    variant="bordered"
                                    className="w-full"
                                    startContent={
                                        <FiMail className="text-secondary flex-shrink-0 text-xl mr-2 sm:mr-4" />
                                    }
                                />
                            </div>
                            <Button
                                variant="solid"
                                className="bg-secondary hover:!bg-secondary/90 !rounded-full !px-4 text-white"
                            >
                                Reach Us
                                <FiArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Animation and Cards */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="relative h-[300px] mb-10 md:mb-0 md:h-[300px] lg:h-[650px] flex items-center justify-center"
                    >
                        {/* Centered Lottie Animation */}
                        <div className="relative z-10 w-full sm:w-[85%] lg:w-[75%]">
                            <LottieAnimation />
                        </div>

                        {/* Floating Feature Cards - Only visible on lg screens */}
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ 
                                    opacity: 1, 
                                    scale: 1,
                                    y: [0, -10, 0]
                                }}
                                transition={{
                                    delay: 0.2 * index,
                                    y: {
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        delay: index * 0.5
                                    }
                                }}
                                className={`absolute bg-white rounded-xl p-4 shadow-lg w-48 z-20 hidden lg:block
                                    ${index === 0 ? 'top-4 left-1/2 -translate-x-1/2' : 
                                    index === 1 ? 'top-1/3 -translate-y-1/2 right-[-30px]' : 
                                    'bottom-0 left-1/2 -translate-x-1/2'}`}
                            >
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900">{feature.title}</h3>
                                        <p className="text-sm text-gray-500 mt-1">{feature.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;