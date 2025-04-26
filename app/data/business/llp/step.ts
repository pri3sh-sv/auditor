import type { GuideStep } from "~/components/StepByStepGuide";

export const registrationSteps: GuideStep[] = [
  {
    id: 1,
    title: "Getting DPIN",
    description: "DPIN stands for Designated Partner Identification Number. All the designated partners should get a DPIN by applying through eForm DIR-3. If a designated partner already has a DIN (Director Identification Number), the same can be used as DPIN."
  },
  {
    id: 2,
    title: "Getting DSC",
    description: "The DSC (Digital Signature Certificate) is essential for doing all the online filings of the LLP. It is the only way to authenticate electronically submitted documents and it protects the data. So, all the Designated Partners of the LLP need to apply and obtain a DSC. DSC is given by certain government authorised agencies called \"Certifying Authorities\" whom you can find through the MCA portal."
  },
  {
    id: 3,
    title: "Name Reservation",
    description: "Before deciding on the preferred name, run a free name search using the government portal to check if any other companies are using the same or similar names. If yes, then change your preferred name and make sure it's available. To reserve the name, log in to the MCA portal and click the \"E-Forms\" link. Using Form-1 submit the name reservation application. You have to provide information of designated partners, pay the fees, and append digital signatures for this. An application. Once approved, it is valid only for 3 month within which you are expected to apply for incorporation. If not, the name registration will expire and you have to do it again."
  },
  {
    id: 4,
    title: "Apply for incorporation",
    description: "Once the name is approved, you can file your application through FiLLiP (Form for incorporation of Limited Liability Partnership) for incorporation of the LLP along with the documents required, and fees prescribed. Then you have to wait for the application status to become \"Approved\"."
  },
  {
    id: 5,
    title: "File LLP agreement",
    description: "Finally, within 30 days of the incorporation, you have to file an LLP agreement using Form 3. The LLP agreement is like the MoA and AoA of the company and should lay down all the guidelines for how the LLP must function starting from its constitution to its dissolution. It has to be printed on a stamp paper of appropriate value. Make sure that the LLP agreement is drafted by professionals so that the provisions are clear and unambiguous. eAuditor's LLP registration package covers this too."
  }
];
