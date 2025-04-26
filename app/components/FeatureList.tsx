import type { ReactNode } from "react";

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureListProps {
  title: string;
  features: Feature[];
  className?: string;
}

export const FeatureList = ({ title, features, className = "" }: FeatureListProps) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm py-10 px-6 overflow-hidden ${className}`}>
      {/* Header with gradient underline */}
      <div className="relative mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-24 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
      </div>
      
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-md group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                {feature.icon}
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 