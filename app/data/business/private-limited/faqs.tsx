import React from "react";
import type { FaqItem } from "~/components/FaqAccordion";

export const faqData: FaqItem[] = [
  {
    question: "What is difference between SPICe and SPICe+?",
    answer: (
      <p>
        SPICe (Simplified Proforma for Incorporating Company Electronically) was the earlier form used for company incorporation. SPICe+ is an upgraded version that integrates multiple services like name reservation, company incorporation, DIN allocation, PAN & TAN application, and GST registration into a single form. SPICe+ offers a more streamlined process with additional features and services integrated into one application.
      </p>
    )
  },
  {
    question: "Whether the RUN form is still applicable for name approval",
    answer: (
      <p>
        No, the RUN (Reserve Unique Name) form is no longer applicable for name approval as a standalone process. Name reservation is now integrated into the SPICe+ form as Part A. Companies can directly apply for name reservation through SPICe+ Part A before proceeding to incorporation through SPICe+ Part B.
      </p>
    )
  },
  {
    question: "What is a company limited by share and a company limited by guarantee?",
    answer: (
      <div>
        <p className="mb-3">A company limited by shares is the most common type of company where members' liability is limited to the amount unpaid on shares they hold. If shares are fully paid, shareholders have no further liability.</p>
        <p>A company limited by guarantee is one where members' liability is limited to the amount they agree to contribute to the company's assets if it is wound up. These are typically used for non-profit organizations, charities, clubs, etc. where the guaranteed amount is usually nominal.</p>
      </div>
    )
  },
  {
    question: "Can Private Limited Companies attract Foreign Direct Investments",
    answer: (
      <p>
        Yes, Private Limited Companies in India can attract Foreign Direct Investments (FDI). India's FDI policy allows foreign investment in most sectors through the automatic route, though some sectors have restrictions or require government approval. Private Limited Companies are popular vehicles for FDI as they provide a structured framework with limited liability protection for investors.
      </p>
    )
  },
  {
    question: "What is the difference between DIN and DPIN?",
    answer: (
      <p>
        DIN (Director Identification Number) is a unique identification number issued to individuals who are directors or intend to become directors of a company. DPIN (Designated Partner Identification Number) was previously issued to individuals who are or intend to become designated partners in a Limited Liability Partnership (LLP). However, now both have been merged, and DIN serves as the identification number for both company directors and LLP designated partners.
      </p>
    )
  },
  {
    question: "Can a foreign national become a director in a Private limited company",
    answer: (
      <p>
        Yes, a foreign national can become a director in a Private Limited Company in India. They need to obtain a Director Identification Number (DIN) and provide necessary KYC documents including passport, overseas address proof, and digital signature certificate. Depending on their role and involvement, they may need to comply with additional visa and tax regulations.
      </p>
    )
  },
  {
    question: "Can a company become a director in a private limited company?",
    answer: (
      <p>
        No, a company cannot become a director in a private limited company in India. Only natural persons (individuals) can be appointed as directors. However, a company can be a shareholder (member) of another company and can nominate an individual to be appointed as a director to represent its interests. This is known as a nominee director.
      </p>
    )
  },
  {
    question: "What is the cost for private limited company registration in India",
    answer: (
      <div>
        <p className="mb-3">The cost for private limited company registration in India typically ranges from ₹8,000 to ₹25,000 for government fees, which includes:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>Name reservation fee</li>
          <li>Registration fees (based on authorized capital)</li>
          <li>DIN application fees</li>
          <li>Digital Signature Certificate (DSC) fees</li>
          <li>PAN and TAN registration</li>
        </ul>
        <p>Professional service fees for assistance with documentation and filing may range from ₹10,000 to ₹30,000 depending on the service provider and complexity of the incorporation. Total costs typically range from ₹18,000 to ₹55,000.</p>
      </div>
    )
  },
]; 