import React from 'react';
import { ChevronRight, Clock, CheckCircle, Circle } from 'lucide-react';
import { Section, Module } from '../types/course';

interface HeaderProps {
  currentModule: Module;
  currentSection: Section | null;
  isCompleted: boolean;
  onToggleCompletion: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentModule,
  currentSection,
  isCompleted,
  onToggleCompletion,
}) => {
  return (
    <div className="bg-white border-b border-gray-200 px-8 py-6 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-2 text-xs text-gray-500 mb-1">
            <span className="uppercase tracking-wider text-blue-600 font-semibold">Course</span>
            <ChevronRight className="w-4 h-4" />
            <span className="font-medium text-gray-600">{currentModule.title}</span>
            {currentSection && (
              <>
                <ChevronRight className="w-4 h-4" />
                <span>{currentSection.title}</span>
              </>
            )}
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {currentSection ? currentSection.title : 'Select a Section'}
          </h1>
          {currentSection && (
            <div className="flex items-center space-x-4 mt-2">
              {currentSection.duration && (
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{currentSection.duration}</span>
                </div>
              )}
              {currentSection.difficulty && (
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                  currentSection.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                  currentSection.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {currentSection.difficulty}
                </span>
              )}
            </div>
          )}
        </div>
        {currentSection && (
          <button
            onClick={onToggleCompletion}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              isCompleted
                ? 'bg-green-100 text-green-800 hover:bg-green-200'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {isCompleted ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <Circle className="w-4 h-4" />
            )}
            <span className="font-medium">
              {isCompleted ? 'Completed' : 'Mark Complete'}
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
