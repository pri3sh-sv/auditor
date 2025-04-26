import React from "react";
import type { FaqItem } from "~/components/FaqAccordion";

export const faqData: FaqItem[] = [
  {
    question: "Who can be partners of an LLP?",
    answer: (
      <div>
        <p>
          Any individual or body corporate can be a partner in an LLP. This includes Indian citizens, foreign nationals, and companies. The minimum number of partners required is 2, and there is no maximum limit on the number of partners. However, if a body corporate is a partner, it must appoint a natural person as its nominee to act on its behalf.
        </p>
      </div>
    )
  },
  {
    question: "Does LLP require MoA and AoA?",
    answer: (
      <div>
        <p>
          No, Limited Liability Partnerships (LLPs) do not require Memorandum of Association (MoA) and Articles of Association (AoA) like companies do. Instead, LLPs are governed by the LLP Agreement, which is similar in purpose but different in format. The LLP Agreement defines the rights, duties, and obligations of partners, profit-sharing ratio, and other operational aspects of the partnership.
        </p>
      </div>
    )
  },
  {
    question: "Can a body corporate be a designated partner of an LLP?",
    answer: (
      <div>
        <p>
          No, a body corporate cannot be a designated partner of an LLP directly. While a body corporate can be a partner in an LLP, only natural persons (individuals) can be designated partners. If a body corporate is a partner, it must nominate a natural person to act as the designated partner on its behalf. This nominated person will be responsible for the compliance requirements and will be held accountable for legal obligations of the LLP.
        </p>
      </div>
    )
  },
  {
    question: "Can a partnership firm be converted to an LLP?",
    answer: (
      <div>
        <p>
          Yes, a partnership firm can be converted into an LLP. The Limited Liability Partnership Act, 2008 provides a specific procedure for this conversion. The process involves filing Form 17 (for conversion from firm to LLP) with the Registrar of Companies, along with other required documents such as the LLP agreement, statement of partners, and details of the firm's assets and liabilities. The conversion allows the business to retain its identity while gaining the benefits of limited liability.
        </p>
      </div>
    )
  },
  {
    question: "Can a company be converted into an LLP?",
    answer: (
      <div>
        <p>
          Yes, a private company or an unlisted public company can be converted into an LLP under the provisions of the LLP Act, 2008. The conversion is done by filing Form 18 with the Registrar of Companies along with the required documents and fees. Upon conversion, all assets, liabilities, and obligations of the company are transferred to the LLP. The company is then considered dissolved without going through the winding-up process. However, certain conditions like no security interest in its assets and up-to-date filing of all documents must be met for conversion.
        </p>
      </div>
    )
  },
  {
    question: "How can I know the status of my LLP application?",
    answer: (
      <div>
        <p>
          You can check the status of your LLP application by visiting the Ministry of Corporate Affairs (MCA) portal. After logging in with your credentials, navigate to the 'MCA Services' section and select 'Track SRN/Application Status'. Enter the Service Request Number (SRN) generated at the time of your application submission, and the system will display the current status of your application. Alternatively, you can also contact the MCA helpdesk or your professional advisor who is handling the registration process for you.
        </p>
      </div>
    )
  },
  {
    question: "What is the timeline involved or time taken for the registration of an LLP?",
    answer: (
      <div>
        <p>
          The LLP registration process in India typically takes around 15-20 working days, but this can vary based on several factors. Here's a general timeline:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-3">
          <li>Obtaining DSC (Digital Signature Certificate): 3-5 working days</li>
          <li>DPIN/DIN application: 2-3 working days</li>
          <li>Name reservation: 2-7 working days</li>
          <li>Filing incorporation documents: 5-7 working days</li>
          <li>LLP Agreement filing: Within 30 days of incorporation</li>
        </ul>
        <p className="mt-3">
          The actual time may be shorter or longer depending on the completeness of the documents provided, government processing times, and any queries raised during the process. Working with a professional can help streamline the process and potentially reduce delays.
        </p>
      </div>
    )
  }
];
