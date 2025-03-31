import { RiFileListLine } from "react-icons/ri";
import type { MenuData } from "../../types/nav-types";

export const incomeTaxData: MenuData = {
  incomeTaxServices: {
    title: 'Income Tax Services',
    icon: <RiFileListLine className="w-5 h-5" />,
    items: [
      { title: 'Income Tax Returns Filings', path: '/tax/itr' },
      { title: 'Form 15CA & Form 15CB', path: '/tax/form-15' },
      { title: 'NRI Income Tax Planning & Filing', path: '/tax/nri' },
    ]
  },
  nsdlServices: {
    title: 'NSDL Services',
    icon: <RiFileListLine className="w-5 h-5" />,
    items: [
      { title: 'PAN Application', path: '/tax/pan' },
      { title: 'TAN Application', path: '/tax/tan' },
      { title: 'Tax Deducted at Source', path: '/tax/tds' },
    ]
  }
}; 