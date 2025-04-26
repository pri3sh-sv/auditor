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
import { partnerDetails, llpDetails, deliverables } from "~/data/business/llp/requirements";
import { registrationSteps } from "~/data/business/llp/step";
import { infoPanelData } from "~/data/business/llp/info-panels";
import { faqData } from "~/data/business/llp/faq";
import { eAuditorFeatures } from "~/data/business/private-limited/features";

export default function LLPPage() {
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
              Limited Liability Partnership (LLP) Online: LLP Registration Process
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A Comprehensive Guide to LLP Formation in India
            </p>
          </div>
          
          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <InfoSection 
              title="Partners Details" 
              items={partnerDetails} 
            />
            <InfoSection 
              title="LLP Details" 
              items={llpDetails} 
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
              title="LLP Registration Process" 
              subtitle="LLP registration procedure in India involves the following steps"
              steps={registrationSteps} 
            />
          </div>
          
          {/* Things to Know - Info Panels */}
          <div className="mb-16">
            <InfoPanels
              title="Things to Know"
              subtitle="Everything You Need to Know About Limited Liability Partnership"
              sections={infoPanelData}
            />
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <FaqAccordion
              title="Frequently Asked Questions"
              subtitle="Get answers to common questions about LLP registration"
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
