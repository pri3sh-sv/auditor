import { motion, AnimatePresence } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { statusContainerVariants, statusIconVariants } from "./animations";

export type FormStatusType = "idle" | "loading" | "success" | "error";

interface FormStatusProps {
    status: FormStatusType;
    message?: string;
}

/**
 * Component to display form submission status messages with animations
 */
const FormStatus = ({ status, message }: FormStatusProps) => {
    return (
        <div className="h-8 mt-3 w-full text-center sm:text-left">
            <AnimatePresence>
                {(status === "success" || status === "error") && (
                    <motion.div
                        key={status}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={statusContainerVariants}
                        className="flex items-center justify-center sm:justify-start"
                    >
                        {status === "success" && (
                            <motion.div 
                                className="mr-2 h-6 w-6 flex items-center justify-center bg-green-500 text-white rounded-full"
                                variants={statusIconVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <FiCheck className="h-4 w-4" />
                            </motion.div>
                        )}
                        
                        {status === "error" && (
                            <motion.div 
                                className="mr-2 h-6 w-6 flex items-center justify-center bg-red-500 text-white rounded-full"
                                variants={statusIconVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <span className="text-sm font-bold font-noto">!</span>
                            </motion.div>
                        )}
                        
                        <motion.span 
                            className={`text-sm font-medium font-noto ${
                                status === "success" ? "text-green-600" : "text-red-500"
                            }`}
                        >
                            {message}
                        </motion.span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FormStatus; 