import { useState, useRef, useEffect } from "react";
import { Button } from "@heroui/react";
import { X, Send, Mail, User, Phone } from "lucide-react";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
  });
  const modalRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    
    // TODO: Handle form submission
    console.log("Form submitted:", formData);
    
    // Simulate API call
    setTimeout(() => {
      setFormState("success");
      // Reset form after success
      setTimeout(() => {
        setFormData({ fullName: "", mobileNumber: "", email: "" });
        onClose();
        setFormState("idle");
      }, 1500);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300">
      <div 
        ref={modalRef}
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-500 animate-fadeIn"
      >
        {/* Decorative elements */}
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-2xl"></div>
        <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-secondary/20 blur-2xl"></div>
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-600 z-10"
          aria-label="Close"
        >
          <X size={16} />
        </button>
        
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
          <h3 className="text-2xl font-bold">Get In Touch</h3>
          <p className="mt-1 text-white/80">We'll get back to you as soon as possible</p>
        </div>
        
        {/* Form content */}
        <div className="p-6">
          {formState === "success" ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="mb-4 rounded-full bg-green-100 p-3">
                <Send className="h-8 w-8 text-green-500" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Message Sent!</h4>
              <p className="mt-2 text-gray-600">Thank you for reaching out. We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="group relative">
                <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-gray-700">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <User className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-gray-300 bg-white p-3 pl-10 text-sm text-gray-900 transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>
              </div>
              
              <div className="group relative">
                <label htmlFor="mobileNumber" className="mb-1 block text-sm font-medium text-gray-700">
                  Mobile Number<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Phone className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    className="w-full rounded-lg border border-gray-300 bg-white p-3 pl-10 text-sm text-gray-900 transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>
              </div>
              
              <div className="group relative">
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                  Email<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Mail className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full rounded-lg border border-gray-300 bg-white p-3 pl-10 text-sm text-gray-900 transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>
              </div>
              
              <Button
                type="submit"
                variant="solid"
                className="mt-4 w-full bg-gradient-to-r from-primary to-secondary font-medium text-white hover:opacity-90 transition-opacity disabled:opacity-50"
                disabled={formState === "submitting"}
              >
                {formState === "submitting" ? (
                  <div className="flex items-center justify-center">
                    <svg className="mr-2 h-4 w-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="mr-2 h-4 w-4" />
                    Get Quote
                  </div>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}; 