import type { GuideStep } from "~/components/StepByStepGuide";

export const registrationSteps: GuideStep[] = [
  {
    id: 1,
    title: "Obtain Digital Signature Certificate (DSC)",
    description: "The first step involves obtaining DSCs for all proposed directors. The DSC is used to electronically sign documents submitted to the ROC during incorporation of the company. This digital signature is mandatory for all directors.",
  },
  {
    id: 2,
    title: "Apply for Director Identification Number (DIN)",
    description: "Each director of the company must have a DIN. Apply for DIN through the Ministry of Corporate Affairs (MCA) portal. You need to provide KYC documents such as Aadhar Card, PAN Card and Proof of Address. DIN is a unique identification number issued to individuals who intend to become directors of a company.",
  },
  {
    id: 3,
    title: "Name Reservation",
    description: "Before incorporating a private limited company, a name must be chosen. The name should be distinct and not infringe on any existing trademark. Submit an application for name availability through SPICe+ form. The MCA will approve the name if it meets all requirements and is not similar to any existing company.",
  },
  {
    id: 4,
    title: "Drafting of Memorandum and Articles of Association (MoA and AoA)",
    description: "The Memorandum of Association defines the company's constitution and activities that it can undertake, whereas the Articles of Association contain the rules for internal management. These documents must be drafted carefully to comply with the Companies Act, 2013.",
  },
  {
    id: 5,
    title: "Filing Incorporation Documents",
    description: "After drafting necessary documents and obtaining name approval and DIN, incorporation application is submitted to the MCA. The application includes:\n• MOA (Memorandum of Association)\n• AOA (Articles of Association)\n• Declarations from all directors and proposed shareholders\n• Proof of registered office address along with the required documents including identity and address proof of directors, proof of registered office, and other documents prescribed by the MCA.",
  },
  {
    id: 6,
    title: "Certificate of Incorporation",
    description: "Upon successful verification, the MCA issues a Certificate of Incorporation, which signifies the formal establishment of the company. This certificate is a conclusive evidence of the company coming into existence and is automatically processed and digitally signed by the registrar.",
  },
]; 