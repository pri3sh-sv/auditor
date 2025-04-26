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
import { documentRequirements, companyDetails, deliverables } from "~/data/business/private-limited/requirements";
import { registrationSteps } from "~/data/business/private-limited/steps";
import { infoPanelData } from "~/data/business/private-limited/info-panels";
import { faqData } from "~/data/business/private-limited/faqs";
import { eAuditorFeatures } from "~/data/business/private-limited/features";

export default function PrivateLimitedPage() {
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
              Private Limited Company Registration in India
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A Detailed Guide to Private Limited Company Formation in Bangalore
            </p>
          </div>
          
          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <InfoSection 
              title="Required Documents" 
              items={documentRequirements} 
            />
            <InfoSection 
              title="Company Requirements" 
              items={companyDetails} 
            />
            <InfoSection 
              title="Deliverables" 
              items={deliverables} 
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
              title="Step-by-Step Private Limited Company Registration Process" 
              subtitle="Follow our streamlined process for a hassle-free company registration"
              steps={registrationSteps} 
            />
          </div>
          
          {/* Things to Know - Info Panels */}
          <div className="mb-16">
            <InfoPanels
              title="Things to Know"
              subtitle="An In-Depth Guide to Private Limited Company Formation in Bangalore"
              sections={infoPanelData}
            />
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <FaqAccordion
              title="Frequently Asked Questions"
              subtitle="Get answers to common questions about private limited company registration"
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