import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Yantrik Rescuers Website',
    description: 'A comprehensive website for emergency rescue services with real-time tracking and response system.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
    technologies: ['React.js', 'HTML', 'CSS', 'JavaScript'],
    achievements: [
      '20% performance improvement',
      'Enhanced user retention',
      'Improved load times',
      'Responsive design implementation',
    ],
  },
  {
    title: 'IOT Based Smart Environment Monitoring',
    description: 'An innovative IoT solution for real-time environmental monitoring using FPGA and cloud integration.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800',
    technologies: [' Sparta 6 FPGA', 'IoT', 'Verilog HDL'],
    achievements: [
      'Real-time data processing',
      'Remote monitoring capabilities',
      'Automated alerts system',
      'Environmental analysis',
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-white mb-16">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-blue-900 dark:text-white mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-white mb-2">
                    Key Achievements
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    {project.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}