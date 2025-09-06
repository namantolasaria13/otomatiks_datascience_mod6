import React from 'react';
import { Target, CheckCircle, GitBranch, Zap, Monitor } from 'lucide-react';

export const WhatIsMLOps: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">What is MLOps?</h1>
        <p className="text-gray-600 text-xl mb-8">Understanding the fundamentals of Machine Learning Operations and why it's essential for modern data science teams.</p>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">MLOps Definition</h2>
        <p className="text-lg leading-relaxed">
          MLOps (Machine Learning Operations) is a set of practices that aims to deploy and maintain machine learning models in production reliably and efficiently. It combines Machine Learning, DevOps, and Data Engineering to create a unified workflow for the entire ML lifecycle.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Target className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">The Problem MLOps Solves</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <span>90% of ML models never make it to production</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <span>Models degrade over time without monitoring</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <span>Lack of reproducibility and version control</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <span>Manual deployment processes are error-prone</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">MLOps Benefits</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <span>Faster time to market for ML solutions</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <span>Improved model reliability and performance</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <span>Automated testing and deployment</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <span>Better collaboration between teams</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key MLOps Principles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GitBranch className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Version Control</h3>
            <p className="text-gray-600">Track code, data, and model versions for reproducibility</p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Automation</h3>
            <p className="text-gray-600">Automate testing, deployment, and monitoring processes</p>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Monitor className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Monitoring</h3>
            <p className="text-gray-600">Continuous monitoring of model performance and data quality</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">MLOps vs Traditional DevOps</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Aspect</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Traditional DevOps</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">MLOps</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium text-gray-900">Code</td>
                <td className="py-3 px-4 text-gray-700">Application code</td>
                <td className="py-3 px-4 text-gray-700">Code + Data + Models</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium text-gray-900">Testing</td>
                <td className="py-3 px-4 text-gray-700">Unit, integration tests</td>
                <td className="py-3 px-4 text-gray-700">Data validation, model performance tests</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium text-gray-900">Deployment</td>
                <td className="py-3 px-4 text-gray-700">Deploy application</td>
                <td className="py-3 px-4 text-gray-700">Deploy model + inference pipeline</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-gray-900">Monitoring</td>
                <td className="py-3 px-4 text-gray-700">System metrics, logs</td>
                <td className="py-3 px-4 text-gray-700">Model drift, data quality, business metrics</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
