import React from "react";
import type { InfoSection } from "~/components/InfoPanels";

export const infoPanelData: InfoSection[] = [
  {
    title: "What is a Private Limited Company?",
    content: (
      <div>
        <p className="mb-4">
          As per Section 2(68) of the Companies Act, 2013, a private company means a company having a minimum paid-up share
          capital as may be prescribed, and which by its articles:
        </p>
        <ol className="list-decimal pl-5 space-y-2 mb-4">
          <li>Restricts the right to transfer its shares;</li>
          <li>Except in case of One Person Company, limits the number of its members to two hundred;</li>
          <li>
            Provided that where two or more persons hold one or more shares in a company jointly, they shall, for this clause, be
            treated as a single member;
          </li>
        </ol>
        <p className="font-medium mb-3">Provided further that --</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Persons who are in the employment of the company; and</li>
          <li>
            Persons who, having been formerly in the employment of the company, were members of the company while in that
            employment and have continued to be members after the employment ceased, shall not be included in the number of
            members; and
          </li>
          <li>Prohibits any invitation to the public to subscribe for any securities of the company;</li>
          <li>
            The companies act lays down an explicit definition for private limited companies. Particular restrictions have been placed
            on the transfer of shares, the number of members, and public involvement as shareholders in order to maintain its status
            quo.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Understanding the Basics",
    content: (
      <p>
        A Private Limited Company is a type of business entity in India governed by the Companies Act, 2013. It is a separate legal
        entity distinct from its owners, providing limited liability protection to its shareholders. This means that in the event of financial
        distress, the personal assets of shareholders are protected.
      </p>
    ),
  },
  {
    title: "Benefits of Private Limited Company Registration",
    content: (
      <div>
        <p className="mb-4">Key benefits of registering a private limited company include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Limited Liability:</strong> Shareholders' liability is limited to their investment in the company.</li>
          <li><strong>Separate Legal Entity:</strong> The company is distinct from its shareholders, ensuring continuity and independence.</li>
          <li><strong>Access to Funding:</strong> Easier access to funding from venture capitalists and banks due to the structured nature of the entity.</li>
          <li><strong>Perpetual Succession:</strong> The company's existence is not affected by the status of shareholders, ensuring continuity.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Eligibility for Private Limited Company",
    content: (
      <div>
        <p className="mb-4"><strong>Pre-Requisites for Formation</strong></p>
        <p className="mb-3">Before initiating the formation process, certain prerequisites must be met:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Minimum Two Directors:</strong> A Private Limited Company requires a minimum of two directors.</li>
          <li><strong>Minimum Two Shareholders:</strong> It also requires at least two shareholders, who can be the same as the directors.</li>
          <li><strong>Registered Office Address:</strong> A physical address in Bangalore is mandatory for the company's registered office.</li>
          <li><strong>Digital Signature Certificate (DSC):</strong> Required for electronic filing of documents with the Registrar of Companies (RoC).</li>
          <li><strong>Director Identification Number (DIN):</strong> Directors must obtain a DIN, which is a unique identification number.</li>
        </ol>
      </div>
    ),
  },
  {
    title: "Private Limited Company Registration Documents",
    content: (
      <div>
        <p className="mb-4">Following documents are required for private limited company registration in India:</p>
        <ul className="list-disc pl-5 space-y-3">
          <li>Passport size photos of all the directors</li>
          <li>PAN Card and Aadhaar Card of all the directors</li>
          <li>Identity proofs of all the directors [Voter ID Card / Driving License / Passport (Any one of the following)]</li>
          <li>
            Address proof of the registered office of the company (Electricity bill / Any other utility bill). In case the premises are not
            owned, a NOC or legal agreement to use the premises shall be obtained from the landlord.
          </li>
          <li>
            Residential address proof of all the directors (self-attested) (Mobile bill / Bank Statement / Electricity Bill) (Bills shall not be
            older than 2 months)
          </li>
        </ul>
        <p className="my-4">If any of the shareholders is not an individual, then the following additional documents of the subscriber shall be provided:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Certificate of Incorporation</li>
          <li>Resolution to subscribe to the shares of the company</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Post-Registration Compliance",
    content: (
      <div>
        <p className="mb-4">
          Following the company's incorporation, it's crucial to maintain compliance and ensure smooth operation. Several post-incorporation
          steps are required:
        </p>
        <ul className="list-disc pl-5 space-y-3">
          <li>
            <strong>Open a Bank Account:</strong> Open a current bank account in the company's name for financial transactions.
          </li>
          <li>
            <strong>Tax Registrations:</strong> Register for the company's Permanent Account Number (PAN) and Tax Deduction and Collection
            Account Number (TAN).
          </li>
          <li>
            <strong>GST Registration:</strong> Register for Goods and Services Tax (GST) if applicable.
          </li>
          <li>
            <strong>Compliance Filings:</strong> Regularly file annual returns, financial statements, and other regulatory documents with the ROC.
          </li>
        </ul>
      </div>
    ),
  },
]; 