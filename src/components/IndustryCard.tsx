import React from 'react';

interface IndustryCardProps {
  industry: string;
  icon: React.ReactNode;
}

export function IndustryCard({ industry, icon }: IndustryCardProps) {
  return (
    <div className="industry-card bg-card p-6 text-center">
      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium">{industry}</h3>
    </div>
  );
}

export default IndustryCard;
