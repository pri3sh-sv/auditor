import { MdBusiness, MdBusinessCenter } from "react-icons/md";
import { RiGovernmentLine } from "react-icons/ri";
import type { MenuData } from "../../types/nav-types";

export const growBusinessData: MenuData = {
  businessDevelopment: {
    title: 'Business Development',
    icon: <MdBusinessCenter className="w-5 h-5" />,
    items: [
      { title: 'Virtual CFO Services', path: '/grow/virtual-cfo' },
      { title: 'CMA Report', path: '/grow/cma-report' },
      { title: 'Business Plan Preparation', path: '/grow/business-plan' },
      { title: 'IND - AS', path: '/grow/ind-as' },
    ]
  },
  fdiCompliance: {
    title: 'FDI Compliance',
    icon: <RiGovernmentLine className="w-5 h-5" />,
    items: [
      { title: 'FEMA & FDI Compliance', path: '/grow/fema-fdi' },
      { title: 'External Commercial Borrowings (ECB) Compliance', path: '/grow/ecb' },
      { title: 'FCGPR Reporting - FDI Compliance', path: '/grow/fcgpr' },
      { title: 'RBI Compliance - FDI Compliance', path: '/grow/rbi' },
    ]
  },
  mergerAcquisition: {
    title: 'Merger/Acquisition',
    icon: <MdBusiness className="w-5 h-5" />,
    items: [
      { title: 'Valuation - Merger/Acquisition', path: '/grow/valuation' },
      { title: 'Taxation - Merger/Acquisition', path: '/grow/taxation' },
    ]
  }
}; 