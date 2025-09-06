import React from 'react';
import ContentCard from '../components/ContentCard';
import CodeBlock from '../components/CodeBlock';

const FastAPIServing: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Serving ML Models with FastAPI</h1>
        <p className="text-gray-600 text-lg">Build a high-performance API for real-time predictions using FastAPI. This guide covers packaging your model, designing request/response contracts, testing, and production hardening.</p>
      </div>

      <ContentCard title="Why FastAPI for ML?">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>High performance with async support—great for low-latency predictions.</li>
          <li>Built-in data validation using Pydantic reduces runtime errors.</li>
          <li>Automatic interactive docs (Swagger UI) accelerates integration.</li>
          <li>Dependency injection makes it easy to manage model loading and configuration.</li>
        </ul>
      </ContentCard>

      <ContentCard title="1. Install Dependencies">
        <CodeBlock label="Terminal" code={'pip install fastapi uvicorn scikit-learn joblib pydantic'} />
      </ContentCard>

      <ContentCard title="2. Define Request & Response Models (models.py)">
        <CodeBlock label="models.py" code={'from pydantic import BaseModel\n\nclass PredictRequest(BaseModel):\n    age: int\n    income: float\n\nclass PredictResponse(BaseModel):\n    churn_probability: float'} />
        <p className="text-gray-700 mt-3">Keep contracts versioned. If you change fields, introduce a new version (e.g., PredictRequestV2) to avoid breaking clients.</p>
      </ContentCard>

      <ContentCard title="3. Create the FastAPI App (main.py)">
        <CodeBlock label="main.py" code={'from fastapi import FastAPI, HTTPException\nfrom models import PredictRequest, PredictResponse\nimport joblib\nimport numpy as np\n\napp = FastAPI(title="Churn Prediction API")\n\n# Load your trained model artifact\nmodel = joblib.load("model.joblib")\n\n@app.get("/")\ndef root():\n    return {"status": "ok"}\n\n@app.post("/predict", response_model=PredictResponse)\ndef predict(payload: PredictRequest):\n    try:\n        features = np.array([[payload.age, payload.income]])\n        proba = float(model.predict_proba(features)[0][1])\n        return PredictResponse(churn_probability=proba)\n    except Exception as e:\n        raise HTTPException(status_code=400, detail=str(e))'} />
        <p className="text-gray-700 mt-3">Load the model once on startup. For large models, preload and warm up with a dummy call to reduce first-request latency.</p>
      </ContentCard>

      <ContentCard title="4. Run Locally">
        <CodeBlock label="Terminal" code={'uvicorn main:app --reload --host 0.0.0.0 --port 8000'} />
        <p className="text-gray-700 mt-3">Open http://localhost:8000/docs to try the API.</p>
      </ContentCard>

      <ContentCard title="5. Example Request">
        <CodeBlock label="curl" code={'curl -X POST "http://localhost:8000/predict" \\n  -H "Content-Type: application/json" \\n  -d "{\\"age\\": 32, \\"income\\": 45000}"'} />
      </ContentCard>

      <ContentCard title="6. Production Considerations">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Run with multiple workers (e.g., gunicorn with uvicorn workers) for CPU-bound models.</li>
          <li>Add request timeouts, retries, and circuit breakers at the client or gateway.</li>
          <li>Separate model loading from request path; warm up models on start.</li>
          <li>Log inputs/outputs responsibly (PII-safe) for later monitoring.</li>
          <li>Add health checks: a fast GET /health that verifies model is loaded.</li>
          <li>Implement rate limiting and authentication at an API gateway if exposed publicly.</li>
        </ul>
      </ContentCard>

      <ContentCard title="7. Testing Strategy">
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Unit tests: validate preprocessing and utility functions.</li>
          <li>Schema tests: send malformed requests to ensure proper 4xx responses.</li>
          <li>Inference smoke tests: run a handful of known inputs and assert ranges (0–1).</li>
        </ul>
        <CodeBlock label="test_api.py" code={'from fastapi.testclient import TestClient\nfrom main import app\n\nclient = TestClient(app)\n\ndef test_predict_ok():\n    r = client.post("/predict", json={"age": 30, "income": 50000})\n    assert r.status_code == 200\n    proba = r.json()["churn_probability"]\n    assert 0.0 <= proba <= 1.0'} />
      </ContentCard>
    </div>
  );
};

export default FastAPIServing;
