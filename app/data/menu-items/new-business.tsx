import { MdBusiness } from "react-icons/md";
import { BiGroup, BiBuildingHouse } from "react-icons/bi";
import { RiFileListLine, RiGovernmentLine } from "react-icons/ri";
import type { MenuData } from "../../types/nav-types";

export const menuData: MenuData = {
  businessRegistration: {
    title: 'Business Registration',
    icon: <MdBusiness className="w-5 h-5" />,
    items: [
      { title: 'Private Limited Company Registration', path: '/business/private-limited' },
      { title: 'Limited Liability Partnership (LLP)', path: '/business/llp' },
      { title: 'Partnership Firm Registration', path: '/business/partnership' },
      { title: 'Public Limited Company Registration', path: '/business/public-limited' },
      { title: 'One Person Company Registration', path: '/business/opc' },
      { title: 'Startup Business Registration', path: '/business/startup' },
      { title: 'Sole Proprietorship Registration', path: '/business/sole-proprietorship' },
    ]
  },
  ngo: {
    title: 'NGO',
    icon: <BiGroup className="w-5 h-5" />,
    items: [
      { title: 'Section 8 Company Registration', path: '/ngo/section-8' },
      { title: '80G & 12AA Registration', path: '/ngo/80g-12aa' },
      { title: 'Society Registration', path: '/ngo/society' },
      { title: 'Trust Registration', path: '/ngo/trust' },
      { title: 'FCRA Registration', path: '/ngo/fcra' },
    ]
  },
  licence: {
    title: 'Licence',
    icon: <RiFileListLine className="w-5 h-5" />,
    items: [
      { title: 'EPF Registration', path: '/licence/epf' },
      { title: 'ESIC Registration', path: '/licence/esic' },
      { title: 'FSSAI Licence', path: '/licence/fssai' },
    ]
  },
  specialEntities: {
    title: 'Special Entities',
    icon: <BiBuildingHouse className="w-5 h-5" />,
    items: [
      { title: 'Producer Company', path: '/special/producer' },
      { title: 'Indian subsidiary Registration', path: '/special/subsidiary' },
      { title: 'Branch Office Registration', path: '/special/branch' },
      { title: 'Liaison office Registration', path: '/special/liaison' },
      { title: 'Foreign Subsidiary Incorporation', path: '/special/foreign' },
    ]
  },
  governmentRegistration: {
    title: 'Government Registration',
    icon: <RiGovernmentLine className="w-5 h-5" />,
    items: [
      { title: 'Import/Export(IE) Code Registration', path: '/govt/ie-code' },
      { title: 'Udyam Registration / Udyog Aadhar(MSME/SSI)', path: '/govt/udyam' },
      { title: 'Startup India Registration', path: '/govt/startup-india' },
    ]
  }
}; 