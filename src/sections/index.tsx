import React from 'react';
// Types are imported by consumers; no local types needed here.

// Contract: Given a section id, return a React node that renders its content.
// For now, we’ll defer to the existing switch in App while we incrementally migrate.
// When a section component exists here, App can import and use it to render.

export type SectionRenderer = (id: string) => React.ReactNode | null;

// Placeholder registry for future modular components.
const registry: Record<string, React.ComponentType> = {};

export function renderSectionById(id: string): React.ReactNode | null {
  const Comp = registry[id];
  if (Comp) return <Comp />;
  return null; // App will fall back to its existing switch for now
}

export function registerSection(id: string, Comp: React.ComponentType) {
  registry[id] = Comp;
}
