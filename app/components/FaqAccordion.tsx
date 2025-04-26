import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

interface FaqAccordionProps {
  title?: string;
  subtitle?: string;
  faqs: FaqItem[];
  className?: string;
}

export const FaqAccordion = ({ title, subtitle, faqs, className = "" }: FaqAccordionProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={`bg-white rounded-xl shadow-sm overflow-hidden ${className}`}>
      {/* Header */}
      {(title || subtitle) && (
        <div className="bg-primary text-white py-8 px-6">
          {title && <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>}
          {subtitle && <p className="text-white/90 max-w-2xl">{subtitle}</p>}
        </div>
      )}

      {/* FAQs */}
      <div className="p-1 md:p-3">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="mb-3 rounded-lg overflow-hidden bg-gray-50 hover:bg-gray-100/80 transition-colors duration-150"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex items-center justify-between p-5 text-left transition-all duration-200"
              aria-expanded={expandedIndex === index}
            >
              <h3 className="font-medium text-gray-800 pr-8">
                {faq.question}
              </h3>
              <div className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center transition-colors duration-200 ${
                expandedIndex === index ? "bg-primary text-white" : "bg-gray-200 text-gray-600"
              }`}>
                {expandedIndex === index ? (
                  <Minus size={16} />
                ) : (
                  <Plus size={16} />
                )}
              </div>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedIndex === index 
                  ? "max-h-[1000px] opacity-100" 
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-5 pt-0 prose prose-gray max-w-none">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 