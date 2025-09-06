import React, { useMemo, useState } from 'react';
import { Module, Section } from './types/course';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { module6Course } from './data/module6Course';

// Section components
import IntroDeployment from './sections/IntroDeployment';
import FastAPIServing from './sections/FastAPIServing';
import DockerContainerization from './sections/DockerContainerization';
import MonitoringEvidently from './sections/MonitoringEvidently';
import CICDAutomation from './sections/CICDAutomation';
import MiniProject from './sections/MiniProject';
import InteractiveLab from './sections/InteractiveLab';
import Assignment1 from './sections/Assignment1';
import Assignment2 from './sections/Assignment2';
import Assignment3 from './sections/Assignment3';
import Assignment4 from './sections/Assignment4';

const modules: Module[] = [module6Course];

export default function App() {
  const [selectedSection, setSelectedSection] = useState<string>('intro-deployment');
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());

  const toggleCompletion = (sectionId: string) => {
    const next = new Set(completedSections);
    next.has(sectionId) ? next.delete(sectionId) : next.add(sectionId);
    setCompletedSections(next);
  };

  const currentModule = modules[0];
  const currentSection: Section | undefined = useMemo(
    () => currentModule.sections.find((s) => s.id === selectedSection),
    [selectedSection]
  );

  const sectionMap: Record<string, React.ComponentType> = useMemo(
    () => ({
      'intro-deployment': IntroDeployment,
      'fastapi-serving': FastAPIServing,
      'docker-containerization': DockerContainerization,
      'monitoring-evidently': MonitoringEvidently,
      'cicd-automation': CICDAutomation,
      'mini-project': MiniProject,
      'interactive-lab': InteractiveLab,
      'assignment-1': Assignment1,
      'assignment-2': Assignment2,
      'assignment-3': Assignment3,
      'assignment-4': Assignment4,
    }),
    []
  );

  const SectionComponent = sectionMap[selectedSection] ?? (() => (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Section not found</h1>
      <p className="text-gray-600">Please pick a section from the sidebar.</p>
    </div>
  ));

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        modules={modules}
        selectedSectionId={selectedSection}
        completedSections={completedSections}
        onSelectSection={setSelectedSection}
        onToggleCompletion={toggleCompletion}
      />

      <div className="flex-1 flex flex-col ml-80">
        <Header
          currentModule={currentModule}
          currentSection={currentSection ?? null}
          isCompleted={currentSection ? completedSections.has(currentSection.id) : false}
          onToggleCompletion={() => currentSection && toggleCompletion(currentSection.id)}
        />

        <main className="p-8">
          <div className="max-w-5xl mx-auto">
            <SectionComponent />
          </div>
        </main>
      </div>
    </div>
  );
}