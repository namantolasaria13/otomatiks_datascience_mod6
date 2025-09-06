import React from 'react';
import ContentCard from '../components/ContentCard';
import CodeBlock from '../components/CodeBlock';

const InteractiveLab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Interactive Lab: Deployment Dashboards</h1>
        <p className="text-gray-600 text-lg">Create live dashboards to observe API usage and model health.</p>
      </div>

      <ContentCard title="Streamlit Setup">
        <CodeBlock label="Install" code={'pip install streamlit pandas plotly'} />
        <CodeBlock label="app.py" code={'import streamlit as st\nimport pandas as pd\nimport numpy as np\n\nst.set_page_config(page_title="ML Service Dashboard", layout="wide")\nst.title("Churn API Monitoring")\n\n# KPI cards\ncol1, col2, col3, col4 = st.columns(4)\ncol1.metric("Requests", "12,450", "+320")\ncol2.metric("P95 Latency", "180 ms", "-15 ms")\ncol3.metric("Error Rate", "0.7%", "-0.2%")\ncol4.metric("Drift Score", "0.23", "+0.05")\n\n# Time series panel\nlogs = pd.DataFrame({"ts": pd.date_range("2025-09-01", periods=14), "count": np.random.randint(400, 800, 14)})\nst.line_chart(logs.set_index("ts"))\n\n# Recent requests table (mock)\nrecent = pd.DataFrame({"ts": pd.date_range("2025-09-14", periods=5, freq="H"), "status": [200,200,200,500,200], "latency_ms": [120,150,180,600,140]})\nst.dataframe(recent)'} />
      </ContentCard>

    <ContentCard title="What to Show">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>API Logs: volume, latency, error rates.</li>
          <li>Drift Indicators: charts from Evidently reports.</li>
      <li>Model Performance: if labels available, rolling metrics.</li>
      <li>Infrastructure: CPU/memory utilization, container restarts.</li>
      <li>Business KPIs: conversion, approvals, churn observed.</li>
        </ul>
      </ContentCard>
    </div>
  );
};

export default InteractiveLab;
