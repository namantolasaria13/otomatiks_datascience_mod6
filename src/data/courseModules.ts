import { Module } from '../types/course';
import { BookOpen, Target, Settings, Code, Database, BarChart3, GitBranch, Award, Lightbulb, FileText, Layers, Server, Cloud, Monitor, AlertTriangle, TrendingUp } from 'lucide-react';

export const courseModules: Module[] = [
  {
    id: 'introduction',
    title: 'Introduction to MLOps',
    completed: false,
    sections: [
      { id: 'what-is-mlops', title: 'What is MLOps?', completed: false, type: 'lesson', icon: BookOpen, duration: '15 min', difficulty: 'Beginner' },
      { id: 'mlops-lifecycle', title: 'ML Lifecycle Overview', completed: false, type: 'lesson', icon: Target, duration: '20 min', difficulty: 'Beginner' },
      { id: 'tools-ecosystem', title: 'MLOps Tools Ecosystem', completed: false, type: 'lesson', icon: Settings, duration: '25 min', difficulty: 'Intermediate' }
    ]
  },
  {
    id: 'deployment-monitoring',
    title: 'Deployment & Monitoring',
    completed: false,
    sections: [
      { id: 'intro-deployment', title: 'Introduction to Deployment in Data Science', completed: false, type: 'lesson', icon: BookOpen, duration: '30 min', difficulty: 'Beginner' },
      { id: 'fastapi-serving', title: 'Serving ML Models with FastAPI', completed: false, type: 'lesson', icon: Code, duration: '45 min', difficulty: 'Intermediate' },
      { id: 'docker-containerization', title: 'Containerization with Docker', completed: false, type: 'lesson', icon: Database, duration: '40 min', difficulty: 'Intermediate' },
      { id: 'monitoring-evidently', title: 'Monitoring ML Models with Evidently AI', completed: false, type: 'lesson', icon: BarChart3, duration: '35 min', difficulty: 'Intermediate' },
      { id: 'cicd-automation', title: 'CI/CD for ML (End-to-End Automation)', completed: false, type: 'lesson', icon: GitBranch, duration: '50 min', difficulty: 'Advanced' },
      { id: 'mini-project', title: 'Mini-Project: Real-Time Churn Prediction API', completed: false, type: 'project', icon: Award, duration: '2 hours', difficulty: 'Advanced' },
      { id: 'interactive-lab', title: 'Interactive Lab: Deployment Dashboards', completed: false, type: 'lab', icon: Lightbulb, duration: '1 hour', difficulty: 'Intermediate' },
      { id: 'assignment-1', title: 'Assignment 1: FastAPI Deployment', completed: false, type: 'assignment', icon: FileText, duration: '45 min', difficulty: 'Intermediate' },
      { id: 'assignment-2', title: 'Assignment 2: Docker Containerization', completed: false, type: 'assignment', icon: FileText, duration: '30 min', difficulty: 'Intermediate' },
      { id: 'assignment-3', title: 'Assignment 3: Data Drift Monitoring', completed: false, type: 'assignment', icon: FileText, duration: '40 min', difficulty: 'Advanced' },
      { id: 'assignment-4', title: 'Assignment 4: CI/CD Pipeline (Capstone)', completed: false, type: 'assignment', icon: FileText, duration: '1.5 hours', difficulty: 'Advanced' }
    ]
  },
  {
    id: 'data-versioning',
    title: 'Data Versioning & Management',
    completed: false,
    sections: [
      { id: 'dvc-basics', title: 'Data Version Control (DVC)', completed: false, type: 'lesson', icon: Database, duration: '35 min', difficulty: 'Intermediate' },
      { id: 'data-pipelines', title: 'Building Data Pipelines', completed: false, type: 'lesson', icon: Layers, duration: '40 min', difficulty: 'Advanced' },
      { id: 'feature-stores', title: 'Feature Stores & Management', completed: false, type: 'lesson', icon: Server, duration: '30 min', difficulty: 'Advanced' }
    ]
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & Scaling',
    completed: false,
    sections: [
      { id: 'cloud-deployment', title: 'Cloud Deployment Strategies', completed: false, type: 'lesson', icon: Cloud, duration: '45 min', difficulty: 'Advanced' },
      { id: 'kubernetes-ml', title: 'Kubernetes for ML Workloads', completed: false, type: 'lesson', icon: Settings, duration: '60 min', difficulty: 'Advanced' },
      { id: 'scaling-apis', title: 'Scaling ML APIs', completed: false, type: 'lesson', icon: TrendingUp, duration: '35 min', difficulty: 'Advanced' }
    ]
  },
  {
    id: 'monitoring-advanced',
    title: 'Advanced Monitoring',
    completed: false,
    sections: [
      { id: 'model-observability', title: 'Model Observability', completed: false, type: 'lesson', icon: Monitor, duration: '40 min', difficulty: 'Advanced' },
      { id: 'alerting-systems', title: 'Alerting & Incident Response', completed: false, type: 'lesson', icon: AlertTriangle, duration: '30 min', difficulty: 'Intermediate' },
      { id: 'performance-optimization', title: 'Performance Optimization', completed: false, type: 'lesson', icon: TrendingUp, duration: '35 min', difficulty: 'Advanced' }
    ]
  }
];
