import React from 'react';
import ContentCard from '../components/ContentCard';

const Assignment3: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Assignment 3: Data Drift Monitoring</h1>
      <ContentCard title="Task">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Generate an Evidently report comparing training and test slices.</li>
          <li>Identify any drifted features and summarize impact.</li>
        </ul>
      </ContentCard>
      <ContentCard title="Acceptance Criteria">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>At least one metric preset used (DataDriftPreset or TargetDriftPreset).</li>
          <li>Report saved as HTML and linked in the repo.</li>
        </ul>
      </ContentCard>
      <ContentCard title="Submission">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>HTML report from Evidently.</li>
          <li>1–2 paragraph summary of findings.</li>
        </ul>
      </ContentCard>
    </div>
  );
};

export default Assignment3;
