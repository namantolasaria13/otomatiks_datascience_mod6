import React from 'react';
import { Users, Activity, Layers, TrendingUp, Clock, Zap, Globe } from 'lucide-react';

const IntroDeployment: React.FC = () => {
  return (
  <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Introduction to Deployment in Data Science</h1>
        <p className="text-gray-600 text-xl mb-8">Learn the fundamentals of taking machine learning models from development to production environments.</p>
      </div>

  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">What is Model Deployment?</h2>
        <p className="text-gray-700 text-lg mb-6">
          Model deployment is the process of integrating a trained machine learning model into a production environment where it can make predictions on real-world data. It's the bridge between your experimental notebook and a business application that delivers value.
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
          <h3 className="font-semibold text-blue-900 mb-2">💡 Key Insight</h3>
          <p className="text-blue-800">A model that sits in a Jupyter notebook provides zero business value. Deployment is what transforms your ML experiment into a valuable business asset.</p>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Deployment Matters</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mt-1">
                <Users className="w-4 h-4 text-red-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Business Impact</h4>
                <p className="text-gray-600">Models need to serve real users and generate business value</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                <Activity className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Real-time Decisions</h4>
                <p className="text-gray-600">Enable instant predictions for time-sensitive applications</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mt-1">
                <Layers className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Integration</h4>
                <p className="text-gray-600">Seamlessly integrate with existing business systems</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mt-1">
                <TrendingUp className="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Scalability</h4>
                <p className="text-gray-600">Handle thousands of predictions per second</p>
              </div>
            </div>
          </div>
        </div>
      </div>

  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Deployment Patterns</h2>
        
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Batch Deployment</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Predictions are generated periodically on a schedule (hourly, daily, weekly). The model processes large datasets and stores results for later consumption.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Monthly customer churn reports</li>
                <li>• Daily sales forecasting</li>
                <li>• Weekly inventory optimization</li>
                <li>• Quarterly risk assessments</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Advantages:</h4>
              <p className="text-blue-800">Cost-effective, handles large datasets efficiently, simpler infrastructure</p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Real-Time Deployment</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Predictions are made instantly when requested. The model serves individual requests through an API endpoint with low latency requirements.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Fraud detection during transactions</li>
                <li>• Recommendation systems</li>
                <li>• Dynamic pricing</li>
                <li>• Real-time personalization</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Advantages:</h4>
              <p className="text-green-800">Immediate responses, personalized experiences, enables real-time decision making</p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Edge Deployment</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Models are deployed closer to where data is generated (mobile devices, IoT sensors, edge servers) to reduce latency and improve privacy.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Mobile app recommendations</li>
                <li>• Autonomous vehicle decision making</li>
                <li>• Smart camera object detection</li>
                <li>• Industrial IoT monitoring</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">Advantages:</h4>
              <p className="text-purple-800">Ultra-low latency, improved privacy, reduced bandwidth costs</p>
            </div>
          </div>
        </div>
      </div>

  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Deployment Architecture Components</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Model Server</h3>
            <p className="text-gray-700 mb-3">The API or service that loads your model and handles prediction requests.</p>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>• Load balancing</li>
              <li>• Request validation</li>
              <li>• Response formatting</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Layers className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Pipeline</h3>
            <p className="text-gray-700 mb-3">Processes and transforms incoming data before feeding it to the model.</p>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>• Data cleaning</li>
              <li>• Feature engineering</li>
              <li>• Normalization</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Monitoring System</h3>
            <p className="text-gray-700 mb-3">Tracks model performance, data quality, and system health.</p>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>• Performance metrics</li>
              <li>• Data drift detection</li>
              <li>• Alert management</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Infrastructure</h3>
            <p className="text-gray-700 mb-3">The underlying compute, storage, and networking resources.</p>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>• Container orchestration</li>
              <li>• Auto-scaling</li>
              <li>• Security policies</li>
            </ul>
          </div>
        </div>
      </div>

  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
        <h2 className="text-2xl font-bold mb-4">Common Deployment Challenges</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Technical Challenges</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Model versioning and rollbacks</li>
              <li>• Data format inconsistencies</li>
              <li>• Latency requirements</li>
              <li>• Resource optimization</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Operational Challenges</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Team coordination</li>
              <li>• Monitoring complexity</li>
              <li>• Security compliance</li>
              <li>• Cost management</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Deployment Lifecycle</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          <li>Model training and evaluation with clear metrics.</li>
          <li>Packaging artifacts and dependencies (requirements, Docker).</li>
          <li>API/service implementation with validation and tests.</li>
          <li>Operationalization: logging, monitoring, alerting, dashboards.</li>
          <li>Automation: CI builds, CD deploys, rollbacks.</li>
          <li>Iteration: retrain on fresh data, A/B test, improve.</li>
        </ol>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Pre-Production Checklist</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Contract agreed with consumers (request/response, error codes).</li>
          <li>Latency and throughput SLOs defined and measured.</li>
          <li>Security reviewed (authn/z, secrets, PII handling, SBOM).</li>
          <li>Dashboards and alerts configured; on-call runbook prepared.</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Pitfalls</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Training-serving skew due to mismatched preprocessing.</li>
          <li>Silent failures from missing input validation.</li>
          <li>Unversioned models causing irreproducible predictions.</li>
          <li>Ignoring business feedback loops and ground-truth lag.</li>
        </ul>
      </div>
    </div>
  );
};

export default IntroDeployment;
