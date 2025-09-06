import type { ComponentType } from 'react';

export interface Section {
  id: string;
  title: string;
  completed: boolean;
  type: 'lesson' | 'lab' | 'assignment' | 'project';
  icon: ComponentType<any>;
  duration?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Module {
  id: string;
  title: string;
  completed: boolean;
  sections: Section[];
}
