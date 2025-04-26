import { useState } from "react";
import { Button } from "@heroui/react";
import { InfoSection } from "~/components/InfoSection";
import { ContactForm } from "~/components/ContactForm";
import { StepByStepGuide } from "~/components/StepByStepGuide";
import { InfoPanels } from "~/components/InfoPanels";
import { FaqAccordion } from "~/components/FaqAccordion";
import { FeatureList } from "~/components/FeatureList";
import NavBar from "~/components/nav-bar";

// Import data from separate files
import { documentsRequired, checklistItems, importancePoints } from "~/data/business/partnership/requirements";
import { registrationSteps } from "~/data/business/partnership/steps";
import { infoPanelData } from "~/data/business/partnership/info-panels";
import { faqData } from "~/data/business/partnership/faq";
import { eAuditorFeatures } from "~/data/business/private-limited/features";

export default function PartnershipPage() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => setIsContactFormOpen(true);
  const closeContactForm = () => setIsContactFormOpen(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NavBar */}
      <NavBar />
      
      {/* Page Content */}
      <div className="container mt-16 mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Page Title */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Firm Registration in India
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A Complete Guide to Registering Your Partnership Firm
            </p>
          </div>
          
          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <InfoSection 
              title="Documents Required" 
              items={documentsRequired} 
            />
            <InfoSection 
              title="Checklist Items" 
              items={checklistItems} 
            />
            <InfoSection 
              title="Benefits of Registration" 
              items={importancePoints.slice(0, 3)} 
            />
          </div>
          
          {/* Contact Button */}
          <div className="text-center mb-16">
            <Button
              variant="solid"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium"
              onClick={openContactForm}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Step by Step Guide */}
          <div className="mb-16">
            <StepByStepGuide 
              title="Process of Partnership Firm Registration" 
              subtitle="Follow our streamlined process for hassle-free partnership registration"
              steps={registrationSteps} 
            />
          </div>
          
          {/* Things to Know - Info Panels */}
          <div className="mb-16">
            <InfoPanels
              title="Things to Know"
              subtitle="Important Information About Partnership Firm Registration"
              sections={infoPanelData}
            />
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <FaqAccordion
              title="Frequently Asked Questions"
              subtitle="Get answers to common questions about partnership firm registration"
              faqs={faqData}
            />
          </div>
          
          {/* Why eAuditor Office Section */}
          <div className="mb-20">
            <FeatureList
              title="Why eAuditor Office?"
              features={eAuditorFeatures}
            />
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactForm isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  );
} 