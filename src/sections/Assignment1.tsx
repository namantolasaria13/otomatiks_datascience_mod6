import React from 'react';
import ContentCard from '../components/ContentCard';

const Assignment1: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Assignment 1: FastAPI Deployment</h1>
      <ContentCard title="Task">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Train a Logistic Regression model on Telco churn data.</li>
          <li>Expose a /predict endpoint via FastAPI.</li>
          <li>Return a JSON with churn_probability.</li>
        </ul>
      </ContentCard>
      <ContentCard title="Acceptance Criteria">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Input validation returns 422 on invalid payloads.</li>
          <li>Healthy root/health endpoint returns 200.</li>
          <li>Prediction values are in [0,1].</li>
        </ul>
      </ContentCard>
      <ContentCard title="Submission">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Python API code (main.py, models.py).</li>
          <li>Screenshot of a successful prediction (Postman or curl).</li>
        </ul>
      </ContentCard>
    </div>
  );
};

export default Assignment1;
