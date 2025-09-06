import React from 'react';
import ContentCard from '../components/ContentCard';

const Assignment2: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Assignment 2: Docker Containerization</h1>
      <ContentCard title="Task">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Containerize the API from Assignment 1.</li>
          <li>Expose port 8000 and run locally.</li>
        </ul>
      </ContentCard>
      <ContentCard title="Acceptance Criteria">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Image size reasonable (&lt; 500MB preferred for this exercise).</li>
          <li>Runs as non-root user.</li>
          <li>Health endpoint reachable at /.</li>
        </ul>
      </ContentCard>
      <ContentCard title="Submission">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Dockerfile.</li>
          <li>Screenshot of docker run logs.</li>
        </ul>
      </ContentCard>
    </div>
  );
};

export default Assignment2;
