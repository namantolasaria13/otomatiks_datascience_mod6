import React, { useMemo } from 'react';
import { CheckCircle, Circle, ChevronRight, Clock } from 'lucide-react';
import { Module, Section } from '../types/course';

interface SidebarProps {
  modules: Module[];
  selectedSectionId: string;
  completedSections: Set<string>;
  onSelectSection: (id: string) => void;
  onToggleCompletion: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  modules,
  selectedSectionId,
  completedSections,
  onSelectSection,
  onToggleCompletion,
}) => {
  const { total, done, firstTitle } = useMemo(() => {
    const totalSections = modules.reduce((sum, m) => sum + m.sections.length, 0);
    const completed = modules.flatMap(m => m.sections).filter(s => completedSections.has(s.id)).length;
    const title = modules.length === 1 ? modules[0].title : 'Course';
    return { total: totalSections, done: completed, firstTitle: title };
  }, [modules, completedSections]);

  return (
  <div className="fixed inset-y-0 left-0 w-80 h-screen bg-white shadow-xl flex flex-col border-r border-gray-200 z-20">
      <div className="p-6 border-b border-gray-200 bg-white">
        <div className="text-xs font-semibold text-blue-600 tracking-wider">COURSE</div>
        <h1 className="text-lg font-bold text-gray-900 mt-1">{firstTitle}</h1>
        <p className="text-gray-500 text-sm mt-1">{done} of {total} sections completed</p>
        <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600" style={{ width: `${total ? Math.round((done/total)*100) : 0}%` }} />
        </div>
      </div>

  <div className="flex-1 overflow-y-auto">
        {modules.map((module) => (
          <div key={module.id} className="border-b border-gray-100">
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  module.completed ? 'bg-green-100' : 'bg-gray-100'
                }`}>
                  {module.completed ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : (
                    <Circle className="w-4 h-4 text-gray-400" />
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{module.title}</h3>
              </div>

              {module.sections.length > 0 && (
                <div className="ml-9 space-y-1">
                  {module.sections.map((section: Section, idx: number) => (
                    <div
                      key={section.id}
                      className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                        selectedSectionId === section.id 
                          ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                          : 'hover:bg-gray-50'
                      }`}
                      onClick={() => onSelectSection(section.id)}
                    >
                      <div className={`w-6 h-6 text-xs font-semibold rounded-md flex items-center justify-center ${selectedSectionId === section.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                        {idx + 1}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleCompletion(section.id);
                        }}
                        className="flex-shrink-0"
                      >
                        {completedSections.has(section.id) ? (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        ) : (
                          <Circle className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                      <section.icon className="w-4 h-4 text-gray-500" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium truncate">{section.title}</span>
                          <ChevronRight className="w-3 h-3 text-gray-400" />
                        </div>
                        {section.duration && (
                          <div className="flex items-center space-x-2 mt-1">
                            <Clock className="w-3 h-3 text-gray-400" />
                            <span className="text-xs text-gray-500">{section.duration}</span>
                            {section.difficulty && (
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                section.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                                section.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {section.difficulty}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                      {section.type === 'assignment' && (
                        <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">Assignment</span>
                      )}
                      {section.type === 'project' && (
                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Project</span>
                      )}
                      {section.type === 'lab' && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Lab</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg">
          {/* Using a simple SVG to avoid pulling Play here again */}
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z"></path>
          </svg>
          <span className="font-medium">Continue Learning</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
