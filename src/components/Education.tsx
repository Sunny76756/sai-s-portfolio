import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-white mb-16">
          Education
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-blue-900 dark:border-blue-600">
            <div className="absolute -left-3 top-0">
              <div className="bg-blue-900 dark:bg-blue-600 rounded-full p-2">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="mb-8">
              <span className="text-sm text-blue-900 dark:text-blue-400 font-semibold">
                2018 - 2022
              </span>
              <h3 className="text-xl font-semibold text-blue-900 dark:text-white mt-2">
                B.Tech in Electronics and Communication Engineering
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                SCSVMV University
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Kanchipuram, Tamil Nadu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}