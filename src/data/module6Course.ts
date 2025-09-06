import { Module } from '../types/course';
import { BookOpen, Rocket, Package, BarChart3, Settings, Award, Lightbulb, FileText } from 'lucide-react';

export const module6Course: Module = {
  id: 'deployment-monitoring',
  title: 'MLOps & Production',
  completed: false,
  sections: [
    { id: 'intro-deployment', title: 'Introduction to Deployment in Data Science', completed: false, type: 'lesson', icon: BookOpen, duration: '20 min', difficulty: 'Beginner' },
    { id: 'fastapi-serving', title: 'Serving ML Models with FastAPI', completed: false, type: 'lesson', icon: Rocket, duration: '30 min', difficulty: 'Intermediate' },
    { id: 'docker-containerization', title: 'Containerization with Docker', completed: false, type: 'lesson', icon: Package, duration: '30 min', difficulty: 'Intermediate' },
    { id: 'monitoring-evidently', title: 'Monitoring ML Models with Evidently AI', completed: false, type: 'lesson', icon: BarChart3, duration: '25 min', difficulty: 'Intermediate' },
    { id: 'cicd-automation', title: 'CI/CD for ML (End-to-End Automation)', completed: false, type: 'lesson', icon: Settings, duration: '35 min', difficulty: 'Advanced' },
    { id: 'mini-project', title: 'Mini-Project: Real-Time Churn Prediction API', completed: false, type: 'project', icon: Award, duration: '2 hours', difficulty: 'Advanced' },
    { id: 'interactive-lab', title: 'Interactive Lab: Deployment Dashboards', completed: false, type: 'lab', icon: Lightbulb, duration: '1 hour', difficulty: 'Intermediate' },
    { id: 'assignment-1', title: 'Assignment 1: FastAPI Deployment', completed: false, type: 'assignment', icon: FileText, duration: '45 min', difficulty: 'Intermediate' },
    { id: 'assignment-2', title: 'Assignment 2: Docker Containerization', completed: false, type: 'assignment', icon: FileText, duration: '30 min', difficulty: 'Intermediate' },
    { id: 'assignment-3', title: 'Assignment 3: Data Drift Monitoring', completed: false, type: 'assignment', icon: FileText, duration: '40 min', difficulty: 'Advanced' },
    { id: 'assignment-4', title: 'Assignment 4: CI/CD Pipeline (Capstone)', completed: false, type: 'assignment', icon: FileText, duration: '1.5 hours', difficulty: 'Advanced' }
  ]
};
