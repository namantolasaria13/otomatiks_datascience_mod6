import React from 'react';
import ContentCard from '../components/ContentCard';
import CodeBlock from '../components/CodeBlock';

const CICDAutomation: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">CI/CD for ML (End-to-End Automation)</h1>
        <p className="text-gray-600 text-lg">Automate testing, building, and deployment of your ML services.</p>
      </div>

      <ContentCard title="Typical ML CI/CD Flow" subtitle="High-level steps without provider-specific syntax to avoid YAML pitfalls in JSX.">
        <ol className="list-decimal pl-6 space-y-1 text-gray-700">
          <li>Push code to repository (main or feature branch).</li>
          <li>Run tests (unit, data validation, inference smoke tests).</li>
          <li>Build container image and tag with version.</li>
          <li>Push image to registry (e.g., Docker Hub).</li>
          <li>Deploy container to target environment (VM, ECS, Kubernetes).</li>
          <li>Run post-deploy checks and notify on success/failure.</li>
        </ol>
      </ContentCard>

      <ContentCard title="Example: Minimal Test Command">
        <CodeBlock label="pytest" code={'pytest -q'} />
      </ContentCard>

      <ContentCard title="Container Build & Push (generic)">
        <CodeBlock label="Build" code={'docker build -t yourrepo/churn-api:1.0.0 .'} />
        <div className="h-2" />
        <CodeBlock label="Push" code={'docker push yourrepo/churn-api:1.0.0'} />
      </ContentCard>

      <ContentCard title="Best Practices">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Use branch protections and required checks before merging.</li>
          <li>Keep secrets in a secure store (never commit .env with secrets).</li>
          <li>Promote images through environments using tags (dev, staging, prod).</li>
          <li>Adopt canary or blue/green deployments for safe rollouts.</li>
          <li>Include data quality tests (schema, nulls, ranges) in CI alongside unit tests.</li>
          <li>Version models and data; publish model cards alongside images.</li>
        </ul>
      </ContentCard>

      <ContentCard title="Environments & Rollouts">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Maintain separate configs for dev/stage/prod via environment variables.</li>
          <li>Gate production deploys with manual approval after staging verification.</li>
          <li>Automate rollback if health checks fail or KPIs regress.</li>
        </ul>
      </ContentCard>
    </div>
  );
};

export default CICDAutomation;
