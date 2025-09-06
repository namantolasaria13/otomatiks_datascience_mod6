import React from 'react';
import ContentCard from '../components/ContentCard';
import CodeBlock from '../components/CodeBlock';

const DockerContainerization: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Containerization with Docker</h1>
        <p className="text-gray-600 text-lg">Package your FastAPI service into a portable, reproducible container.</p>
      </div>

      <ContentCard title="Why Docker?">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Consistent environment across dev, stage, and prod.</li>
          <li>Portable images run anywhere—VMs, on-prem, or cloud.</li>
          <li>Scales well with orchestration (Kubernetes, ECS, etc.).</li>
        </ul>
      </ContentCard>

      <ContentCard title="Dockerfile (Multi-stage)">
        <CodeBlock label="Dockerfile" code={'# syntax=docker/dockerfile:1\n# Builder stage for dependencies\nFROM python:3.11-slim AS builder\nWORKDIR /app\nENV PYTHONDONTWRITEBYTECODE=1 \\\n+    PYTHONUNBUFFERED=1\nRUN apt-get update && apt-get install -y --no-install-recommends build-essential && rm -rf /var/lib/apt/lists/*\nCOPY requirements.txt ./\nRUN pip wheel --no-cache-dir --wheel-dir /wheels -r requirements.txt\n\n# Runtime image\nFROM python:3.11-slim AS runtime\nWORKDIR /app\nCOPY --from=builder /wheels /wheels\nRUN pip install --no-cache-dir /wheels/* && rm -rf /wheels\nCOPY . .\n# Security: run as a non-root user\nRUN useradd -m appuser && chown -R appuser:appuser /app\nUSER appuser\nEXPOSE 8000\nCMD [\"uvicorn\", \"main:app\", \"--host\", \"0.0.0.0\", \"--port\", \"8000\"]'} />
      </ContentCard>

      <ContentCard title="Build & Run">
        <CodeBlock label="Build" code={'docker build -t churn-api:latest .'} />
        <div className="h-2" />
        <CodeBlock label="Run" code={'docker run -p 8000:8000 churn-api:latest'} />
      </ContentCard>
    <ContentCard title="Tips">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Pin dependencies in requirements.txt for reproducible builds.</li>
          <li>Use non-root user in production images for security.</li>
          <li>Cache model artifacts in a mounted volume for faster deploys.</li>
      <li>Set resource limits (CPU/memory) when running in orchestrators.</li>
      <li>Emit structured logs (JSON) to simplify aggregation and observability.</li>
        </ul>
      </ContentCard>
    </div>
  );
};

export default DockerContainerization;
