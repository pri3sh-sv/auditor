import { RiCloseLine, RiBuilding2Line, RiFileListLine } from "react-icons/ri";
import { MdBusinessCenter } from "react-icons/md";
import type { MenuData } from "../../types/nav-types";

export const manageBusinessData: MenuData = {
  accountingPayroll: {
    title: 'Accounting & Payroll',
    isHighlighted: true,
    icon: <MdBusinessCenter className="w-5 h-5" />,
    items: [
      { title: 'Bookkeeping & Accounting', path: '/manage/bookkeeping' },
      { title: 'Payroll Services', path: '/manage/payroll' },
    ]
  },
  ieCodeServices: {
    title: 'IE Code Services',
    isHighlighted: true,
    icon: <RiFileListLine className="w-5 h-5" />,
    items: [
      { title: 'Import/Export(IE) Code Modification', path: '/manage/ie-code-modification' },
      { title: 'Import/Export(IE) Code Renewal', path: '/manage/ie-code-renewal' },
    ]
  },
  fillingRenewal: {
    title: 'Filling & Renewal',
    isHighlighted: true,
    icon: <RiFileListLine className="w-5 h-5" />,
    items: [
      { title: 'PF Return', path: '/manage/pf-return' },
      { title: 'ESI Return', path: '/manage/esi-return' },
      { title: 'FSSAI Renewal', path: '/manage/fssai-renewal' },
      { title: 'Digital Keys (DSC)', path: '/manage/digital-keys' },
    ]
  },
  companyChanges: {
    title: 'Company Changes & return',
    isHighlighted: true,
    icon: <RiBuilding2Line className="w-5 h-5" />,
    items: [
      { title: 'Change Company Address', path: '/manage/address-change' },
      { title: 'Share Transfer of a Company', path: '/manage/share-transfer' },
      { title: 'Removal/Resignation of Director', path: '/manage/director-removal' },
      { title: 'Increase Authorised Share Capital', path: '/manage/share-capital' },
      { title: 'Company Name Change', path: '/manage/name-change' },
      { title: 'LLP Name Change', path: '/manage/llp-name-change' },
      { title: 'MOA & AOA Amendments', path: '/manage/moa-aoa' },
      { title: 'Appointment of Auditors', path: '/manage/auditor-appointment' },
      { title: 'DIN Surrender', path: '/manage/din-surrender' },
      { title: 'DIN Validation (DIR-3 KYC)', path: '/manage/din-validation' },
      { title: 'Update your DIN', path: '/manage/din-update' },
      { title: 'Add/Appointment of Director', path: '/manage/director-appointment' },
    ]
  },
  closureBusiness: {
    title: 'Closure of Business',
    isHighlighted: true,
    icon: <RiCloseLine className="w-5 h-5" />,
    items: [
      { title: 'Closure of Pvt Ltd', path: '/manage/close-private-limited' },
      { title: 'Closure of OPC', path: '/manage/close-opc' },
      { title: 'Closure of LLP', path: '/manage/close-llp' },
      { title: 'Dissolution of Partnership Firm', path: '/manage/dissolve-partnership' },
    ]
  },
  mandatoryFilings: {
    title: 'Mandatory Annual Filings',
    isHighlighted: true,
    icon: <RiFileListLine className="w-5 h-5" />,
    items: [
      { title: 'Private limited Company RoC Compliance', path: '/manage/roc-compliance-private' },
      { title: 'OPC RoC Compliance', path: '/manage/roc-compliance-opc' },
      { title: 'LLP RoC Compliance', path: '/manage/roc-compliance-llp' },
    ]
  }
}; 