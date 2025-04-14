import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiMail } from "react-icons/fi";
import { HiDocumentText, HiCurrencyRupee, HiShieldCheck, HiSparkles, HiClock, HiUserGroup, HiClipboardDocument, HiLockClosed } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { Button, Input } from "@heroui/react";

const benefits = [
    {
        icon: <HiClipboardDocument className="w-5 h-5" />,
        text: "Quick Registration Process",
        color: "from-primary/20 to-primary/30"
    },
    {
        icon: <HiUserGroup className="w-5 h-5" />,
        text: "Expert Consultation",
        color: "from-secondary/20 to-secondary/30"
    },
    {
        icon: <HiClock className="w-5 h-5" />,
        text: "24/7 Support Available",
        color: "from-primary/30 to-primary/20"
    },
    {
        icon: <HiLockClosed className="w-5 h-5" />,
        text: "Secure Documentation",
        color: "from-secondary/30 to-secondary/20"
    }
];

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
]

const StackedBenefits = () => {
const [activeIndex, setActiveIndex] = useState(0);
 useEffect(() => {
  const timer = setInterval(() => {
   setActiveIndex((prev) => (prev + 1) % benefits.length);
  }, 3000);
  return () => clearInterval(timer);
 }, []);

 return (
  <div className="relative h-[180px] w-full sm:hidden">
   {benefits.map((benefit, index) => {
    const isActive = index === activeIndex;
    const position = (index - activeIndex + benefits.length) % benefits.length;
    return (
     <motion.div
      key={index} animate={{top: position * 24, scale: 1 - (position * 0.03), opacity: position === 0 ? 1 : 0.8 - (position * 0.1), zIndex: benefits.length - position}}
      initial={false}
      transition={{duration: 0.5, ease: [0.32, 0.72, 0, 1]}}
      style={{position: 'absolute', width: '100%', transformOrigin: 'top center'}}
      className={`
       rounded-xl p-3 backdrop-blur-sm
       ${isActive ? 'bg-gradient-to-br shadow-lg' : 'bg-white/10 shadow'}
       ${benefit.color}
       transition-all duration-300
      `}
     >
      <div className="flex items-center gap-3">
       <div className={`
        flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg
        ${isActive ? 'bg-white/90 text-primary' : 'bg-white/30'}
        flex items-center justify-center shadow-sm
       `}>
        {benefit.icon}
       </div>
       <p className={`
        font-medium text-sm sm:text-[15px]
        ${isActive ? 'text-gray-800' : 'text-gray-600'}
       `}>
        {benefit.text}
       </p>
      </div>
     </motion.div>
    )
   })}
  </div>
 );
};

const LottieAnimation = () => {
    const [mounted, setMounted] = useState(false);
    const [LottieComponent, setLottieComponent] = useState<any>(null);

    useEffect(() => {
        setMounted(true);
        // Dynamically import Lottie and animations only on client side
        Promise.all([
            import('lottie-react'),
            import('../../assets/landing/hero-section-sm.json'),
            import('../../assets/landing/hero-section-lg.json')
        ]).then(([lottie, mobileAnim, desktopAnim]) => {
            const Lottie = lottie.default;
            setLottieComponent(() => () => (
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
            ));
        });
    }, []);

    if (!mounted || !LottieComponent) {
        return (
            <div className="w-full h-64 bg-gray-50 rounded-lg animate-pulse" />
        );
    }

    return <LottieComponent />;
};

const HeroSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
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

    const benefitVariants = {
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

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Rich Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100/80 to-gray-200/50">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(20,88,134,0.2),rgba(243,121,32,0.15))]" />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%)'
                    }}
                />
            </div>
            
            {/* Content Container */}
            <div className="container mx-auto px-4 py-6 sm:py-24 lg:py-12 relative z-10 h-full flex items-center">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto w-full"
                >
                    {/* Left Content */}
                    <div className="relative z-10 text-center lg:text-left w-full flex flex-col justify-between h-full">
                        <div className="flex flex-col gap-6 sm:gap-8">
                            <motion.div
                                variants={itemVariants}
                                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary font-medium text-xs sm:text-sm self-center lg:self-start"
                            >
                                <HiSparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span>Trusted by 10,000+ Businesses</span>
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
                            >
                                Start Your Business
                                <span className="relative inline-block ml-2">
                                    Journey
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
                                        className="absolute -bottom-2 sm:-bottom-3 left-0 h-2 sm:h-3 bg-gradient-to-r from-secondary to-secondary/50 rounded-full -z-10"
                                    />
                                </span>
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-base sm:text-lg md:text-xl text-gray-600"
                            >
                                Streamline your business registration process with our expert guidance and comprehensive support.
                            </motion.p>
                        </div>

                        {/* Benefits - Show stacked only on xs screens */}
                        <div className="sm:hidden mt-6">
                            <StackedBenefits />
                        </div>

                        {/* Benefits Grid - Show on sm and above */}
                        <motion.div 
                            variants={containerVariants}
                            className="mt-6 sm:mt-8 hidden sm:block"
                        >
                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        custom={index}
                                        variants={benefitVariants}
                                        whileHover={{ 
                                            scale: 1.02,
                                            transition: { duration: 0.2 }
                                        }}
                                        className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${benefit.color} p-3 sm:p-4 backdrop-blur-sm`}
                                    >
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <motion.div 
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.8 + (index * 0.1), duration: 0.3, type: "spring" }}
                                                className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/90 text-primary flex items-center justify-center shadow-sm"
                                            >
                                                {benefit.icon}
                                            </motion.div>
                                            <p className="text-gray-800 font-medium text-sm sm:text-base">{benefit.text}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Email Input */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl mx-auto lg:mx-0 mt-6 sm:mt-8"
                        >
                            <div className="relative flex-1">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    variant="bordered"
                                    classNames={{
                                        base: "max-w-full",
                                        label: "text-black/50 dark:text-white/90",
                                        input: [
                                            "bg-transparent",
                                            "text-black/90",
                                            "placeholder:text-black/60",
                                        ],
                                        innerWrapper: "bg-transparent",
                                        inputWrapper: [
                                            "shadow-lg",
                                            "bg-white/80",
                                            "backdrop-blur-xl",
                                            "group-data-[focused=true]:bg-white",
                                            "!cursor-text",
                                            "border-3 border-secondary",
                                            "rounded-full",
                                            "h-[3.125rem]"
                                        ],
                                    }}
                                    startContent={
                                        <FiMail className="text-secondary flex-shrink-0 text-xl ml-2 mr-2 sm:mr-4" />
                                    }
                                />
                            </div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button
                                    variant="solid"
                                    className="bg-secondary hover:bg-secondary/90 !rounded-full !px-8 text-white font-medium h-[3.125rem] w-full sm:w-auto"
                                >
                                    Reach Us
                                    <FiArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Content - Animation - Only show on sm and above */}
                    <motion.div
                        variants={itemVariants}
                        className="relative w-full h-[400px] lg:h-[650px] items-center justify-center hidden sm:flex"
                    >
                        <div className="relative z-10 w-[85%] lg:w-[100%]">
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
                                className={`absolute bg-white rounded-xl p-4 shadow-lg w-48 xl:w-56 z-20 hidden
                                    ${index === 0 ? 'lg:block top-4 left-1/3 xl:left-1/2 -translate-x-1/2' : 
                                    index === 1 ? 'xl:block top-1/3 -translate-y-1/2 right-[-120px]' : 
                                    'lg:block bottom-4 left-1/3 xl:left-1/2 -translate-x-1/2'}`}
                            >
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-7 h-7 xl:w-8 xl:h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 text-sm xl:text-base">{feature.title}</h3>
                                        <p className="text-xs xl:text-sm text-gray-500 mt-1">{feature.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;