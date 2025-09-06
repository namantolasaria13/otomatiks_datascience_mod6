import React from 'react';
import ContentCard from '../components/ContentCard';

const MiniProject: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mini-Project: Real-Time Churn Prediction API</h1>
        <p className="text-gray-600 text-lg">Build an end-to-end service with training, serving, containerization, monitoring, and automation.</p>
      </div>

      <ContentCard title="Dataset">
        <p className="text-gray-700">Use the Telco Customer Churn dataset from Kaggle or an equivalent public dataset. Include a data dictionary and note any preprocessing you apply (encoding, scaling, imputation).</p>
      </ContentCard>

      <ContentCard title="Deliverables">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Training notebook or script that exports a model artifact.</li>
          <li>FastAPI service exposing a /predict endpoint.</li>
          <li>Dockerfile and instructions to build and run.</li>
          <li>Evidently report comparing training vs. recent data.</li>
          <li>Optional: CI pipeline that builds and pushes the image.</li>
        </ul>
      </ContentCard>

      <ContentCard title="Milestones">
        <ol className="list-decimal pl-6 space-y-1 text-gray-700">
          <li>Data preparation and baseline model.</li>
          <li>API implementation with contracts and tests.</li>
          <li>Containerization and local smoke test.</li>
          <li>Monitoring report and dashboard stub.</li>
          <li>CI build and optional deploy.</li>
        </ol>
      </ContentCard>

      <ContentCard title="Architecture (Textual)">
        <p className="text-gray-700">Client → API Gateway → FastAPI Service → Model Artifact. Logs/metrics → Monitoring (Evidently + Prometheus). CI builds container → Registry → Deploy to target.</p>
      </ContentCard>

      <ContentCard title="Evaluation Rubric">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Reproducibility (setup, requirements, scripts).</li>
          <li>API quality (validation, docs, tests).</li>
          <li>Operational readiness (container, logs, health checks).</li>
          <li>Monitoring depth (metrics, drift analysis).</li>
        </ul>
      </ContentCard>
    </div>
  );
};

export default MiniProject;
