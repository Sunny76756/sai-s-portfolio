import React from 'react';
import { Code, Wrench, Database } from 'lucide-react';

const skills = {
  frontend: [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'Bootstrap 5', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 80 },
  ],
  tools: [
    { name: 'VS Code', level: 90 },
    { name: 'ServiceNow Developer ITSM', level: 85 },
    { name: 'GitHub', level: 80 },
  ],
};

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-900 dark:bg-blue-600 h-2.5 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-white mb-16">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Code className="w-6 h-6 text-blue-900 dark:text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold text-blue-900 dark:text-white">
                Frontend Development
              </h3>
            </div>
            {skills.frontend.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Wrench className="w-6 h-6 text-blue-900 dark:text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold text-blue-900 dark:text-white">
                Development Tools
              </h3>
            </div>
            {skills.tools.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}