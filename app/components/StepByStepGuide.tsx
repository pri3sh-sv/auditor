import { useState } from "react";

export interface GuideStep {
  id: number;
  title: string;
  description: string;
}

interface StepByStepGuideProps {
  title: string;
  subtitle?: string;
  steps: GuideStep[];
}

export const StepByStepGuide = ({ title, subtitle, steps }: StepByStepGuideProps) => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Guide Header */}
      <div className="bg-gradient-to-r from-primary/90 to-secondary/90 text-white py-8 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
        {subtitle && <p className="text-white/80">{subtitle}</p>}
      </div>

      {/* Step Navigation and Content */}
      <div className="flex flex-col md:flex-row">
        {/* Steps Navigation */}
        <div className="md:w-1/3 bg-gray-50 p-4 md:p-6">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`w-full text-left p-4 rounded-lg mb-2 transition-all duration-200 ${
                activeStep === step.id
                  ? "bg-primary/10 border-l-4 border-primary"
                  : "hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-3">
                <div 
                  className={`flex items-center justify-center h-8 w-8 rounded-full text-sm font-medium flex-shrink-0 ${
                    activeStep === step.id 
                      ? "bg-primary text-white" 
                      : "bg-gray-200 text-gray-600"
                  }`}
                  style={{ minWidth: '2rem' }}
                >
                  <span className="flex items-center justify-center" style={{ lineHeight: 1 }}>
                    {step.id}
                  </span>
                </div>
                <h3 className={`font-medium ${
                  activeStep === step.id ? "text-primary" : "text-gray-700"
                }`}>
                  {step.title}
                </h3>
              </div>
            </button>
          ))}
        </div>

        {/* Step Content */}
        <div className="md:w-2/3 p-6 md:p-8">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className={`${activeStep === step.id ? "block" : "hidden"}`}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 whitespace-pre-line">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 