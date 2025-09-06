import React from 'react';

interface Props {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

const ContentCard: React.FC<Props> = ({ title, subtitle, children }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
      {(title || subtitle) && (
        <div className="mb-4">
          {title && <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>}
          {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
};

export default ContentCard;
