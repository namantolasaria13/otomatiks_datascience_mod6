import React from 'react';
import ContentCard from '../components/ContentCard';

const Assignment4: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Assignment 4: CI/CD Pipeline (Capstone)</h1>
      <ContentCard title="Task">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Create a pipeline that builds and pushes your Docker image on each push.</li>
          <li>Deploy the new image to your chosen target (optional).</li>
        </ul>
      </ContentCard>
      <ContentCard title="Acceptance Criteria">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Pipeline triggered on push to main.</li>
          <li>Image tag includes commit short SHA.</li>
          <li>Artifacts retained for at least 7 days.</li>
        </ul>
      </ContentCard>
      <ContentCard title="Submission">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Link to public repository.</li>
          <li>Screenshot of a successful pipeline run.</li>
        </ul>
      </ContentCard>
    </div>
  );
};

export default Assignment4;
