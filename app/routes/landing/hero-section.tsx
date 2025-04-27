import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import { containerVariants, itemVariants } from "../../components/landing/animations";
import StackedBenefits from "../../components/landing/StackedBenefits";
import BenefitsGrid from "../../components/landing/BenefitsGrid";
import ContactForm from "../../components/landing/ContactForm";
import LottieAnimation from "../../components/landing/LottieAnimation";
import FeatureCards from "../../components/landing/FeatureCards";

/**
 * Hero section component with heading, benefits, and contact form
 */
const HeroSection = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden font-noto">
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
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-noto"
                            >
                                Start Your Business
                                <span className="relative inline-block ml-2">
                                    Journey
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
                                        className="absolute -bottom-2 sm:-bottom-5 left-0 h-2 sm:h-3 bg-gradient-to-r from-secondary to-secondary/50 rounded-full -z-10"
                                    />
                                </span>
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-base sm:text-lg md:text-xl text-gray-600 font-noto"
                            >
                                Streamline your business registration process with our expert guidance and comprehensive support.
                            </motion.p>
                        </div>

                        {/* Benefits - Show stacked only on xs screens */}
                        <div className="sm:hidden mt-6">
                            <StackedBenefits />
                        </div>

                        {/* Benefits Grid - Show on sm and above */}
                        <BenefitsGrid />

                        {/* Contact Form */}
                        <ContactForm />
                    </div>

                    {/* Right Content - Animation - Only show on sm and above */}
                    <motion.div
                        variants={itemVariants}
                        className="relative w-full h-[300px] lg:h-[650px] items-center justify-center hidden sm:flex"
                    >
                        <div className="relative z-10 w-[85%] lg:w-[100%]">
                            <LottieAnimation />
                        </div>

                        {/* Floating Feature Cards */}
                        <FeatureCards />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;