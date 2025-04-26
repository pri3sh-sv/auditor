import React from "react";
import type { FaqItem } from "~/components/FaqAccordion";

export const faqData: FaqItem[] = [
  {
    question: "How long does it take to register a partnership firm?",
    answer: (
      <div>
        <p>
          The registration of a partnership firm typically takes about 10 days. However, the timeline can vary depending on departmental approval and the efficiency of the respective departments. This timeline assumes that all required documents are prepared correctly and submitted without any errors. Working with a professional can help streamline the process and potentially reduce delays.
        </p>
      </div>
    )
  },
  {
    question: "Is there any reason why my partnership could be affirmed invalid?",
    answer: (
      <div>
        <p>
          Yes, a partnership could be declared invalid for several reasons, including:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-3">
          <li>If the partnership is formed for an illegal purpose or business</li>
          <li>If any partner is a minor (unless admitted to the benefits of partnership)</li>
          <li>If the partnership deed contains terms that are against public policy</li>
          <li>If there are misrepresentations or fraud in the formation of the partnership</li>
          <li>If the partnership violates any provisions of the Indian Partnership Act, 1932</li>
          <li>If the partnership agreement lacks essential elements such as mutual consent, consideration, or legal capacity of partners</li>
        </ul>
      </div>
    )
  },
  {
    question: "Can all partners end the partnership if they want to?",
    answer: (
      <div>
        <p>
          Yes, if all partners mutually agree to dissolve the partnership, they can do so at any time. This is known as dissolution by mutual consent. The partners would need to:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-3">
          <li>Create a dissolution deed documenting their agreement to end the partnership</li>
          <li>Settle all accounts, including debts and assets of the partnership</li>
          <li>Notify the Registrar of Firms about the dissolution</li>
          <li>Publish a notice of dissolution in the local newspaper</li>
          <li>File the required forms with tax authorities</li>
        </ul>
        <p className="mt-3">
          The dissolution process should follow any procedures outlined in the original partnership deed, if specified.
        </p>
      </div>
    )
  },
  {
    question: "Is it possible to get my registration certificate revoked?",
    answer: (
      <div>
        <p>
          Yes, a partnership registration certificate can be revoked under certain circumstances, including:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-3">
          <li>If the registration was obtained through fraud or misrepresentation</li>
          <li>If the partnership is engaging in illegal activities</li>
          <li>If the partnership has been dissolved but failed to notify the Registrar</li>
          <li>If there is a court order directing the revocation</li>
          <li>If the partnership consistently fails to comply with legal requirements and filings</li>
        </ul>
        <p className="mt-3">
          The Registrar of Firms has the authority to revoke a registration certificate after giving the partners an opportunity to be heard and providing proper reasoning for the revocation.
        </p>
      </div>
    )
  },
  {
    question: "When it comes to partnerships, what is the extent of liability?",
    answer: (
      <div>
        <p>
          In a traditional partnership firm (not an LLP), the liability of partners is unlimited, joint, and several. This means:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-3">
          <li>Every partner is liable jointly with all other partners and also separately for all acts of the firm done while they are a partner</li>
          <li>If the firm's assets are insufficient to meet its liabilities, the personal assets of the partners can be used to satisfy the debts</li>
          <li>A creditor can proceed against any one partner or all partners for recovery of dues</li>
          <li>Even if one partner incurs the liability, all partners are responsible</li>
          <li>The liability extends to the full amount of debt regardless of a partner's capital contribution or profit-sharing ratio</li>
        </ul>
        <p className="mt-3">
          This unlimited liability is one of the main disadvantages of a partnership firm compared to limited liability structures like LLPs or companies.
        </p>
      </div>
    )
  }
]; 