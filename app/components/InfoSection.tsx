interface InfoItem {
  text: string;
}

interface InfoSectionProps {
  title: string;
  items: InfoItem[];
  className?: string;
}

export const InfoSection = ({ title, items, className = "" }: InfoSectionProps) => {
  return (
    <div className={`bg-teal-50 rounded-lg p-6 shadow-sm h-full ${className}`}>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
            <span className="inline-block w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 flex-shrink-0" />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}; 