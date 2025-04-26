import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface InfoSection {
  title: string;
  content: React.ReactNode;
}

interface InfoPanelsProps {
  title?: string;
  subtitle?: string;
  sections: InfoSection[];
  className?: string;
}

export const InfoPanels = ({ title, subtitle, sections, className = "" }: InfoPanelsProps) => {
  const [expandedSection, setExpandedSection] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className={`bg-white rounded-xl shadow-sm overflow-hidden ${className}`}>
      {/* Header */}
      {(title || subtitle) && (
        <div className="bg-gradient-to-r from-primary to-secondary text-white py-8 px-6">
          {title && <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>}
          {subtitle && <p className="text-white/90 max-w-2xl">{subtitle}</p>}
        </div>
      )}

      {/* Content */}
      <div className="divide-y divide-gray-100">
        {sections.map((section, index) => (
          <div key={index} className="overflow-hidden">
            <button
              onClick={() => toggleSection(index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-150"
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">{section.title}</h3>
              <div className="text-primary">
                {expandedSection === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
            </button>
            
            <div 
              className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                expandedSection === index 
                  ? "max-h-[2000px] pb-6 opacity-100" 
                  : "max-h-0 pb-0 opacity-0"
              }`}
            >
              <div className="prose prose-gray max-w-none">
                {section.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 