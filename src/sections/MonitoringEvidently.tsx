import React from 'react';
import ContentCard from '../components/ContentCard';
import CodeBlock from '../components/CodeBlock';

const MonitoringEvidently: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Monitoring ML Models with Evidently AI</h1>
        <p className="text-gray-600 text-lg">Detect data drift, monitor performance, and ensure model health after deployment.</p>
      </div>

      <ContentCard title="Install">
        <CodeBlock label="Terminal" code={'pip install evidently pandas scikit-learn'} />
      </ContentCard>

      <ContentCard title="Quick Start: Data Drift Report">
        <CodeBlock label="monitoring.py" code={'import pandas as pd\nfrom evidently.report import Report\nfrom evidently.metric_preset import DataDriftPreset\n\n# Reference: training data; Current: recent production slice\nref = pd.read_csv("train.csv")\ncur = pd.read_csv("recent.csv")\n\nreport = Report(metrics=[DataDriftPreset()])\nreport.run(reference_data=ref, current_data=cur)\nreport.save_html("data_drift_report.html")'} />
        <p className="text-gray-700 mt-3">Open the generated HTML to view interactive charts and drift metrics.</p>
      </ContentCard>

      <ContentCard title="What to Monitor">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Data Drift: feature distribution changes.</li>
          <li>Target Drift: changes in the target variable.</li>
          <li>Model Performance: accuracy, precision, recall over time.</li>
          <li>Data Quality: missing values, anomalies, invalid categories.</li>
          <li>Operational KPIs: latency, throughput, error rates, saturation.</li>
        </ul>
      </ContentCard>

      <ContentCard title="Operationalizing Reports">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Schedule daily jobs to generate drift reports from logged data.</li>
          <li>Store artifacts (HTML, JSON) for auditing and trend analysis.</li>
          <li>Trigger alerts when drift scores cross thresholds.</li>
          <li>Feed alerts into retraining pipelines if appropriate.</li>
        </ul>
      </ContentCard>

      <ContentCard title="Integrations & Alerts">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Send alerts to Slack/Teams via a webhook when drift {'>'} threshold.</li>
          <li>Export metrics to Prometheus and visualize in Grafana dashboards.</li>
          <li>Automate dataset snapshots to reproduce issues found in reports.</li>
        </ul>
      </ContentCard>
    </div>
  );
};

export default MonitoringEvidently;
