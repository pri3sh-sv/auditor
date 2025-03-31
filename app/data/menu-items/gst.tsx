import { RiFileListLine } from "react-icons/ri";
import type { MenuData } from "../../types/nav-types";

export const gstData: MenuData = {
  gstServices: {
    title: 'GST Services',
    icon: <RiFileListLine className="w-5 h-5" />,
    items: [
      { title: 'Letter of Undertaking (LUT) in GST', path: '/gst/lut' },
      { title: 'GST Return Filing', path: '/gst/return-filing' },
      { title: 'GST Refund', path: '/gst/refund' },
      { title: 'GST Registration', path: '/gst/registration' },
      { title: 'GST Annual Return', path: '/gst/annual-return' },
      { title: 'GST E-Way Bill', path: '/gst/e-way-bill' },
      { title: 'GST Registration Cancellation/Surrender', path: '/gst/cancellation' },
      { title: 'GST Modification', path: '/gst/modification' },
    ]
  }
}; 