import { motion } from "framer-motion";
import { FiArrowRight, FiMail } from "react-icons/fi";
import { Button, Input } from "@heroui/react";
import { useContactForm } from "../../hooks/useContactForm";
import { itemVariants } from "./animations";
import FormStatus from "./FormStatus";

/**
 * Contact form component with email input and animated status messages
 */
const ContactForm = () => {
    const { 
        email, 
        setEmail, 
        formStatus, 
        statusMessage, 
        handleSubmit 
    } = useContactForm();

    return (
        <div className="flex flex-col max-w-xl mx-auto lg:mx-0 mt-6 sm:mt-8 w-full px-2 sm:px-0">
            <motion.div
                variants={itemVariants}
                className="w-full"
            >
                <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <div className="relative flex-1 w-full">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="bordered"
                            classNames={{
                                base: "max-w-full w-full",
                                label: "text-black/50 dark:text-white/90 font-noto",
                                input: [
                                    "bg-transparent",
                                    "text-black/90",
                                    "placeholder:text-black/60",
                                    "w-full",
                                    "font-noto"
                                ],
                                innerWrapper: "bg-transparent w-full",
                                inputWrapper: [
                                    "shadow-lg",
                                    "bg-white/80",
                                    "backdrop-blur-xl",
                                    "group-data-[focused=true]:bg-white",
                                    "!cursor-text",
                                    "border-3 border-secondary",
                                    "rounded-full",
                                    "h-[3.125rem]",
                                    "w-full"
                                ],
                            }}
                            startContent={
                                <FiMail className="text-secondary flex-shrink-0 text-xl ml-2 mr-2 sm:mr-4" />
                            }
                            isDisabled={formStatus === "loading"}
                        />
                    </div>
                    <motion.div
                        whileHover={{ scale: formStatus === "loading" ? 1 : 1.02 }}
                        whileTap={{ scale: formStatus === "loading" ? 1 : 0.98 }}
                        className="sm:min-w-[140px] w-full sm:w-auto"
                    >
                        <Button
                            type="submit"
                            variant="solid"
                            className="bg-secondary hover:bg-secondary/90 !rounded-full !px-8 text-white font-medium h-[3.125rem] w-full relative overflow-hidden font-noto"
                            isDisabled={formStatus === "loading"}
                        >
                            {formStatus === "loading" ? (
                                <span className="flex items-center justify-center">
                                    <motion.span 
                                        className="inline-block h-5 w-5 border-2 border-transparent border-t-white rounded-full"
                                        animate={{ rotate: 360 }}
                                        transition={{ 
                                            repeat: Infinity,
                                            duration: 1, 
                                            ease: "linear"
                                        }}
                                    />
                                </span>
                            ) : (
                                <>
                                    Reach Us
                                    <FiArrowRight className="w-5 h-5 ml-2" />
                                </>
                            )}
                        </Button>
                    </motion.div>
                </form>
            </motion.div>

            {/* Status message container */}
            <FormStatus status={formStatus} message={statusMessage} />
        </div>
    );
};

export default ContactForm; 